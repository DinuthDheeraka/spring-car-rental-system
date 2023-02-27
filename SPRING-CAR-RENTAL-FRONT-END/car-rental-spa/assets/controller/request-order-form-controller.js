let newOrderId = '';
let assignedDriver = '';

findNewOrderId();
$('#main-request-order-btn').click(function () {

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
        driverId: assignedDriver.driverId,
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

    findNewOrderId();
    assignedDriver = null;
    $('#pickup-date').val("");
    $('#pickup-time').val("");
    $('#return-date').val("");
    $('#return-time').val("");
    $('#inp-pickup-venue').val("");
    $('#inp-return-venue').val("");
}

function loadSelectedCarsToRequestOrder(selectedCars) {
    setSelectedCarDetails(selectedCars);
    setSelectedCarsPaymentDetails(selectedCars);
}

function setSelectedCarsPaymentDetails(selectedCars) {
    var start = new Date( $('#pickup-date').val() ).getTime(),
        end = new Date( $('#return-date').val() ).getTime();

    //1000 * 60 * 60 * 24 = 1 day = 86400000
    let dateDiff = ( ((end - start) / 86400000));

    $('#request-order-payment-details').empty();
    $('#request-order-payment-details').append(
        '<section class="row">\n' +
        '                    <section class="col-12"><h5 id="selected-car-details-topic">Payments Details</h5></section>\n' +
        '                </section>'
    );

    for (let i = 0; i < selectedCars.length; i++) {
        let car = selectedCars[i];
        $('#request-order-payment-details').append(
            '                <section class="row">\n' +
            '                    <section class="col-3">\n' +
            '                        \n' +
            '                            <input class="form-control" maxlength="20" value="' + car.registrationId + '" type="text"/>\n' +
            '                            \n' +
            '                            <div class="form-helper"></div>\n' +
            '                        \n' +
            '                    </section>\n' +
            '\n' +
            '                    <section class="col-4">\n' +
            '                        \n' +
            '                            <input class="form-control"  maxlength="20" value="' + car.brand + '" type="text"/>\n' +
            '                            \n' +
            '                            <div class="form-helper"></div>\n' +
            '                        \n' +
            '                    </section>\n' +
            '\n' +
            '                    <section class="col-5">\n' +
            '                        \n' +
            '                            <input class="form-control"  maxlength="20" value="' + car.dailyRate*dateDiff + '" type="text"/>\n' +
            '                        <div class="form-helper"></div>\n' +
            '                    </section>\n' +
            '                </section>\n'
        );
    }
}

function setSelectedCarDetails(selectedCars) {

    $('#request-car-container').empty();
    $('#request-car-container').append(
        '<section class="row">\n' +
        '                    <section class="col-12"><h5 id="selected-car-details-topic">Selected Car Details</h5></section>\n' +
        '                </section>'
    );

    for (let i = 0; i < selectedCars.length; i++) {
        let car = selectedCars[i];
        $('#request-car-container').append(
            '                <section class="row">\n' +
            '                    <section class="col-3">\n' +
            '                        \n' +
            '                            <input class="form-control" maxlength="20" value="' + car.registrationId + '" type="text"/>\n' +
            '                            \n' +
            '                            <div class="form-helper"></div>\n' +
            '                        \n' +
            '                    </section>\n' +
            '\n' +
            '                    <section class="col-4">\n' +
            '                        \n' +
            '                            <input class="form-control"  maxlength="20" value="' + car.brand + '" type="text"/>\n' +
            '                            \n' +
            '                            <div class="form-helper"></div>\n' +
            '                        \n' +
            '                    </section>\n' +
            '\n' +
            '                    <section class="col-5">\n' +
            '                        \n' +
            '                            <input type="file" class="form-control" id="customFile" />\n' +
            '                        \n' +
            '                    </section>\n' +
            '                </section>\n'
        );
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
            $('#orderId').text("Order Id : " + newOrderId);
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
            $('#pickup-date').val(order.pickupDate.substring(0, 10));
            $('#pickup-time').val(order.pickupTime);
            $('#return-date').val(order.returnDate.substring(0, 10));
            $('#return-time').val(order.returnTime);
            $('#inp-pickup-venue').val(order.pickupVenue);
            $('#inp-return-venue').val(order.returnVenue);
        }
    });
});

$('#check-assign-driver').change(function () {
    if ($('#check-assign-driver').is(":checked")) {
        $.ajax({
            url: baseUrl + "driver/getAllAvailableDrivers",
            dataType: 'json',
            method: 'get',
            async: false,
            success: function (resp) {
                assignedDriver = resp.data[0];
                $('#inp-req-driver-contact-no').val(assignedDriver.telephoneNumber);
                $('#inp-req-driver-email').val(assignedDriver.emailAddress);
                $('#inp-req-driver-name').val(assignedDriver.fullName);
            }
        });
    }
});