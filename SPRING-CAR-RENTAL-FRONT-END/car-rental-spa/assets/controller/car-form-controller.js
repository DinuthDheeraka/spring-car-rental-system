
let clickCount = 1;
$('#add').click(function () {
    if(clickCount%2==1){
        $('#cars-container').append
        ("<section class='row'><section class='row'><section id='car-img' class='col-5'></section><section class='col-7 car-details'><section><span class=\"badge badge-success rounded-pill d-inline\">Booked</span></section>   <section><h5>Mustang Shelby 2021</h5></section>  <section>Rs.1000.00 per day | Rs.10000.00 per month</section>  <section></section> </section></section></section>"
        );
    }else{
        $('#cars-container').append
        ("<section class='row'><section class='row'><section id='car-img' class='col-5'></section><section class='col-7 car-details'><section><span class=\"badge badge-danger rounded-pill d-inline\">Booked</span></section>   <section><h5>Mustang Shelby 2021</h5></section>  <section>Rs.1000.00 per day | Rs.10000.00 per month</section>  <section></section> </section></section></section>"
        );
    }
    clickCount++;
});