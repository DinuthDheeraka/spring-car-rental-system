
let clickCount = 1;
loadCarCards();
function loadCarCards() {
    $.ajax({
        url:baseUrl+'car/findAllCars',
        method:'get',
        async:false,
        dataType:'json',
        success:function (resp) {
            for(let i = 0; i<resp.data.length; i++){
                let car = resp.data[i];
                $('#cars-container').append
                ("<section class='row'><section class='row'><section id='car-img' class='col-5'></section><section class='col-7 car-details'><section class='temp row'><section class='col-6'><h5>4 passengers</h5></section> <section class='col-6'><h5 class='fuel-h5'>"+car.fuelType+"</h5></section> </section> <section class='car-status'><span class=\"badge badge-success rounded-pill d-inline\">"+car.currentStatus+"</span><span  class=\"badge badge-warning rounded-pill d-inline span02\">"+car.type+"</span></section>   <section class='car-name'><h3>"+car.brand+"</h3></section>  <section class='car-price'><section> <section class='price'>"+car.dailyRate+"</section><section class='price'>"+car.monthlyRate+"</section>  </section> <section> <section>Daily Rate</section><section>Monthly Rate</section></section> </section>  <section class='car-selection row'><section class='col-6'><div class=\"form-check\">\n" +
                    "  <input class=\"form-check-input\" type=\"checkbox\" value=\""+car.carId+"\" id=\""+car.carId+"\" />\n" +
                    "  <label class=\"form-check-label\" for=\"flexCheckDefault\">Select this car</label>\n" +
                    "</div></section> <section class='col-6'><button type=\"button\" class=\"btn btn-success\">View more Details</button>  </section> </section></section></section>"
                );
            }
        }
    });
}

$('#add').click(function () {
    if(clickCount%2==1){
        $('#cars-container').append
        ("<section class='row'><section class='row'><section id='car-img' class='col-5'></section><section class='col-7 car-details'><section class='temp row'><section class='col-6'><h5>4 passengers</h5></section> <section class='col-6'><h5 class='fuel-h5'>Petrol</h5></section> </section> <section class='car-status'><span class=\"badge badge-success rounded-pill d-inline\">Available</span><span  class=\"badge badge-warning rounded-pill d-inline span02\">Luxury</span></section>   <section class='car-name'><h3>Mustang Shelby 2021-Auto</h3></section>  <section class='car-price'><section> <section class='price'>Rs.5000.00</section><section class='price'>Rs.50 000.00</section>  </section> <section> <section>Daily Rate</section><section>Monthly Rate</section></section> </section>  <section class='car-selection row'><section class='col-6'><div class=\"form-check\">\n" +
            "  <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"flexCheckDefault\" />\n" +
            "  <label class=\"form-check-label\" for=\"flexCheckDefault\">Select this car</label>\n" +
            "</div></section> <section class='col-6'><button type=\"button\" class=\"btn btn-success\">View more Details</button>  </section> </section></section></section>"
        );
    }else{
        $('#cars-container').append
        ("<section class='row'><section class='row'><section id='car-img' class='col-5'></section><section class='col-7 car-details'><section class='temp row'><section class='col-6'><h5>4 passengers</h5></section> <section class='col-6'><h5 class='fuel-h5'>Petrol</h5></section> </section> <section class='car-status'><span class=\"badge badge-danger rounded-pill d-inline\">Booked</span><span  class=\"badge badge-warning rounded-pill d-inline span02\">Luxury</span></section>   <section class='car-name'><h3>Mustang Shelby 2021-Auto</h3></section>  <section class='car-price'><section> <section class='price'>Rs.5000.00</section><section class='price'>Rs.50 000.00</section>  </section> <section> <section>Daily Rate</section><section>Monthly Rate</section></section> </section>  <section class='car-selection row'><section class='col-6'><div class=\"form-check\">\n" +
            "  <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"flexCheckDefault\" />\n" +
            "  <label class=\"form-check-label\" for=\"flexCheckDefault\">Select this car</label>\n" +
            "</div></section> <section class='col-6'><button type=\"button\" class=\"btn btn-success\">View more Details</button>  </section> </section></section></section>"
        );
    }
    clickCount++;
});