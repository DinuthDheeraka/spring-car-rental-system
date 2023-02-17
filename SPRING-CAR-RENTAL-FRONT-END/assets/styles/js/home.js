$('#all-cus').click(function () {
    $('#all-customer-section').css('visibility','visible');
    $('#car-registration-form').css('visibility','hidden');
    $('#all-driver-section').css('visibility','hidden');
    $('#customer-registration-form').css('visibility','hidden');
    $('#place-order-section').css('visibility','hidden');
});

$('#all-dri').click(function () {
    $('#place-order-section').css('visibility','hidden');
    $('#all-customer-section').css('visibility','hidden');
    $('#car-registration-form').css('visibility','hidden');
    $('#all-driver-section').css('visibility','visible');
    $('#customer-registration-form').css('visibility','hidden');
});

$('#place').click(function () {
    $('#all-customer-section').css('visibility','hidden');
    $('#car-registration-form').css('visibility','hidden');
    $('#all-driver-section').css('visibility','hidden');
    $('#customer-registration-form').css('visibility','hidden');
    $('#place-order-section').css('visibility','visible');
});

$('#car-reg').click(function () {
    $('#place-order-section').css('visibility','hidden');

    $('#all-customer-section').css('visibility','hidden');
    $('#car-registration-form').css('visibility','visible');
    $('#all-driver-section').css('visibility','hidden');
    $('#customer-registration-form').css('visibility','hidden');
});


$('#cus-reg').click(function () {
    $('#place-order-section').css('visibility','hidden');

    $('#all-customer-section').css('visibility','hidden');
    $('#car-registration-form').css('visibility','hidden');
    $('#all-driver-section').css('visibility','hidden');
    $('#customer-registration-form').css('visibility','visible');
});
