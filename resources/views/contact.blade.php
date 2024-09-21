@extends('app')

@section('style')
    <link href="{{ asset('asset\css\contact.css') }}" rel="stylesheet"/>
@endsection

@section('content')

        <!-- Your form or other content here... -->
    </div>
    <!-- Contact form -->
    <section class="gridSection contactSection">
        <div class="contactformContainer">
            <h1 class="sectionHeader">Get in touch</h1>
            @if (session('success'))
                <div class="alert alert-success">
                    {{ session('success') }}
                </div>
            @endif
            <form action="{{ route('app.contactreq') }}" method="POST" class="contactForm">
                @csrf
                <div>
                    <input type="text" name="username" id="username" placeholder="Username" class="contactInput" required />
                    <input type="email" name="email" id="email" placeholder="Email" class="contactInput" required />
                </div>
                <textarea name="message" id="message" cols="30" rows="5" placeholder="Message" class="contactInput"></textarea>
                <button type="submit" class="btn primaryBtn contactBtn">Submit</button>
            </form>
        </div>
        <div class="sectionPic bouncepic contactPic" id="sectionPic">
            <img src="{{ asset('asset\img\contact-img.png') }}" alt="">
        </div>
    </section>

    <h1 class="addressHeader">Find us Quickly</h1>
    <div class="address">
        <div class="eachAddress">
            <h1>Tokyo</h1>
            <p>Phone: (814) 842-3838</p>
            <p>Address: 264 Pine Pitch RdBuffalo Mills, Pennsylvania(PA), 15534</p>
            <p>Email: demo@website.com</p>
        </div>

        <div class="eachAddress">
            <h1>USA</h1>
            <p>Phone: (814) 842-3838</p>
            <p>Address: 264 Pine Pitch RdBuffalo Mills, Pennsylvania(PA), 15534</p>
            <p>Email: demo@website.com</p>
        </div>

        <div class="eachAddress">
            <h1>Canada</h1>
            <p>Phone: (814) 842-3838</p>
            <p>Address: 264 Pine Pitch RdBuffalo Mills, Pennsylvania(PA), 15534</p>
            <p>Email: demo@website.com</p>
        </div>
    </div>

@endsection
