<head>
    <style>
        .carousel-indicators img {
            width: 70px;
            display: block;
        }

        .carousel-indicators button {
            width: max-content!important;
        }

        .carousel-indicators {
            position: unset;
        }

        .carousel-caption {
            background-color: rgb(0 0 0 / 80%); /* Optional: add a background to captions for better readability */
        }

        .carousel-inner {
            display: flex;
            position: relative;
            width: 100%;
            overflow: hidden;
            justify-content: space-around;
        }

        .w-100 {
            height: 80vh;
            width: 50% !important;
        }

        .carousel-caption {
            position: absolute;
            right: 50%;
            bottom: 1.25rem;
            left: 0%;
            /* padding-top: 0.25rem;
            padding-bottom: 0.25rem; */
            color: #fff;
            text-align: center;
            padding: 21px 70px;
        }

        .carousel {
            position: relative;
            margin: 59px 0px 100px 0px;
        }
    </style>
</head>

<div class="carousel slide" id="carouselDemo" data-bs-wrap="true" data-bs-ride="carousel">

    <div class="carousel-inner">
        @foreach ($datas as $index => $data)
            <div class="carousel-item {{ $index === 0 ? 'active' : '' }}">
                @if (isset( $data['thumbnail'] ))
                    <img src="{{ $data['thumbnail'] }}" class="w-100" alt="{{ $data['title'] }}">
                @else
                    <img src="{{ asset('asset/img/no-image-available.png') }}" class="w-100" alt="{{ $data['title'] }}">
                @endif
                <div class="carousel-caption">
                    <h5>{{ $data['title'] }}</h5>
                    <p>
                        @if(!empty($data['extract']))
                                <p>{{ $data['extract'] }}</p>
                        @endif
                    </p>
                </div>
            </div>
        @endforeach
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#carouselDemo" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
    </button>

    <button class="carousel-control-next" type="button" data-bs-target="#carouselDemo" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
    </button>

    <div class="carousel-indicators">
        @foreach ($datas as $index => $data)
            <button type="button" class="{{ $index === 0 ? 'active' : '' }}" data-bs-target="#carouselDemo" data-bs-slide-to="{{ $index }}">
                @if (isset( $data['thumbnail'] ))
                    <img src="{{ $data['thumbnail'] }}" alt="{{ $data['title'] }}">
                @else
                    <img src="{{ asset('asset/img/image-not-found-icon.png') }}" alt="{{ $data['title'] }}">
                @endif
            </button>
        @endforeach
    </div>

</div>
