$("#customer-nic-input").change(function () {
    let reader = new FileReader();

    reader.onload = function (e) {
        $("#customer-nic-section").attr('src', e.target.result);
    };

    reader.readAsDataURL(this.files[0]);
});

$("#customer-license-input").change(function () {
    let reader = new FileReader();

    reader.onload = function (e) {
        $("#customer-license-section").attr('src', e.target.result);
    };

    reader.readAsDataURL(this.files[0]);
});