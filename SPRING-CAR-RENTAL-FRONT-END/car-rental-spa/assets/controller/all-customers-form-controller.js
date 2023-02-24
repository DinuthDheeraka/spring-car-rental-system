loadAllCustomers();
function loadAllCustomers() {
    $.ajax({
        url: baseUrl + 'customer/getAllCustomers',
        dataType: 'json',
        method: 'get',
        async: false,
        success: function (resp) {
            for (let i = 0; i < resp.data.length; i++) {
                let customer = resp.data[i];
                $('#all-customer-table-body').append(
                    '<tr>\n' +
                    '                            <td>\n' +
                    '                                <div class="d-flex align-items-center">\n' +
                    '                                    <img\n' +
                    '                                            alt=""\n' +
                    '                                            class="rounded-circle"\n' +
                    '                                            src="https://mdbootstrap.com/img/new/avatars/8.jpg"\n' +
                    '                                            style="width: 45px; height: 45px"\n' +
                    '                                    />\n' +
                    '                                    <div class="ms-3">\n' +
                    '                                        <p class="fw-bold mb-1">'+customer.fullName+'</p>\n' +
                    '                                        <!--                                        <p class="text-muted mb-0">john.doe@gmail.com</p>-->\n' +
                    '                                    </div>\n' +
                    '                                </div>\n' +
                    '                            </td>\n' +
                    '                            <td>\n' +
                    '                                <p class="fw-bold mb-1">'+customer.nicNumber+'</p>\n' +
                    '                            </td>\n' +
                    '                            <td>\n' +
                    '                                <p class="fw-bold mb-1">'+customer.drivingLicenseNumber+'</p>\n' +
                    '                            </td>\n' +
                    '                            <td>\n' +
                    '                                <p class="fw-bold mb-1">'+customer.homeAddress+'</p>\n' +
                    '                            </td>\n' +
                    '                            <td>\n' +
                    '                                <p class="fw-bold mb-1">'+customer.emailAddress+'</p>\n' +
                    '                            </td>\n' +
                    '                            <td>\n' +
                    '                                <p class="fw-bold mb-1">'+customer.telephoneNumber+'</p>\n' +
                    '                            </td>\n' +
                    '                            <td>\n' +
                    '                                <span class="badge badge-success rounded-pill d-inline">Active</span>\n' +
                    '                            </td>\n' +
                    '                            <td>\n' +
                    '                                <button class="btn btn-link btn-sm btn-rounded" type="button">Edit</button>\n' +
                    '                            </td>\n' +
                    '                        </tr>'
                );
            }
        }
    });
}