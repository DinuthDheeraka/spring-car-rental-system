$('#landing-cus-register-btn').click(function () {
    $('#customer-register-section').css('visibility', 'visible');
    $('#login-section').css('visibility', 'hidden');
    $('#all-customer-section').css('visibility', 'hidden');
    $('#all-driver-section').css('visibility', 'hidden');
    $('#register-car-section').css('visibility', 'hidden');
    $('#driver-register-section').css('visibility', 'hidden');
    $('#cars-section').css('visibility', 'hidden');
    $('#main-order-request-section').css('visibility', 'hidden');
    $('#show-order-requests-section').css('visibility', 'hidden');
    $('#my-order-requests-section').css('visibility', 'hidden');
    $('#landing-page').css('visibility', 'hidden');
});

$('#login-sign-btn').click(function () {
    let userName = $('#inp-sign-in-userName').val();
    let password = $('#inp-sign-in-password').val();
    $.ajax({
        url: baseUrl + 'systemUser/allSystemUsers',
        async: false,
        method: 'get',
        dataType: 'json',
        success: function (resp) {
            findActiveUser(searchUser(resp.data, password, userName))
        }
    });
});

function searchUser(systemUsers, password, userName) {
    for (let i = 0; i < systemUsers.length; i++) {
        if (systemUsers[i].password == password && systemUsers[i].userName == userName) {
            alert(true);
            return systemUsers[i];
        }
    }
}

function findActiveUser(user) {
    let userType = user.userType;
    updateViews(userType);
    if(userType=="Admin"){
        activeUser = user;
        activeUserType = "Admin";
    }
    switch (userType) {

        case "Customer":
            $.ajax({
                url: baseUrl + 'customer/getAllCustomers',
                dataType: 'json',
                method: 'get',
                async: false,
                success: function (resp) {
                    for (let i = 0; i < resp.data.length; i++) {
                        let customer = resp.data[i];
                        if (customer.nicNumber == user.nicNumber) {
                            activeUser = customer;
                            activeUserType = "Customer";
                            break;
                        }
                    }
                }
            });
            break;

        case "Driver":
            $.ajax({
                url: baseUrl + 'driver/getAllDrivers',
                dataType: 'json',
                method: 'get',
                async: false,
                success: function (resp) {
                    for (let i = 0; i < resp.data.length; i++) {
                        let driver = resp.data[i];
                        if (driver.nicNumber == user.nicNumber) {
                            activeUser = driver;
                            activeUserType = "Driver";
                            break;
                        }
                    }
                }
            });
            break;

    }

    alert(activeUser.nicNumber);
}


function updateViews(userType) {
    switch (userType) {
        case "Driver":
            $('#driver-header').css('visibility','visible');
            $('#customer-header').css('visibility','hidden');
            $('#admin-header').css('visibility','hidden');break;
        case "Admin":
            $('#driver-header').css('visibility','hidden');
            $('#customer-header').css('visibility','hidden');
            $('#admin-header').css('visibility','visible');break;
        case "Customer":
            $('#driver-header').css('visibility','hidden');
            $('#admin-header').css('visibility','hidden');
            $('#customer-header').css('visibility','visible');break;
    }
}