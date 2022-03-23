<!DOCTYPE html>
<html lang="en">

<head>
    <title>Login</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="baseURL" content="{{ url('/') }}">

    <style type="text/css">
        .show {
            display: block !important;
        }

    </style>
    <!--===============================================================================================-->
    <link rel="icon" type="image/png" href="{{ url('/images/icons/favicon.ico') }}" />
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{{ url('/vendor/bootstrap/css/bootstrap.min.css') }}">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{{ url('/fonts/font-awesome-4.7.0/css/font-awesome.min.css') }}">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{{ url('/fonts/Linearicons-Free-v1.0.0/icon-font.min.css') }}">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{{ url('/vendor/animate/animate.css') }}">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{{ url('/vendor/css-hamburgers/hamburgers.min.css') }}">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{{ url('/vendor/animsition/css/animsition.min.css') }}">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{{ url('/vendor/select2/select2.min.css') }}">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{{ url('/vendor/daterangepicker/daterangepicker.css') }}">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{{ url('/css/util.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ url('/css/main.css') }}">
    <!--===============================================================================================-->
</head>

<body>

    <div class="limiter">
        <div class="container-login100" style="background-image: asset('<?php echo asset('/images/bg-01.jpg'); ?> ');">
            <div class="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
                <form action="javascript:;" class="login100-form validate-form flex-sb flex-w">
                    <span class="login100-form-title p-b-53">
                        Sign In With
                    </span>

                    <a href="javascript:;" id="facebookLogin" class="btn-face m-b-20">
                        <i class="fa fa-facebook-official"></i>
                        Facebook
                    </a>

                    <a href="javascript:;" id="googleLogin" class="btn-google m-b-20">
                        <img src="{{ asset('/images/icons/icon-google.png') }}" alt="GOOGLE">
                        Google
                    </a>




                </form>
            </div>
        </div>
    </div>


    <div id="dropDownSelect1"></div>

    <!--===============================================================================================-->
    <script src="{{ asset('/vendor/jquery/jquery-3.2.1.min.js') }}"></script>
    <!--===============================================================================================-->
    <script src="{{ asset('/vendor/animsition/js/animsition.min.js') }}"></script>
    <!--===============================================================================================-->
    <script src="{{ asset('/vendor/bootstrap/js/popper.js') }}"></script>
    <script src="{{ asset('/vendor/bootstrap/js/bootstrap.min.js') }}"></script>
    <!--===============================================================================================-->
    <script src="{{ asset('/vendor/select2/select2.min.js') }}"></script>
    <!--===============================================================================================-->
    <script src="{{ asset('/vendor/daterangepicker/moment.min.js') }}"></script>
    <script src="{{ asset('/vendor/daterangepicker/daterangepicker.js') }}"></script>
    <!--===============================================================================================-->
    <script src="{{ url('/vendor/countdowntime/countdowntime.js') }}"></script>
    <!--===============================================================================================-->
    <script src="{{ url('/js/main.js') }}"></script>

    <!-- Firebase files -->
    <script src="https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.2.5/firebase-analytics.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.2.5/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.2.5/firebase-firestore.js"></script>

    <!--firebase config  -->
    <script src="{{ url('/js/firebase-conf.js') }}"></script>

    <!--google sign in-->
    <script src="{{ url('/js/google.js') }}"></script>

    <!--facebook sign in-->
    <script src="{{ url('/js/facebook.js') }}"></script>
</body>

</html>
