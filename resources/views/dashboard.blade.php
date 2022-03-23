<!DOCTYPE html>
<html>

<head>
    <title>Dashboard</title>
</head>

<body>

    <img src="">
    {{ Auth::user()->name }}
    <br>
    Hello, {{ Auth::user()->email }}
    <br>
    <a href="{{ url('logout') }}">Logout</a>

</body>

</html>
