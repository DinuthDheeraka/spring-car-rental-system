let searchedOrderId = '';
let searchedOrder = {};
let searchedCars = [];
let duration = 0;
let total = 0;
let paidLostDamage = 0;
$('#payment-search-btn').click(function () {
    searchedOrderId = $('#payment-search-bar').val();
    searchOrder();
    setOrderDuration();
    setCustomerDetails();
    setCarDetails();
    loadCarPaymentDetails();
    calculateTotal();
    loadCarsCmbx();
    setPaidLostDamageAmount();
    // searchOrderDetail();
});

function setPaidLostDamageAmount() {
    for(let c of searchedCars){
        switch (c.type){
            case "General":
                paidLostDamage+=10000;break;
            case "Premium":
                paidLostDamage+=15000;break;
            case "Luxury":
                paidLostDamage+=20000;break;
        }
    }

    $('#payment-paid-loss-damage').val(paidLostDamage);
}

function loadCarsCmbx() {
    for(let c of searchedCars){
        $('#payment-select-car').append(
            '<option value="'+c.carId+'" id="'+c.carId+'">'+c.registrationId+'</option>'
        );
    }
}

$('#payment-select-car').change(function () {
    let car = filterAllCar($(this).val());
    $('#payment-extra-km-charge').val(parseFloat(car.priceForExtraKm));
});

$('#payment-extra-km').on('keyup',function () {
   let km = parseFloat($('#payment-extra-km').val());
   let charge =  parseFloat($('#payment-extra-km-charge').val());
   $('#payment-extra-price').val(km*charge);
});

$('#payment-extra-price').on('keyup',function (e) {
    if(e.key=="Enter"){
        let extra = parseFloat($('#payment-extra-price').val());
        let subTotal = parseFloat($('#payment-sub-total').val());
        $('#payment-sub-total').val(extra+subTotal);
    }
});

$('#payment-given-cash').on('keyup',function () {
   let subTotal =  parseFloat($('#payment-sub-total').val());
   let cash = parseFloat($('#payment-given-cash').val());
   $('#payment-balance').val(cash-subTotal);
});

$('#payment-discount').on('keyup',function (e) {
    if(e.key=="Enter"){
        let discount =  parseFloat($('#payment-discount').val());
        let subTotal = parseFloat($('#payment-sub-total').val());
        let newSubTotal = subTotal-((subTotal/100)*discount);
        $('#payment-sub-total').val(newSubTotal);
    }
});

$('#payment-driver-charge').on('keyup',function (e) {
    if(e.key=="Enter"){
        let charge =  parseFloat($('#payment-driver-charge').val());
        let subTotal = parseFloat($('#payment-sub-total').val());
        $('#payment-sub-total').val(charge+subTotal);
    }
});

function calculateTotal() {
    total = 0;
    for(let c of searchedCars){
        total+=c.dailyRate*duration;
    }
    $('#payment-sub-total').val(total);
    $('#payment-total-h2').text('Total Rs.'+parseFloat(total+""));
    $('#payment-order-id-h5').text("Order Id : "+searchedOrder.orderId);
}

function loadCarPaymentDetails() {
    var start = new Date($('#payment-pickup-date').val()).getTime(),
        end = new Date($('#payment-return-date').val()).getTime();

    //1000 * 60 * 60 * 24 = 1 day = 86400000
    let dateDiff = (((end - start) / 86400000));
    duration = dateDiff;

    $('#payment-order-detail-car-section').empty();
    $('#payment-order-detail-car-section').append('' +
        '                <section class="row">\n' +
        '                    <h5>Car Details</h5>\n' +
        '                </section>\n'
    );
    for(let c of searchedCars){
        $('#payment-order-detail-car-section').append(
            '                <section class="row">\n' +
            '                    <section class="col-3">\n' +
            // '                        <div class="form-outline">\n' +
            '                            <input value="'+c.registrationId+'" type="text" id="payment-car-reg-id" class="form-control" />\n' +
            // '                            <label class="form-label" >Registerd Id</label>\n' +
            '                        </div>\n' +
            '                    </section>\n' +
            '                    <section class="col-3">\n' +
            // '                        <div class="form-outline">\n' +
            '                            <input  value="'+c.brand+'" type="text" id="payment-car-brand" class="form-control" />\n' +
            // '                            <label class="form-label">Brand</label>\n' +
            '                        </div>\n' +
            '                    </section>\n' +
            '                    <section class="col-3">\n' +
            // '                        <div class="form-outline">\n' +
            '                            <input value="'+c.dailyRate+'" type="text" id="payment-car-daily-charge" class="form-control" />\n' +
            // '                            <label class="form-label" >Daily Rate</label>\n' +
            '                        </div>\n' +
            '                    </section>\n' +
            '                    <section class="col-3">\n' +
            // '                        <div class="form-outline">\n' +
            '                            <input value="'+dateDiff*c.dailyRate+'" type="text" id="payment-car-total-charge" class="form-control" />\n' +
            // '                            <label class="form-label" >Total Charge</label>\n' +
            '                        </div>\n' +
            '                    </section>\n' +
            '                </section>\n'
        );
    }
}

function setCarDetails() {
    $.ajax({
        url: baseUrl + 'orderDetail/findOrderDetailById/' + searchedOrder.orderId,
        async: false,
        method: 'get',
        success: function (resp) {
            for (let i = 0; i < resp.data.length; i++) {
                let orderDetail = (resp.data[i]);
                let car = filterAllCar(orderDetail.carId);
                searchedCars.push(car);
            }
        }
    });
}

function setCustomerDetails() {
    $.ajax({
        url: baseUrl + 'customer/findCustomerById/' + searchedOrder.customerId,
        async: false,
        method: 'get',
        success: function (resp) {
            $('#payment-cus-nic').val(resp.data[0].nicNumber);
            $('#payment-cus-driving-license').val(resp.data[0].fullName);
            $('#payment-cus-email').val(resp.data[0].emailAddress);
            $('#payment-cus-tele').val(resp.data[0].telephoneNumber);
        }
    });
}

function setOrderDuration() {
    $('#payment-pickup-date').val(searchedOrder.pickupDate.substring(0, 10));
    $('#payment-return-date').val(searchedOrder.returnDate.substring(0, 10));
}

function searchOrder() {
    $.ajax({
        url: baseUrl + 'order/findOrderById/' + searchedOrderId,
        async: false,
        method: 'get',
        success: function (resp) {
            searchedOrder = (resp.data[0]);
        }
    });
}

$('#payment-loss-damage').on('keyup',function () {
    let paidLoss = parseFloat($('#payment-paid-loss-damage').val());
    let charge = parseFloat($('#payment-loss-damage').val());
    $('#payment-return-loss-damage').val(paidLoss-charge);
});