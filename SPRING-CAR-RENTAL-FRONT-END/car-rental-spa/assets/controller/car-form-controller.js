
let clickCount = 1;
$('#add').click(function () {
    if(clickCount%2==1){
        $('#cars-container').append
        ("<section class='row'><section class='row'><section id='car-img' class='col-5'></section><section class='col-7 car-details'><section class='car-status'><span class=\"badge badge-success rounded-pill d-inline\">Available</span></section>   <section class='car-name'><h3>Mustang Shelby 2021-Auto</h3></section>  <section class='car-price'><section> <section class='price'>Rs.5000.00</section><section class='price'>Rs.50 000.00</section>  </section> <section> <section>Daily Rate</section><section>Monthly Rate</section></section> </section>  <section class='car-selection row'><section class='col-6'><div class=\"form-check\">\n" +
            "  <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"flexCheckDefault\" />\n" +
            "  <label class=\"form-check-label\" for=\"flexCheckDefault\">Select this car</label>\n" +
            "</div></section> <section class='col-6'><button>View</button></section>  </section> </section></section></section>"
        );
    }else{
        $('#cars-container').append
        ("<section class='row'><section class='row'><section id='car-img' class='col-5'></section><section class='col-7 car-details'><section class='car-status'><span class=\"badge badge-danger rounded-pill d-inline\">Booked</span></section>   <section class='car-name'><h3>Mustang Shelby 2021-Auto</h3></section>  <section class='car-price'><section> <section class='price'>Rs.5000.00</section><section class='price'>Rs.50 000.00</section>  </section> <section> <section>Daily Rate</section><section>Monthly Rate</section></section> </section>  <section class='car-selection row'><section class='col-6'><div class=\"form-check\">\n" +
            "  <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"flexCheckDefault\" />\n" +
            "  <label class=\"form-check-label\" for=\"flexCheckDefault\">Select this car</label>\n" +
            "</div></section> <section class='col-6'><button id='odd-btn'>View</button></section>  </section> </section></section></section>"
        );
    }
    clickCount++;
});