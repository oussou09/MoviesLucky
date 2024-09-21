@extends('app')

@section('style')
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
<style type="text/css">
    .panel-title {
        display: inline;
        font-weight: bold;
    }
    .display-table {
        display: table;
    }
    .display-tr {
        display: table-row;
    }
    .display-td {
        display: table-cell;
        vertical-align: middle;
        width: 61%;
    }
    .btn-hover{
        display: flex
    }
</style>
@endsection

@section('content')

<div class="container">
    <br><br><br><br>
    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <div class="panel panel-default credit-card-box">
                <div class="panel-body">
                    <h1>Stripe Payment Gateway</h1>

                    @if (Session::has('success'))
                        <div class="alert alert-success text-center">
                            <a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>
                            <p>{{ Session::get('success') }}</p>
                        </div>
                    @endif

                    @if (Session::has('error'))
                        <div class="alert alert-danger text-center">
                            <a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>
                            <p>{{ Session::get('error') }}</p>
                        </div>
                    @endif

                    <form role="form" action="{{ route('stripe.request') }}" method="post" class="require-validation" data-cc-on-file="false" data-stripe-publishable-key="{{ config('services.stripe.key') }}" id="payment-form">
                        @csrf

                        <div class='form-row row'>
                            <div class='col-xs-12 form-group required'>
                                <label class='control-label'>Amount:</label>
                                <input class='form-control' value="{{ $price }}" type='text' name="amount" readonly>
                                <input type='hidden' name='price' value="{{ $price }}">
                            </div>
                        </div>

                        <div class='form-row row'>
                            <div class='col-xs-12 form-group required'>
                                <label class='control-label'>Name on Card</label>
                                <input class='form-control' size='4' type='text' name="name_on_card">
                            </div>
                        </div>

                        <div class='form-row row'>
                            <div class='col-xs-12 form-group card required'>
                                <label class='control-label'>Card Number</label>
                                <div id="card-number-element" class="form-control"></div>
                            </div>
                        </div>

                        <div class='form-row row'>
                            <div class='col-xs-12 col-md-4 form-group cvc required'>
                                <label class='control-label'>CVC</label>
                                <div id="card-cvc-element" class="form-control"></div>
                            </div>
                            <div class='col-xs-12 col-md-4 form-group expiration required'>
                                <label class='control-label'>Expiration Month</label>
                                <div id="card-expiry-element" class="form-control"></div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xs-12">
                                <button class="btn btn-primary btn-lg btn-block" type="submit">Pay</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script src="https://js.stripe.com/v3/"></script>
<script>
document.addEventListener('DOMContentLoaded', function () {
    var stripe = Stripe('{{ config('services.stripe.key') }}');
    var elements = stripe.elements();

    var style = {
        base: {
            fontSize: '16px',
            color: '#32325d',
        },
    };

    var cardNumber = elements.create('cardNumber', {style: style});
    cardNumber.mount('#card-number-element');

    var cardCvc = elements.create('cardCvc', {style: style});
    cardCvc.mount('#card-cvc-element');

    var cardExpiry = elements.create('cardExpiry', {style: style});
    cardExpiry.mount('#card-expiry-element');

    var form = document.getElementById('payment-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        stripe.createToken(cardNumber).then(function(result) {
            if (result.error) {
                var errorElement = document.getElementById('card-errors');
                errorElement.textContent = result.error.message;
            } else {
                stripeTokenHandler(result.token);
            }
        });
    });

    function stripeTokenHandler(token) {
        var form = document.getElementById('payment-form');
        var hiddenInput = document.createElement('input');
        hiddenInput.setAttribute('type', 'hidden');
        hiddenInput.setAttribute('name', 'stripeToken');
        hiddenInput.setAttribute('value', token.id);
        form.appendChild(hiddenInput);

        form.submit();
    }
});
</script>
@endsection
