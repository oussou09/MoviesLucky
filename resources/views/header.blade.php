<head>
    <style>
        .nav-menu li:hover{
            border-bottom:2px solid #0d6efd;
        }
    </style>
</head>


    <!-- NAV -->
    <div class="nav-wrapper">
        <div class="container">
            <div class="nav">
                <a href="{{ route('app.home') }}" class="logo">
                    <i class='bx bx-movie-play bx-tada main-color'></i>Movies<span class="main-color">L</span>ucky
                </a>
                <ul style="margin: 0" class="nav-menu" id="nav-menu">
                    <li><a href="{{ route('app.home') }}">Home</a></li>
                    <li><a href="{{ route('app.contact') }}">Contact</a></li>
                    <li><a href="{{ route('app.about') }}">About</a></li>
                    <li style="border: none">
                        @if (Auth::guard('user')->check())
                            <a href="{{ route('auth.profile', ['id' => Auth::guard('user')->user()->id]) }}" style="display: flex;padding: 0 1.5rem 0px 1.5rem;border: none;font-weight: 900;font-size: x-large;align-items: center;">
                                <i style="border: solid 3px;border-radius: 50%;padding: 3px;margin-right: 10px;" class='bx bx-user bx-tada main-color'></i>
                                <span style="font-weight: 700;font-size: 20px;">{{ Auth::guard('user')->user()->username }}</span>
                            </a>
                        @else
                            <a href="{{ route('auth.login') }}" style="padding: 0.25rem 1.5rem; border: none;" class="btn btn-hover">
                                <span>Sign in</span>
                            </a>
                        @endif
                    </li>
                </ul>
                <!-- MOBILE MENU TOGGLE -->
                <div class="hamburger-menu" id="hamburger-menu">
                    <div class="hamburger"></div>
                </div>
            </div>
        </div>
    </div>
    <!-- END NAV -->

