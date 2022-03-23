<?php

namespace App\Http\Controllers;

use App\Models\SocialAccount;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SocialLoginController extends Controller
{
    public function socialAuthLogin($provider, Request $request)
    {
        try {
            $checkUser = SocialAccount::where('provider_id', $request->uid)->where("provider_name", $provider)->first();
            if (!is_null($checkUser)) {
                $checkUser->provider_id = $request->uid;
                $checkUser->provider_name = $provider;
                Auth::loginUsingId($checkUser->user->id);
                return response()->json(["status" => "success"]);
            } else {
                $user = User::where('email', $request->email)->first();
                if (is_null($user)) {
                    $user = new User();
                    $user->name = $request->displayName;
                    $user->email = $request->email;
                    $user->save();
                }
                $user->socialAccounts()->create([
                    'provider_id' => $request->uid,
                    'provider_name' => $provider,
                ]);

                auth()->login($user);
                return response()->json(["status" => "success"]);
            }
        } catch (\Exception $ex) {
            return response()->json([], 404);
        }
    }


    public function logout()
    {
        Auth::logout();
        return redirect('/');
    }
}
