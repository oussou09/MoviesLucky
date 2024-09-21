

    <!-- PRICING SECTION -->
    <div class="section">
        <div class="container">
            <div class="pricing">
                <div class="pricing-header">
                    <span class="main-color">M</span>ovies<span class="main-color">L</span>ucky pricing
                </div>
                <div class="pricing-list">
                    <div class="row">
                        <div class="col-4">
                            <div class="pricing-box">
                                <div class="pricing-box-header">
                                    <div class="pricing-name">
                                        Basic
                                    </div>
                                    <div class="pricing-price">
                                        Free
                                    </div>
                                </div>
                                <div class="pricing-box-content">
                                    <p>Originals</p>
                                    <p>Swich plans anytime</p>
                                    <p><del>65+ top Live</del></p>
                                    <p><del>TV Channels</del></p>
                                    <p><del>4K Video Quality</del></p>
                                </div>
                                <div class="pricing-box-action">
                                    <a href="{{ route('auth.register') }}" style="--bs-btn-border-color: none; --bs-btn-border-radius: none; --bs-btn-hover-border-color: none;border: none;" class="btn btn-hover">
                                        <span>Register now</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="pricing-box hightlight">
                                <div class="pricing-box-header">
                                    <div class="pricing-name">
                                        Premium
                                    </div>
                                    <div class="pricing-price">
                                        $14.99 <span>/month</span>
                                    </div>
                                </div>
                                <div class="pricing-box-content">
                                    <p>Originals</p>
                                    <p>Swich plans anytime</p>
                                    <p>Full HD Video Quality</p>
                                    <p>65+ top Live</p>
                                    <p><del>TV Channels</del></p>
                                </div>
                                <div class="pricing-box-action">
                                    <a href="{{ route('stripe.payment',['price' => 14.99]) }}" style="--bs-btn-border-color: none; --bs-btn-border-radius: none; --bs-btn-hover-border-color: none;border: none;" class="btn btn-hover">
                                        <span>Register now</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="pricing-box">
                                <div class="pricing-box-header">
                                    <div class="pricing-name">
                                        VIP
                                    </div>
                                    <div class="pricing-price">
                                        $34.99 <span>/month</span>
                                    </div>
                                </div>
                                <div class="pricing-box-content">
                                    <p>Originals</p>
                                    <p>Swich plans anytime</p>
                                    <p>65+ top Live</p>
                                    <p>TV Channels</p>
                                    <p>4K Video Quality</p>
                                </div>
                                <div class="pricing-box-action">
                                    <a href="{{ route('stripe.payment',['price' => 34.99]) }}" style="--bs-btn-border-color: none; --bs-btn-border-radius: none; --bs-btn-hover-border-color: none;border: none;" class="btn btn-hover">
                                        <span>Register now</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- END PRICING SECTION -->
