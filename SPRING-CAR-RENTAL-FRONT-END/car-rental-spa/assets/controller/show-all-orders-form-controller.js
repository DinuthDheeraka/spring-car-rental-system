let allOrders = [];
let allCustomers = [];

function setOrderTblData() {
    findAllOrders();
    findAllCustomers();
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