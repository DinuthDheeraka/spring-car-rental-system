loadAllDrivers();
function loadAllDrivers() {
    $.ajax({
        url:baseUrl+"driver/getAllDrivers",
        dataType:'json',
        method:'get',
        async:false,
        success:function (resp) {
            for(let i = 0; i<resp.data.length; i++){
                let driver = resp.data[i];
                $('#all-driver-table-body').append(
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
                    '                                        <p class="fw-bold mb-1">'+driver.fullName+'</p>\n' +
                    '                                        <!--                                        <p class="text-muted mb-0">john.doe@gmail.com</p>-->\n' +
                    '                                    </div>\n' +
                    '                                </div>\n' +
                    '                            </td>\n' +
                    '                            <td>\n' +
                    '                                <p class="fw-bold mb-1">'+driver.nicNumber+'</p>\n' +
                    '                            </td>\n' +
                    '                            <td>\n' +
                    '                                <p class="fw-bold mb-1">'+driver.drivingLicenseNumber+'</p>\n' +
                    '                            </td>\n' +
                    '                            <td>\n' +
                    '                                <p class="fw-bold mb-1">'+driver.homeAddress+'</p>\n' +
                    '                            </td>\n' +
                    '                            <td>\n' +
                    '                                <p class="fw-bold mb-1">'+driver.emailAddress+'</p>\n' +
                    '                                <!--                                <button type="button" class="btn btn-link btn-sm btn-rounded">-->\n' +
                    '                                <!--                                    Edit-->\n' +
                    '                                <!--                                </button>-->\n' +
                    '                            </td>\n' +
                    '                            <td>\n' +
                    '                                <p class="fw-bold mb-1">'+driver.telephoneNumber+'</p>\n' +
                    '                                <!--                                <button type="button" class="btn btn-link btn-sm btn-rounded">-->\n' +
                    '                                <!--                                    Edit-->\n' +
                    '                                <!--                                </button>-->\n' +
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