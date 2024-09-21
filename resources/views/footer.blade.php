
    <!-- FOOTER SECTION -->
    <footer class="section">
        <div class="container">
            <div class="row">
                <div style="padding-left: 90px" class="col-4">
                    <div class="content">
                        <a href="#" class="logo">
                            <i class='bx bx-movie-play bx-tada main-color'></i>Movies<span class="main-color">L</span>ucky
                        </a>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut veniam ex quos hic id nobis beatae earum sapiente! Quod ipsa exercitationem officiis non error illum minima iusto et. Dolores, quibusdam?
                        </p>
                        <div class="social-list">
                            <a href="https://www.facobook.com" class="social-item" target="_blank">
                                <i class="bx bxl-facebook"></i>
                            </a>
                            <a href="https://www.twitter.com" class="social-item" target="_blank">
                                <i class="bx bxl-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com" class="social-item" target="_blank">
                                <i class="bx bxl-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-8">
                    <div class="row">
                        <div class="col-3">
                            <div class="content">
                                <p style="margin-bottom: 0.5rem; "><b>MoviesLucky</b></p>
                                <ul style=" padding-left: 0.7rem;" class="footer-menu">
                                    <li>
                                        @if (!Auth::guard('user')->check())
                                            <a href="{{ route('auth.login') }}">Login</a>
                                        @else
                                            <a href="{{ route('auth.profile', ['id' => Auth::guard('user')->user()->id]) }}">My profile</a>
                                        @endif
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="content">
                                <p style="margin-bottom: 0.5rem; "><b>Browse</b></p>
                                <ul style=" padding-left: 0.7rem;" class="footer-menu">
                                    <li><a href="#">Pricing plans</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="content">
                                <p style="margin-bottom: 0.5rem; "><b>Help</b></p>
                                <ul style=" padding-left: 0.7rem;" class="footer-menu">
                                    <li><a href="{{ route('app.about') }}">About us</a></li>
                                    <li><a href="{{ route('app.contact') }}">Contacts</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="content" class="app-icons">
                                <p style="text-align: center"><b>Download app</b><br><b>( Coming Soon... )</b></p>
                                <ul  style="display: flex;justify-content: space-around;align-items: flex-end;list-style-type: none;padding-left: 0;">
                                    <li>
                                        <a style="display: inline-block; transition: transform 0.2s ease-in-out;" href="https://play.google.com/store" target="_blank">
                                            <i style="font-size: 32px;" class="fab fa-google-play"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a style="display: inline-block; transition: transform 0.2s ease-in-out;" href="https://www.apple.com/app-store/" target="_blank">
                                            <i style="font-size: 40px;" class="fab fa-apple"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- END FOOTER SECTION -->
