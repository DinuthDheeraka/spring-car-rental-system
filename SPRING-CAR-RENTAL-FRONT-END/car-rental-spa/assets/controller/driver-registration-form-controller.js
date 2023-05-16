let selectedDriverStatus = 'Active';

let newDriverId = 0;

$('#select-driver-status').change(function (e) {
    selectedDriverStatus = e.target.value;
});

$('#driver-create-account-btn').click(function () {
    getDriverLastId();
    registerDriver();
    uploadDriverNicAndDrivingLicense();
});

function getDriverLastId() {
    $.ajax({
        url: baseUrl + 'driver/lastDriverId',
        async: false,
        method: 'get',
        success: function (resp) {
            newDriverId = (resp.data[0])+1;
        }
    });
}

function uploadDriverNicAndDrivingLicense(){
    let nicImage = $("#inpNicImageDriver").prop('files')[0];
    let drivingLicenseImage = $("#inpDrivingLicenseImageDriver").prop('files')[0];

    let formData = new FormData();
    formData.append("nic", nicImage);
    formData.append("drivingLicense", drivingLicenseImage);


    $.ajax({
        url: baseUrl+'/driver/upload/'+newDriverId,
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
        driverId: newDriverId,
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
            alert('Added Driver Successfully');
        }
    });
}