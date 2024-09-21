<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class AppSiteController extends Controller
{


    public function home(Request $request)
    {
    // Fetch the data from the external API
    $response = Http::get('https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies-2020s.json');
    $data = collect($response->json());

    // Return all the data as a JSON response
    return response()->json([
        'movies' => $data,
        'message' => 'Movies fetched successfully',
        'status' => 200,
    ]);
    }

    public function MovieDetails(Request $request, $title)
    {

    Log::info('Received title: ' . $title);
    // Fetch the data from the external API
    $response = Http::get('https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies-2020s.json');
    $data = collect($response->json());

    $MovieShow = $data->firstWhere('title', urldecode($title));

    if (!$MovieShow) {
        return response()->json([
            'message' => 'Movies not Found',
            'status' => 404,
        ]);
    }

    return response()->json([
        'MovieShow' => $MovieShow,
        'message' => 'Movies Found successfully',
        'status' => 200,
    ]);
    }

    public function contactreq(Request $request)
    {
        $Cdata = $request->validate([
            'username' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'message' => 'required|string|max:255'
        ]);

        Contact::create($Cdata);

        return redirect()->back()->with('success', 'Thank you, ' . $request->email . '. We will send a response within 24 hours.');
    }



}
