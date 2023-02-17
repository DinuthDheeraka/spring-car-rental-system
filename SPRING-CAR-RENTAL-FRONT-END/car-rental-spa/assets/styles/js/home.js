$('#register-cus').click(function () {
    $('#customer-register-section').css('visibility','visible');
    $('#login-section').css('visibility','hidden');
});

$('#login-btn-1').click(function () {
    $('#customer-register-section').css('visibility','hidden');
    $('#login-section').css('visibility','visible');
});