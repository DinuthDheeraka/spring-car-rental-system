let newOrderId = '';
$('#main-request-order-btn').click(function () {
    $('#pickup-date').val("2022-01-01");
    findNewOrderId();
    requestOrder();
    // uploadCustomerNicAndDrivingLicense();
});

function uploadCustomerNicAndDrivingLicense() {
    let nicImage = $("#inpNicImage").prop('files')[0];
    let drivingLicenseImage = $("#inpDrivingLicenseImage").prop('files')[0];

    let formData = new FormData();
    formData.append("nic", nicImage);
    formData.append("drivingLicense", drivingLicenseImage);


    $.ajax({
        url: baseUrl + '/customer/upload/1',
        data: formData,
        type: 'POST',
        contentType: false,
        processData: false,
        async: false,
        success: function (data) {
            // console.log('Image uploaded successfully.');
        },
        error: function (error) {
            // console.error(error);
        }
    });
}

function requestOrder() {

    let date = new Date();
    let formattedDate = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' ' + ((date) + "").substring(16, 24);

    let order = {
        orderId: newOrderId,
        customerId: 0,
        driverId: 0,
        pickupDate: $('#pickup-date').val(),
        pickupTime: $('#pickup-time').val(),
        returnDate: $('#return-date').val(),
        returnTime: $('#return-time').val(),
        pickupVenue: $('#inp-pickup-venue').val(),
        returnVenue: $('#inp-return-venue').val(),
        orderRequestedDate: formattedDate,
        orderStatus: "new"
    };
    console.log(order)

    $.ajax({
        url: baseUrl + 'order/place_order',
        // dataType:'json',
        contentType: 'application/json',
        data: JSON.stringify(order),
        async: false,
        method: 'post',
        success: function (resp) {
        }
    });
}

function loadSelectedCarsToRequestOrder(selectedCars) {
    $('#request-car-container').empty();
    $('#request-car-container').append(
        '<section class="row">\n' +
        '                    <section class="col-12"><h5 id="selected-car-details-topic">Selected Car Details</h5></section>\n' +
        '                </section>'
    );
    for (let i = 0; i < selectedCars.length; i++) {
        let car = selectedCars[i];
        $('#request-car-container').append(
            '<section class="row">\n' +
            '                    <section class="col-6">\n' +
            '                        <div class="outline">\n' +
            '                            <h5 class="selected-car-h5" style="margin-top: 10px" id=inp-' + car.carId + '>' + car.brand + '</h5>\n' +
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

function findNewOrderId() {
    $.ajax({
        url: baseUrl + 'order/findNewOrderId',
        dataType: 'json',
        async: false,
        method: 'get',
        success: function (resp) {
            newOrderId = resp.data[0];
        }
    });
}


$('#main-request-search-order-btn').click(function () {
    $.ajax({
        url: baseUrl + 'order/findOrderById/OR-0001',
        async: false,
        method: 'get',
        success: function (resp) {
            let order = (resp.data[0]);
            console.log(order);
            $('#pickup-date').val(order.pickupDate.substring(0,10));
            $('#pickup-time').val(order.pickupTime);
            $('#return-date').val(order.returnDate.substring(0,10));
            $('#return-time').val(order.returnTime);
            $('#inp-pickup-venue').val(order.pickupVenue);
            $('#inp-return-venue').val(order.returnVenue);
        }
    });
});