@extends('app')

@section('content')

@include('appsite/slide')


    {{-- @dd($datas) --}}

    <div class="container">
        <div class="row">
            @foreach ($datas as $data)
                <div class="col-3">
                    <a href="{{ route('app.showmovies',['title' => $data['title']]) }}" class="movie-item">
                        @if (isset( $data['thumbnail'] ))
                            <img src="{{ $data['thumbnail'] }}" alt="{{ $data['href'] }}">
                        @else
                            <img src="{{ asset('asset/img/no-image-available.png') }}" alt="{{ $data['href'] ?? $data['title'] }}">
                        @endif
                        <div class="movie-item-content">
                            <div class="movie-item-title">{{ $data['title'] }}</div>
                            <div class="movie-infos">
                                <div class="movie-info">
                                    <i class="bx bxs-star"></i>
                                    <span>{{ $data['year'] }}</span>
                                </div>
                                <div class="movie-info">
                                    <span>HD</span>
                                </div>
                                <div class="movie-info">
                                    <span>16+</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            @endforeach
        </div>


        <div class="paginate">
            @if ($datas->hasPages())
                <div class="pagination" style="display: flex; justify-content: center; align-items: center; margin-top: 20px;">
                {{-- Previous Button --}}
                @if ($datas->onFirstPage())
                    <span class="page-link disabled" style="display: inline-block; padding: 10px 15px; margin: 0 5px; border-radius: 4px; text-decoration: none; color: #333; background-color: #ffffff; border: 1px solid #ddd; transition: background-color 0.3s; pointer-events: none; opacity: 0.6;"><i class="fas fa-chevron-left"></i> Previous</span>
                @else
                    <a href="{{ $datas->previousPageUrl() }}" class="page-link" style="display: inline-block; padding: 10px 15px; margin: 0 5px; border-radius: 4px; text-decoration: none; color: #333; background-color: #ffffff; border: 1px solid #ddd; transition: background-color 0.3s;"><i class="fas fa-chevron-left"></i> Previous</a>
                @endif

                <span class="page-info" style="margin: 0 10px;">Page {{ $datas->currentPage() }} of {{ $datas->lastPage() }}</span>

                {{-- Next Button --}}
                @if ($datas->hasMorePages())
                    <a href="{{ $datas->nextPageUrl() }}" class="page-link" style="display: inline-block; padding: 10px 15px; margin: 0 5px; border-radius: 4px; text-decoration: none; color: #333; background-color: #ffffff; border: 1px solid #ddd; transition: background-color 0.3s;">Next <i class="fas fa-chevron-right"></i></a>
                @else
                    <span class="page-link disabled" style="display: inline-block; padding: 10px 15px; margin: 0 5px; border-radius: 4px; text-decoration: none; color: #333; background-color: #ffffff; border: 1px solid #ddd; transition: background-color 0.3s; pointer-events: none; opacity: 0.6;">Next <i class="fas fa-chevron-right"></i></span>
                @endif
                </div>
            @endif
            </div>

    </div>


    @include('pricing')

@endsection
