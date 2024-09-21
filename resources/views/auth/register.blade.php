@extends('app')

@section('style')
    <link href="{{ asset('asset\css\auth.css') }}" rel="stylesheet"/>
    {{-- <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet"> --}}
    <style>
        .box {
            margin: 179px auto -23px auto;
        }
    </style>
@endsection

@section('content')
<main class="box">
    <h2>Register</h2>
    @if (Session::has('alert'))
        <div class="alert alert-success text-center">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>
            <p>{{ Session::get('alert') }}</p>
        </div>
    @endif
    <form action="{{ route('auth.register.req') }}" method="POST" >
        @csrf
        <div class="inputBox">
            <label for="username">Username</label>
            <input type="text" name="username" id="username" placeholder="type your username" required/>
        </div>
        <div class="inputBox">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="type your Email" required/>
        </div>
        <div class="inputBox">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" placeholder="type your password"
                   required/>
        </div>
        <div class="inputBox">
            <label for="userConfirmPassword">Confirm Password</label>
            <input type="password" name="userConfirmPassword" id="userConfirmPassword" placeholder="confirm your password"
                   required/>
        </div>
        <button type="submit" style="float: left;">Submit</button>
        <a class="button" href="{{ route('auth.login') }}" style="float: left;">Login</a>
    </form>
</main>
@endsection
