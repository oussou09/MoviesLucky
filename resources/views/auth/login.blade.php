@extends('app')

@section('style')
    <link href="{{ asset('asset\css\auth.css') }}" rel="stylesheet"/>
    <style>
        .box {
            margin: 130px auto 40px auto;
        }
    </style>
@endsection

@section('content')
<section class="box">
    <h2>Login</h2>
    <form action="{{ route('auth.login.req') }}" method="POST" >
        @csrf
        <div class="inputBox">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="type your Email" required/>
            @error('email')
                <span>{{ $message }}</span>
            @enderror
        </div>
        <div class="inputBox">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" placeholder="type your password" required/>
            @error('password')
                <span>{{ $message }}</span>
            @enderror
        </div>
        <div>
            <button type="submit" name="" style="float: left;">Submit</button>
            <a class="button" href="{{ route('auth.register') }}" style="float: left;">Register</a>
        </div>
    </form>
</section>
@endsection

