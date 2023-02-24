let selectedBrand = "";
let selectedType = "";
let selectedFuelType = "";
let selectedTransmissionType = "";
let selectedCurrentStatus = "";

let newCarId = 0;

$('#select-car-brand').change(function (e) {
    selectedBrand = e.target.value;
});

$('#main-select-car-type').change(function (e) {
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
    findLastCarId();
    registerCar();
    // uploadCarViews()
    console.log(newCarId);
});

function findLastCarId() {
    $.ajax({
        url: baseUrl + 'car/lastCarId',
        async: false,
        method: 'get',
        success: function (resp) {
            newCarId = (resp.data[0])+1;
        }
    });
}

function uploadCarViews() {
    let carFrontView = $("#inp-car-front-view").prop('files')[0];
    let carSideView = $("#inp-car-side-view").prop('files')[0];
    let carBackView = $("#inp-car-back-view").prop('files')[0];
    let carInteriorView = $("#inp-car-interior-view").prop('files')[0];

    let formData = new FormData();
    formData.append("front_view", carFrontView);
    formData.append("side_view", carSideView);
    formData.append("back_view", carBackView);
    formData.append("interior_view", carInteriorView);

    // let carRegId = $('#inp');

    $.ajax({
        url: baseUrl+'/car/upload/CR-00001',
        data: formData,
        type: 'POST',
        contentType: false,
        processData: false,
        async:false,
        success: function (data) {
            // console.log('Image uploaded successfully.');
        },
        error: function (error) {
            // console.error(error);
        }
    });
}

function registerCar() {
    let car = {
        carId:newCarId,
        registrationId:$('#inp-car-registered-number').val(),
        monthlyRate:$('#inp-monthly-rate').val(),
        dailyRate:$('#main-inp-daily-rate').val(),
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