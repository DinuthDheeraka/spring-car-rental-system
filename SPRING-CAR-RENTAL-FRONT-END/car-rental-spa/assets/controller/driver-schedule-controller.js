let scheduleOrder = {};
let scheduleCustomer = {};
let scheduleCars = [];

searchSchedule(2);

function searchSchedule(paramDriverId) {
    setScheduleOrder(6);
    setOrderDetailInputs();
    setScheduleCustomer();
    setCustomerInputs();
    setOrderCars();
    setOrderCarInputs();
}

function setOrderCarInputs() {
    $('#driver-schedule-car-details').empty();
    $('#driver-schedule-car-details').append(
        '<section class="row"><h3>Order Car Details</h3></section>'
    );
    for(let c of scheduleCars){
        $('#driver-schedule-car-details').append(
            '                <section class="row">\n' +
            '                    <section class="col-2">\n' +
            '                        <input value="'+c.registrationId+'" type="text" id="sch-carRegId" class="form-control" />\n' +
            '                    </section>\n' +
            '                    <section class="col-2">\n' +
            '                        <input value="'+c.brand+'" type="text" id="sch-carBrand" class="form-control" />\n' +
            '                    </section>\n' +
            '                    <section class="col-2">\n' +
            '                        <input value="'+c.transmissionType+'" type="text" id="sch-CarTransmission" class="form-control" />\n' +
            '                    </section>\n' +
            '                    <section class="col-2">\n' +
            '                        <input value="'+c.numberOfPassengers+' passengers" type="text" id="sch-carPassengers" class="form-control" />\n' +
            '                    </section>\n' +
            '                    <section class="col-2">\n' +
            '                        <input value="'+c.fuelType+'" type="text" id="sch-carFuel" class="form-control" />\n' +
            '                    </section>\n' +
            '                    <section class="col-2">\n' +
            '                        <input value="'+c.type+'" type="text" id="sch-CarType" class="form-control" />\n' +
            '                    </section>\n' +
            '                </section>\n'
        );
    }
}

function setOrderCars() {
    $.ajax({
        url:baseUrl+'orderDetail/'+'findOrderDetailById/'+scheduleOrder.orderId,
        async:false,
        method:'get',
        success:function (resp) {
            for (let i = 0; i < resp.data.length; i++) {
                let orderDetail = (resp.data[i]);
                let car = filterAllCar(orderDetail.carId);
                scheduleCars.push(car);
            }
        }
    });
}

function setCustomerInputs() {
    $('#sch-cusNic').val(scheduleCustomer.nicNumber);
    $('#sch-cusAddress').val(scheduleCustomer.fullName);
    $('#sch-cusDrivingNo').val(scheduleCustomer.drivingLicenseNumber);
    $('#sch-cusCusEmail').val(scheduleCustomer.emailAddress);
    $('#sch-cusTele').val(scheduleCustomer.telephoneNumber);
}

function setScheduleCustomer() {
    $.ajax({
        url:baseUrl+'customer/findCustomerById/'+scheduleOrder.customerId,
        async: false,
        method: 'get',
        dataType: 'json',
        success:function (resp) {
            scheduleCustomer = resp.data[0];
        }
    });
}

function setOrderDetailInputs() {
    $('#sch-OrderId').val(scheduleOrder.orderId);
    $('#sch-returnDate').val(scheduleOrder.returnDate.substring(0,10));
    $('#sch-retrunTime').val(scheduleOrder.returnTime[0]+':'+scheduleOrder.returnTime[1]);
    $('#sch-pickDate').val(scheduleOrder.pickupDate.substring(0,10));
    $('#sch-pickTime').val(scheduleOrder.pickupTime[0]+':'+scheduleOrder.returnTime[1]);
}

function setScheduleOrder(param) {
    $.ajax({
        url:baseUrl+'order/findNewOrderByDriverId/'+activeUser.driverId,
        async:false,
        method:'get',
        dataType:'json',
        success:function (resp) {
            scheduleOrder = (resp.data[0]);
            if(scheduleOrder.length==0){
                $('#sch-note').css('visibility','visible');
            }else{
                $('#sch-note').css('visibility','hidden');
            }
        }
    });
}