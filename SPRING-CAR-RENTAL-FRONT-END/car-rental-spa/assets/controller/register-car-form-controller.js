let selectedBrand = "";
let selectedType = "";
let selectedFuelType = "";
let selectedTransmissionType = "";
let selectedCurrentStatus = "";

$('#select-car-brand').change(function (e) {
    selectedBrand = e.target.value;
});

$('#select-car-type').change(function (e) {
    selectedType = e.target.value;
});

$('#select-fuel-type').change(function (e) {
    selectedFuelType = e.target.value;
});

$('#select-transmission-type').change(function (e) {
    selectedTransmissionType = e.target.value;
});

$('#select-car-current-status').change(function (e) {
    selectedCurrentStatus = e.target.value;
});

$('#register-car-btn').click(function () {
    registerCar();
    uploadCarViews()
});

function uploadCarViews() {

}

function registerCar() {
    let car = {
        registrationId:$('#inp-car-registered-number').val(),
        monthlyRate:$('#inp-monthly-rate').val(),
        dailyRate:$('#inp-daily-rate').val(),
        colour:$('#select-vehicle-colour').val(),
        brand:selectedBrand,
        type:selectedType,
        monthlyKm:$('#inp-monthly-km').val(),
        dailyKm:$('#inp-daily-km').val(),
        numberOfPassengers:$('#inp-passenger-count').val(),
        priceForExtraKm:$('#inp-extra-price').val(),
        fuelType:selectedFuelType,
        transmissionType:selectedTransmissionType,
        currentStatus:selectedCurrentStatus
    };

    $.ajax({
        url:baseUrl+'car/register',
        dataType:'json',
        contentType:'application/json',
        data:JSON.stringify(car),
        async:false,
        method:'post',
        success:function (resp) {
        }
    });
}