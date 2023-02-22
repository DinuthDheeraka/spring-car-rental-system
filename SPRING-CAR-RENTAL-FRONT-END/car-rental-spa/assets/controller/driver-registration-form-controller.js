let selectedDriverStatus = 'Active';
$('#select-driver-status').change(function (e) {
    selectedDriverStatus = e.target.value;
});

$('#driver-create-account-btn').click(function () {
    registerDriver();
    // uploadDriverNicAndDrivingLicense();
});
function uploadDriverNicAndDrivingLicense(){
    let nicImage = $("#inpNicImageDriver").prop('files')[0];
    let drivingLicenseImage = $("#inpDrivingLicenseImageDriver").prop('files')[0];

    let formData = new FormData();
    formData.append("nic", nicImage);
    formData.append("drivingLicense", drivingLicenseImage);


    $.ajax({
        url: baseUrl+'/driver/upload/1',
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

function registerDriver() {

    let driver = {
        nicNumber:$('#inpNicNoDriver').val(),
        drivingLicenseNumber:$('#inpDrivingLicenseNoDriver').val(),
        fullName:$('#inpFullNameDriver').val(),
        homeAddress:$('#inpHomeAddressDriver').val(),
        telephoneNumber:$('#inpTeleNoDriver').val(),
        emailAddress:$('#inpEmailDriver').val(),
        driverStatus:selectedDriverStatus
    };

    $.ajax({
        url:baseUrl+'driver/register',
        dataType:'json',
        contentType:'application/json',
        data:JSON.stringify(driver),
        async:false,
        method:'post',
        success:function (resp) {
        }
    });
}