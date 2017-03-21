/**
 * Created by Babafemi.Adigun on 3/21/2017.
 */
var app = angular.module('app', []);

app.controller('appCon', function ($scope, $http) {
    function makeid()
    {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < 7; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    };

    $scope.doPay = function(){
        //alert(amt);
        var amount = $('#form-amount').val();
        var customerid = $('#form-customerid').val();
        var transRef = makeid();
        alert(amount + " " + customerid + " " + transRef);
        //var amount = amt * 100;
        //var customerid = $rootScope.globals.currentUser.email;
        // var transRef = 'EC-'+ref;
        var redirect = "http://myeverlasting.net/";
        var hashString = transRef+"1076101"+amount+redirect+"D3D1D05AFE42AD50818167EAC73C109168A0F108F32645C8B59E897FA930DA44F9230910DAC9E20641823799A107A02068F7BC0F4CC41D2952E249552255710F";
        var hash = CryptoJS.SHA512(hashString);
        console.log(hashString);

        var iswPay = new IswPay({
            postUrl:"https://sandbox.interswitchng.com/collections/w/pay",
            amount: amount,
            productId: "1076",
            transRef: transRef,
            siteName: "ESSL Global",
            itemId: "101",
            customerId: customerid,
            siteRedirectUrl: redirect,
            currency: "NGN",
            hash: hash,
            onComplete : function (paymentResponse){
                console.log(paymentResponse);
                // save to api to update tranaction status
            }

        });


    };


})







/*function doPay() {

    var amount = $('#form-amount').val();
    var customerid = $('#form-customerid').val();
    var transRef = makeid();
    alert(amount + " " + customerid + " " + transRef);
    var redirect = "http://localhost/newwebpay/sample_request.html";
    var hashString = transRef+"1076101"+amount+redirect+"fKtgxzVuELxY5Q1qDzvn6BLvOCaonQMR9sIXmPcvbiXm3sjPEdhxSENaqP3FnVR5I264QeihQuIvpSFZJmJnwyc85jhybLCsO5vAcsuFwMHusFpewQ4vvUro4HgBYPvg";
    var hash = CryptoJS.SHA512(hashString);
    console.log(hashString);




    var iswPay = new IswPay({

        postUrl:"https://sandbox.interswitchng.com/collections/w/pay",
        //postUrl:"https://webpay.interswitchng.com/collections/w/pay",
        amount: amount,
        productId: "1076",
        transRef: transRef,
        siteName: "MK Test",
        itemId: "101",
        customerId: customerid,
        siteRedirectUrl: redirect,
        currency: "NGN",
        hash: hash,
        onComplete : function (paymentResponse){
            console.log(paymentResponse);
        }

    });
}*/






