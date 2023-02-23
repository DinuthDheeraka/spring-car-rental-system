let baseUrl = "http://localhost:8080/SPRING_CAR_RENTAL_SYSTEM_BACKEND_war_exploded/";

let newCustomerId=0;

$('#create-account-btn').click(function () {
    getCustomerLastId();
    registerCustomer();
    uploadCustomerNicAndDrivingLicense();
});

function getCustomerLastId() {
    $.ajax({
        url:baseUrl+'customer/lastCustomerId',
        async:false,
        method:'get',
        success:function (resp) {
            newCustomerId = (resp.data[0]);
        }
    });
}
function uploadCustomerNicAndDrivingLicense(){
    let nicImage = $("#inpNicImage").prop('files')[0];
    let drivingLicenseImage = $("#inpDrivingLicenseImage").prop('files')[0];

    let formData = new FormData();
    formData.append("nic", nicImage);
    formData.append("drivingLicense", drivingLicenseImage);


    $.ajax({
        url: baseUrl+'/customer/upload/'+newCustomerId,
        data: formData,
        type: 'POST',
        contentType: false,
        processData: false,
        async:false,
        success: function (data) {
            // console.log('Image uploaded successfully.');
        },
        error: function (error) {
            // console.error(error);
        }
    });
}

function registerCustomer() {

    let customer = {
        customerId:newCustomerId,
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