let carAvailabilityClass = "";
let carTypeClass = "";

let allCars = [];
let filterCars = [];

loadCarCards();

function loadCarCards() {
    $.ajax({
        url: baseUrl + 'car/findAllCars',
        method: 'get',
        async: false,
        dataType: 'json',
        success: function (resp) {
            for (let i = 0; i < resp.data.length; i++) {
                let car = resp.data[i];
                allCars[i] = car;
                findCarCurrentStatusCssClass(car.currentStatus);
                findCarTypeCssClass(car.type);
                $('#cars-container').append
                ("<section class='row'><section class='row'><section id='car-img' class='col-5'></section><section class='col-7 car-details'><section class='temp row'><section class='col-6'><h5>4 passengers</h5></section> <section class='col-6'><h5 class='fuel-h5'>" + car.fuelType + "</h5></section> </section> <section class='car-status'><span class=\"badge " + carAvailabilityClass + " rounded-pill d-inline\">" + car.currentStatus + "</span><span  class=\"badge " + carTypeClass + " rounded-pill d-inline span02\">" + car.type + "</span></section>   <section class='car-name'><h3>" + car.brand + "</h3></section>  <section class='car-price'><section> <section class='price'>" + "RS." + car.dailyRate + "</section><section class='price'>" + "RS." + car.monthlyRate + "</section>  </section> <section> <section>Daily Rate</section><section>Monthly Rate</section></section> </section>  <section class='car-selection row'><section class='col-6'><div class=\"form-check\">\n" +
                    "  <input class=\"form-check-input\" type=\"checkbox\" value=\"" + car.carId + "\" id=\"check-" + car.carId + "\" />\n" +
                    "  <label  class=\"form-check-label check-car\" for=\"flexCheckDefault\">Select this car</label>\n" +
                    "</div></section> <section class='col-6'><button type=\"button\" class=\"btn btn-success\">View more Details</button>  </section> </section></section></section>"
                );

                if(car.currentStatus=='Booked'){
                    document.getElementById('check-'+car.carId).disabled = true;
                }
            }
        }
    });
    filterCars = allCars;
}


function findCarCurrentStatusCssClass(carCurrentStatus) {
    switch (carCurrentStatus) {
        case "Available" :
            carAvailabilityClass = "badge-success";
            break;
        case "Maintaining" :
            carAvailabilityClass = "badge badge-secondary";
            break;
        case "Booked" :
            carAvailabilityClass = "badge-danger";
            break;
    }
}

function findCarTypeCssClass(carType) {
    switch (carType) {
        case "Luxury" :
            carTypeClass = "badge-warning";
            break;
        case "General" :
            carTypeClass = "badge badge-info";
            break;
        case "Premium" :
            carTypeClass = "badge badge-primary";
            break;
    }
}

$('#add').click(function () {
    loadCarCards();
});

$('#request-order-btn').click(function () {
    let selectedCars = [];
    for (let i = 0; i < allCars.length; i++) {
        let car = allCars[i];
        if($('#check-' + car.carId + '').is(":checked")){
            selectedCars.push(car);
        }
    }
    loadSelectedCarsToRequestOrder(selectedCars);
});

$('#filter-select-car-transmission').change(function (e) {
    let temp = [];

    for(let i = 0; i<filterCars.length; i++){
        if((filterCars[i].transmissionType==e.target.value)){
            temp.push(filterCars[i]);
        }
    }

    filterCars = temp;

    loadFilterCarCards(filterCars);
});

$('#filter-select-car-brand').click(function (e) {
    let temp = [];

    for(let i = 0; i<filterCars.length; i++){
        if((filterCars[i].brand==e.target.value)){
            temp.push(filterCars[i]);
        }
    }
    filterCars = temp;
    loadFilterCarCards(filterCars);
});

$('#filter-select-car-fuel-type').click(function (e) {
    let temp = [];
    for(let i = 0; i<filterCars.length; i++){
        if((filterCars[i].fuelType==e.target.value)){
            temp.push(filterCars[i]);
        }
    }
    filterCars = temp;
    loadFilterCarCards(filterCars);
});


$('#filter-select-car-type').change(function (e) {
    let temp = [];
    for(let i = 0; i<filterCars.length; i++){
        if(filterCars[i].type==e.target.value){
            temp.push(filterCars[i]);
        }
    }

    filterCars = temp;

    for(let i = 0; i<filterCars.length; i++){
        console.log(filterCars[i])
    }

    loadFilterCarCards(filterCars);
});

$('#reset-filter-btn').click(function () {
    filterCars = allCars;
    loadFilterCarCards(allCars);
});

function loadFilterCarCards(filterCars) {
    $('#cars-container').empty();
    for(let i = 0; i<filterCars.length; i++){
        let car = filterCars[i];
        findCarCurrentStatusCssClass(car.currentStatus);
        findCarTypeCssClass(car.type);
        $('#cars-container').append
        ("<section class='row'><section class='row'><section id='car-img' class='col-5'></section><section class='col-7 car-details'><section class='temp row'><section class='col-6'><h5>4 passengers</h5></section> <section class='col-6'><h5 class='fuel-h5'>" + car.fuelType + "</h5></section> </section> <section class='car-status'><span class=\"badge " + carAvailabilityClass + " rounded-pill d-inline\">" + car.currentStatus + "</span><span  class=\"badge " + carTypeClass + " rounded-pill d-inline span02\">" + car.type + "</span></section>   <section class='car-name'><h3>" + car.brand + "</h3></section>  <section class='car-price'><section> <section class='price'>" + "RS." + car.dailyRate + "</section><section class='price'>" + "RS." + car.monthlyRate + "</section>  </section> <section> <section>Daily Rate</section><section>Monthly Rate</section></section> </section>  <section class='car-selection row'><section class='col-6'><div class=\"form-check\">\n" +
            "  <input class=\"form-check-input\" type=\"checkbox\" value=\"" + car.carId + "\" id=\"check-" + car.carId + "\" />\n" +
            "  <label class=\"form-check-label\" for=\"flexCheckDefault\">Select this car</label>\n" +
            "</div></section> <section class='col-6'><button type=\"button\" class=\"btn btn-success\">View more Details</button>  </section> </section></section></section>"
        );

        if(car.currentStatus=='Booked'){
            document.getElementById('check-'+car.carId).disabled = true;
        }
    }
}
