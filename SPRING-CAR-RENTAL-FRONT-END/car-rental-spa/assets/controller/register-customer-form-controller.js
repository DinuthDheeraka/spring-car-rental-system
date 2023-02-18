let baseUrl = "http://localhost:8080/SPRING_CAR_RENTAL_SYSTEM_BACKEND_war_exploded/";

$('#create-account-btn').click(function () {
    registerCustomer();
});

function registerCustomer() {
    $.ajax({
        url:baseUrl+'customer',
        dataType:'json',
        async:false,
        method:'get',
        success:function (resp) {
        }
    });
}