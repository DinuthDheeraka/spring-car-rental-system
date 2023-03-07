setDBData();


setInterval(setDBDate,1);

function setDBDate() {
    $('#admin-dash-date').text((new Date()+"").substring(0,24));
}

function setDBData() {
    setDBTotalCustomers();
    setDBDrivers();
    setDBOrders();
    setDBCars();
}

function setDBTotalCustomers() {
    $.ajax({
        url: baseUrl + 'customer/getAllCustomers',
        method: 'get',
        async: false,
        dataType: 'json',
        success: function (resp) {
            $('#dash-total-users').text(resp.data.length);
        }
    });
}

function setDBDrivers() {
    $.ajax({
        url: baseUrl + 'driver/getAllDrivers',
        method: 'get',
        async: false,
        dataType: 'json',
        success: function (resp) {
            setActiveDrivers(resp.data);
            setInactiveDrivers(resp.data);
        }
    });
}

function setActiveDrivers(drivers) {
    let count = 0;
    for(let i = 0; i<drivers.length; i++){
        console.log(drivers[i].currentStatus);
        if(drivers[i].driverStatus=='Inactive'){
            count++;
        }
    }
    $('#dash-active-dri').text(count);
}

function setInactiveDrivers(drivers) {
    let count = 0;
    for(let i = 0; i<drivers.length; i++){
        if(drivers[i].driverStatus!='Inactive'){
            count++;
        }
    }
    $('#dash-order-dri').text(count);
}

function setDBCars() {
    // $.ajax({
    //     url:baseUrl+'car/findAllCars',
    //     async:false,
    //     method:'get',
    //     success:function (resp) {
            setBookedCars();
            setAvailableCars();
            setMaintainCars();
    //     }
    // });
}

function setBookedCars() {
    let count = 0;
    for(let i = 0; i<allCars.length; i++){
        if(allCars[i].currentStatus=='Booked'){
            count++;
        }
    }
    $('#dash-booked-cars').text(count);
}

function setAvailableCars() {
    let count = 0;
    for(let i = 0; i<allCars.length; i++){
        if(allCars[i].currentStatus=='Available'){
            count++;
        }
    }
    $('#dash-free-cars').text(count);
}

function setMaintainCars() {
    let count = 0;
    for(let i = 0; i<allCars.length; i++){
        if(allCars[i].currentStatus=='Maintain'){
            count++;
        }
    }
    $('#dash-maintain-cars').text(count);
}

function setDBOrders() {
    $.ajax({
        url:baseUrl+'order/findAllOrders',
        method:'get',
        async:false,
        success:function (resp) {
            setCurrentGoingOrders(resp.data);
            setTodayOrders(resp.data);
        }
    });
}

function setTodayOrders(orders) {
    let date = new Date();
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    var dateString = y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);

    let count = 0;
    for(let i = 0; i<orders.length; i++){
        console.log(dateString+" "+orders[i].orderRequestedDate.substring(0,10));
        if(dateString==orders[i].orderRequestedDate.substring(0,10)){
            count++;
        }
    }
    $('#dash-today-book').text(count);
}

function setCurrentGoingOrders(orders) {
    let count = 0;
    for(let i = 0; i<orders.length; i++){
        if(orders[i].orderStatus!='Done'){
            count++;
        }
    }
    $('#dash-active-booking').text(count);
}