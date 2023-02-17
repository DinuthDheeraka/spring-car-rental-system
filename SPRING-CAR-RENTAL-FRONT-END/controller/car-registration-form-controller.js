$("#car-front-input").change(function () {
    let reader = new FileReader();

    reader.onload = function (e) {
        $("#car-front-section").attr('src', e.target.result);
    };

    reader.readAsDataURL(this.files[0]);
});

$("#car-back-input").change(function () {
    let reader = new FileReader();

    reader.onload = function (e) {
        $("#car-back-section").attr('src', e.target.result);
    };

    reader.readAsDataURL(this.files[0]);
});

$("#car-side-input").change(function () {
    let reader = new FileReader();

    reader.onload = function (e) {
        $("#car-side-section").attr('src', e.target.result);
    };

    reader.readAsDataURL(this.files[0]);
});

$("#car-interior-input").change(function () {
    let reader = new FileReader();

    reader.onload = function (e) {
        $("#car-interior-section").attr('src', e.target.result);
    };

    reader.readAsDataURL(this.files[0]);
});