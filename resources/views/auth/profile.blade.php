@extends('app')

@section('style')
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
<style>
    body{
    margin-top:20px;
    color: #1a202c;
    text-align: left;
    background-color: #e2e8f0;
}
.main-body {
    padding: 15px;
}
.card {
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0,0,0,.125);
    border-radius: .25rem;
}

.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1rem;
}

.gutters-sm {
    margin-right: -8px;
    margin-left: -8px;
}

.gutters-sm>.col, .gutters-sm>[class*=col-] {
    padding-right: 8px;
    padding-left: 8px;
}
.mb-3, .my-3 {
    margin-bottom: 1rem!important;
}

.bg-gray-300 {
    background-color: #e2e8f0;
}
.h-100 {
    height: 100%!important;
}
.shadow-none {
    box-shadow: none!important;
}
</style>

@endsection

@section('content')

<div class="container">
    <div class="main-body">

          <div class="gutters-sm" style="display: flex;flex-wrap: wrap;margin: 0 -15px;align-items: flex-start;justify-content: space-between;">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150">
                    <div class="mt-3">
                      <h4>{{ $user->username }}</h4>
                      <p class="text-secondary mb-1">Full Stack Developer</p>
                      <button class="btn btn-primary" class="btn btn-primary btn-delete" onclick="confirm('Are you sure you want to delete?')">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
              <br>
              <div class="card mb-3" style=" padding: 1rem;">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{ $user->username }}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        {{ $user->email }}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Subscription</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        @if ($user->subscription)
                            @php
                                $remainingDays = floor( $user->subscription->remaining_days );
                            @endphp
                            @if ($user->subscription->type_subscription === 1)
                                Premium <span>{{ $remainingDays }} Day(s) left</span>
                            @elseif ($user->subscription->type_subscription === 2)
                                VIP <span>{{ $remainingDays }} Day(s) left</span>
                            @endif
                        @else
                            <div class="col-sm-9 text-secondary" style="padding: 0px;margin:0px;display: flex;align-items: center;">
                                <h6  style="margin: 0px 15px 0px 0px">Basic</h6>
                                <a href="{{ route('app.pricing') }}" style="padding: 0px;margin:0px; text-decoration:underline;font-size: 20px; font-weight: 700;">Take subscriber...</a>
                            </div>
                        @endif
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Password</h6>
                    </div>
                    <div class="col-sm-9 text-secondary" style="padding: 0px;margin:0px">
                        <a href="#" style="padding: 0px;margin:0px; text-decoration:underline;font-size: 20px; font-weight: 700;">Change...</a>
                    </div>
                  </div>
                  <hr>
                  <div style="display: flex;flex-wrap: wrap;margin: 0 -15px;flex-direction: row;justify-content: space-between;align-items: center;align-content: stretch;">
                    <div class="col-sm-3">
                      <a class="btn btn-info" target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                    </div>
                    <div class="col-sm-3">
                        <a style="padding: 4px 10px" class="btn btn-info" target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"><i style="margin-right: 5px" class="bi bi-box-arrow-right icon-logout"></i>log-out</a>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8">

              <div class="gutters-sm">
                <div class="col-sm-11 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">assignment</i>Project Status</h6>
                      <small>Web Design</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Website Markup</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 72%" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>One Page</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 89%" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Mobile Template</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Backend API</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 66%" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>

        </div>
    </div>

@endsection

@section('scripts')
    <script src="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.js"></script>
@endsection
