let allOrders = [];
let allCustomers = [];

loadOrderTblData();

function loadOrderTblData() {
    findAllOrders();
    findAllCustomers();
    setOrderTblData();
}

function setOrderTblData() {
    for(let i = 0; i<allOrders.length; i++){
        let order = allOrders[i];
        let customer = findCustomer(allOrders[i].customerId);
        // console.log(customer);

        $('#admin-requests-tbl-body').append(
            '<tr>\n' +
            '                            <td>\n' +
            '                                <p class="fw-bold mb-1">'+order.orderId+'</p>\n' +
            '                            </td>\n' +
            '                            <td>\n' +
            '                                <p class="fw-bold mb-1">'+customer.fullName+'</p>\n' +
            '                            </td>\n' +
            '                            <td>\n' +
            '                                <p class="fw-bold mb-1">'+customer.nicNumber+'</p>\n' +
            '                            </td>\n' +
            '                            <td>\n' +
            '                                <p class="fw-bold mb-1">'+customer.drivingLicenseNumber+'</p>\n' +
            '                            </td>\n' +
            '                            <td>\n' +
            '                                <p class="fw-bold mb-1">'+customer.emailAddress+'</p>\n' +
            '                            </td>\n' +
            '                            <td>\n' +
            '                                <p class="fw-bold mb-1">'+customer.telephoneNumber+'</p>\n' +
            '                            </td>\n' +
            '                            <td><p class="fw-bold mb-1">'+order.orderRequestedDate+'</p></td>\n' +
            '                            <td>\n' +
            '                                <button class="searchOrderBtn btn btn-success btn-sm btn-rounded" type="button" value="'+order.orderId+'">View</button>\n' +
            '                            </td>\n' +
            '                        </tr>'
        );
    }
}

function findAllOrders() {
    $.ajax({
        url:baseUrl+"order/findAllOrders",
        dataType:'json',
        async:false,
        method:'get',
        success:function (resp) {
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
        success:function (resp) {
            allCustomers = resp.data;
        }
    });
}

function findCustomer(id) {
    for(let i = 0; i<allCustomers.length; i++){
        if(allCustomers[i].customerId+''===id){
            return allCustomers[i];
        }
    }
}

$('.searchOrderBtn').click(function () {

    $('#main-request-order-btn').html("Update Order");
    $('#request-order-h3').text("Order Detail");
    $('#driver-check-box').css('visibility','hidden');

    let orderId = $(this).val();
    let driverId = 0;
    $.ajax({
        url: baseUrl + 'order/findOrderById/'+orderId,
        async: false,
        method: 'get',
        success: function (resp) {
            let order = (resp.data[0]);
            console.log(order);
            $('#orderId').text("Order Id : "+order.orderId);
            $('#pickup-date').val(order.pickupDate.substring(0,10));
            $('#pickup-time').val(order.pickupTime);
            $('#return-date').val(order.returnDate.substring(0,10));
            $('#return-time').val(order.returnTime);
            $('#inp-pickup-venue').val(order.pickupVenue);
            $('#inp-return-venue').val(order.returnVenue);
            driverId = order.driverId;
        }
    });

    $.ajax({
        url: baseUrl + 'driver/findDriverById/'+driverId,
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
        url: baseUrl + 'orderDetail/findOrderDetailById/'+orderId,
        async: false,
        method: 'get',
        success: function (resp) {
            for(let i = 0; i<resp.data.length; i++){
                let orderDetail = (resp.data[i]);
                let car = filterAllCar(orderDetail.carId);
                orderDetailCars.push(car);
            }
        }
    });

    setSelectedCarDetails(orderDetailCars);
    setSelectedCarsPaymentDetails(orderDetailCars);
});

function filterAllCar(carId) {
    for(let i = 0; i<allCars.length; i++){
        if(allCars[i].carId == carId){
            return allCars[i];
        }
    }
}