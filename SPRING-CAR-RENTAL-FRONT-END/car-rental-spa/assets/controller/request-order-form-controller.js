$('#main-request-order-btn').click(function () {
    requestOrder();
    // uploadCustomerNicAndDrivingLicense();
});
function uploadCustomerNicAndDrivingLicense(){
    let nicImage = $("#inpNicImage").prop('files')[0];
    let drivingLicenseImage = $("#inpDrivingLicenseImage").prop('files')[0];

    let formData = new FormData();
    formData.append("nic", nicImage);
    formData.append("drivingLicense", drivingLicenseImage);


    $.ajax({
        url: baseUrl+'/customer/upload/1',
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

function requestOrder() {

    let order = {
        pickupDate:$('#pickup-date').val(),
        pickupTime:$('#pickup-time').val(),
        returnDate:$('#return-date').val(),
        returnTime:$('#return-time').val(),
        pickupVenue:$('#inp-pickup-venue').val(),
        returnVenue:$('#inp-return-venue').val(),
        assignDriver:$('#check-assign-driver').is(':checked')
    };
    console.log(order)

    // $.ajax({
    //     url:baseUrl+'customer/register',
    //     dataType:'json',
    //     contentType:'application/json',
    //     data:JSON.stringify(order),
    //     async:false,
    //     method:'post',
    //     success:function (resp) {
    //     }
    // });
}