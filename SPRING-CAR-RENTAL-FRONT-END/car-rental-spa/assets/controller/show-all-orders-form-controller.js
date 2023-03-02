let allOrders = [];
let allCustomers = [];

loadOrderTblData();

function loadOrderTblData() {
    findAllOrders();
    findAllCustomers();
    setOrderTblData();
}

function setOrderTblData() {
    for (let i = 0; i < allOrders.length; i++) {
        let order = allOrders[i];
        let customer = findCustomer(allOrders[i].customerId);
        // console.log(customer);

        $('#admin-requests-tbl-body').append(
            '<tr>\n' +
            '                            <td>\n' +
            '                                <p class="fw-bold mb-1">' + order.orderId + '</p>\n' +
            '                            </td>\n' +
            '                            <td>\n' +
            '                                <p class="fw-bold mb-1">' + customer.fullName + '</p>\n' +
            '                            </td>\n' +
            '                            <td>\n' +
            '                                <p class="fw-bold mb-1">' + customer.nicNumber + '</p>\n' +
            '                            </td>\n' +
            '                            <td>\n' +
            '                                <p class="fw-bold mb-1">' + customer.drivingLicenseNumber + '</p>\n' +
            '                            </td>\n' +
            '                            <td>\n' +
            '                                <p class="fw-bold mb-1">' + customer.emailAddress + '</p>\n' +
            '                            </td>\n' +
            '                            <td>\n' +
            '                                <p class="fw-bold mb-1">' + customer.telephoneNumber + '</p>\n' +
            '                            </td>\n' +
            '                            <td><p class="fw-bold mb-1">' + order.orderRequestedDate + '</p></td>\n' +
            '                            <td>\n' +
            '                                <button class="searchOrderBtn btn btn-success btn-sm btn-rounded" type="button" value="' + order.orderId + '">View</button>\n' +
            '                            </td>\n' +
            '                        </tr>'
        );
    }
}

function findAllOrders() {
    $.ajax({
        url: baseUrl + "order/findAllOrders",
        dataType: 'json',
        async: false,
        method: 'get',
        success: function (resp) {
            allOrders = resp.data;
        }
    });
}

function findAllCustomers() {
    $.ajax({
        url: baseUrl + 'customer/getAllCustomers',
        dataType: 'json',
        method: 'get',
        async: false,
        success: function (resp) {
            allCustomers = resp.data;
        }
    });
}

function findCustomer(id) {
    for (let i = 0; i < allCustomers.length; i++) {
        if (allCustomers[i].customerId + '' === id) {
            return allCustomers[i];
        }
    }
}

$('.searchOrderBtn').click(function () {
    $('#main-order-request-section').css('visibility','visible');
    $('#show-order-requests-section').css('visibility','hidden');
    clickedOrderId = $(this).val();

    $('#main-request-order-btn').html("Update Order");
    $('#request-order-h3').text("Order Detail");
    $('#driver-check-box').css('visibility', 'hidden');
    $('#reason-for-rejection-section').empty();
    $('#reason-for-rejection-section').append(
        '<section class="row">\n' +
        '                    <section class="col-6"><h5>Order Confirmation Status</h5></section>\n' +
        '                    <section class="col-6"><select aria-label="Default select example" class="form-select" id="cmbx-order-confirm"><option selected value="Confirm">Confirm</option>\n' +
        '                                <option value="Denied">Deny</option></select>\n' +
        '                    </section>\n' +
        '                </section>\n' +
        '                <section class="row">\n' +
        '                    <section class="col-12"><textarea cols="78" id="order-note" name="w3review" rows="4"></textarea>\n' +
        '                    </section>\n' +
        '                </section>'
    );
    $('#cmbx-order-confirm').change(function (e) {
        orderConfirmStatus = e.target.value;
        alert(orderConfirmStatus);
    });

    let orderId = $(this).val();
    let driverId = 0;
    $.ajax({
        url: baseUrl + 'order/findOrderById/' + orderId,
        async: false,
        method: 'get',
        success: function (resp) {
            let order = (resp.data[0]);
            console.log(order);
            clickedOrder = order;
            alert(order.pickupTime[0] + ':' + order.pickupTime[1]);
            $('#orderId').text("Order Id : " + order.orderId);
            $('#pickup-date').val(order.pickupDate.substring(0, 10));
            $('#pickup-time').val(order.pickupTime[0] + ':' + order.pickupTime[1]);
            $('#return-date').val(order.returnDate.substring(0, 10));
            $('#return-time').val(order.returnTime[0] + ':' + order.returnTime[1]);
            $('#inp-pickup-venue').val(order.pickupVenue);
            $('#inp-return-venue').val(order.returnVenue);
            driverId = order.driverId;
        }
    });

    $.ajax({
        url: baseUrl + 'driver/findDriverById/' + driverId,
        async: false,
        method: 'get',
        success: function (resp) {
            let driver = resp.data[0];
            $('#inp-req-driver-contact-no').val(driver.telephoneNumber);
            $('#inp-req-driver-email').val(driver.emailAddress);
            $('#inp-req-driver-name').val(driver.fullName);
        }
    });


    let orderDetailCars = [];

    $.ajax({
        url: baseUrl + 'orderDetail/findOrderDetailById/' + orderId,
        async: false,
        method: 'get',
        success: function (resp) {
            for (let i = 0; i < resp.data.length; i++) {
                let orderDetail = (resp.data[i]);
                let car = filterAllCar(orderDetail.carId);
                orderDetailCars.push(car);
            }
        }
    });

    loadCarDetailsForAdmin(orderDetailCars);
    setSelectedCarsPaymentDetails(orderDetailCars);
});

function filterAllCar(carId) {
    for (let i = 0; i < allCars.length; i++) {
        if (allCars[i].carId == carId) {
            return allCars[i];
        }
    }
}

function loadCarDetailsForAdmin(selectedCars) {
    emptyOrderCarDetailView();

    for (let i = 0; i < selectedCars.length; i++) {
        let car = selectedCars[i];
        $('#request-car-container').append(
            '                <section class="row">\n' +
            '                    <section class="col-6">\n' +
            '                        \n' +
            '                            <input class="form-control" maxlength="20" value="' + car.registrationId + '" type="text"/>\n' +
            '                            \n' +
            '                            <div class="form-helper"></div>\n' +
            '                        \n' +
            '                    </section>\n' +
            '\n' +
            '                    <section class="col-6">\n' +
            '                        \n' +
            '                            <input class="form-control"  maxlength="20" value="' + car.brand + '" type="text"/>\n' +
            '                            \n' +
            '                            <div class="form-helper"></div>\n' +
            '                        \n' +
            '                    </section>\n' +
            '\n' +
            '                </section>\n'
        );
    }
}