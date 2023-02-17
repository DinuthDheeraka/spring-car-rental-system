$('#all-cus').click(function () {
    $('#all-customer-section').css('visibility','visible');
    $('#car-registration-form').css('visibility','hidden');
    $('#all-driver-section').css('visibility','hidden');
    $('#customer-registration-form').css('visibility','hidden');
});

$('#all-dri').click(function () {
    $('#all-customer-section').css('visibility','hidden');
    $('#car-registration-form').css('visibility','hidden');
    $('#all-driver-section').css('visibility','visible');
    $('#customer-registration-form').css('visibility','hidden');
});

$('#car-reg').click(function () {
    $('#all-customer-section').css('visibility','hidden');
    $('#car-registration-form').css('visibility','visible');
    $('#all-driver-section').css('visibility','hidden');
    $('#customer-registration-form').css('visibility','hidden');
});


$('#cus-reg').click(function () {
    $('#all-customer-section').css('visibility','hidden');
    $('#car-registration-form').css('visibility','hidden');
    $('#all-driver-section').css('visibility','hidden');
    $('#customer-registration-form').css('visibility','visible');
});
