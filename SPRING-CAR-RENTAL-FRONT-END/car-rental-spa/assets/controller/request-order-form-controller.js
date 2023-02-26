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
        orderStatus:"new"
    };
    console.log(order)

    $.ajax({
        url:baseUrl+'order/place_order',
        // dataType:'json',
        contentType:'application/json',
        data:JSON.stringify(order),
        async:false,
        method:'post',
        success:function (resp) {
        }
    });
}

function loadSelectedCarsToRequestOrder(selectedCars) {
    for(let i = 0; i<selectedCars.length; i++){
        let car = selectedCars[i];
        $('#request-car-container').append(
            '<section class="row">\n' +
            '                    <section class="col-6">\n' +
            '                        <div class="outline">\n' +
            '                            <h5 class="selected-car-h5" style="margin-top: 10px" id=inp-'+car.carId+'>'+car.brand+'</h5>\n' +
            '                            \n' +
            '                        </div>\n' +
            '                    </section>\n' +
            '                    <section class="col-6">\n' +
            '                        <input type="file" class="form-control" id="customFile" />\n' +
            '                    </section>\n' +
            '                </section>'
        );
        // $('#inp-'+car.carId).val(car.brand);
    }
}

function findLastOrderId() {
    $.ajax({
        url:baseUrl+'order/findLastOrderId',
        // dataType:'json',
        // contentType:'application/json',
        // data:JSON.stringify(order),
        async:false,
        method:'get',
        success:function (resp) {
        }
    });
}