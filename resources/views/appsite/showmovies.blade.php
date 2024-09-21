@extends('app')

@section('style')
    <style>
        #parap {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            margin: 15px 0px 15px 15px;
        }
        #iconi {
            font-size: x-large;
            color: #1f83ed;
            padding-right: 10px;
        }
    </style>
@endsection

@section('content')


    {{-- @dd($datas) --}}

    <div class="container" style="border: 3px solid  #b5b5b5;padding: 35px 80px 35px 35px;display: flex;margin: 80px 100px 120px 80px;width: auto;">
        <div class="row" style="display: flex;justify-content: flex-start;">
            <div class="col-8" style="border-radius: 5px;border: 3px solid #8787876b;padding: 0px;">
            @if (isset( $movie['thumbnail'] ))
                <img src="{{ $movie['thumbnail'] }}" alt="{{ $movie['href'] }}" style="width: 30vw; height: {{ $movie['thumbnail_height'] }}px;border-radius: 5px;">
            @else
                <img src="{{ asset('asset/img/no-image-available.png') }}" alt="{{ $movie['href'] ?? $movie['title'] }}">
            @endif
            </div>
        </div>
        <div class="row" style="display: flex;justify-content: flex-start;">
            <div class="col-8">
            <h1>{{ $movie['title'] }} ({{ $movie['year'] }})</h1>
            <p style="margin-left: 1.4rem;">{{ $movie['extract'] }}</p>
            <p id="parap">
                <i id="iconi" class='bx bxs-camera-movie'></i>
                <strong> Cast: </strong>
                {{ implode(', ', $movie['cast']) }}
            </p>
            <p id="parap">
                <i id="iconi" class='bx bxs-movie' ></i>
                <strong>Genres: </strong>
                {{ implode(', ', $movie['genres']) }}
            </p>
            </div>
        </div>
</div>


@endsection
