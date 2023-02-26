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
        console.log(customer);

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
            '                                <button class="btn btn-success btn-sm btn-rounded" type="button">View</button>\n' +
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