let baseUrl = "http://localhost:8080/SPRING_CAR_RENTAL_SYSTEM_BACKEND_war_exploded/";

$('#create-account-btn').click(function () {
    registerCustomer();
});

function registerCustomer() {

    let customer = {
        nicNumber:$('#inpNicNo').val(),
        drivingLicenseNumber:$('#inpDrivingLicenseNo').val(),
        fullName:$('#inpFullName').val(),
        homeAddress:$('#inpHomeAddress').val(),
        telephoneNumber:$('#inpTeleNo').val(),
        emailAddress:$('#inpEmail').val()
    };

    $.ajax({
        url:baseUrl+'customer/register',
        dataType:'json',
        contentType:'application/json',
        data:JSON.stringify(customer),
        async:false,
        method:'post',
        success:function (resp) {
        }
    });
}