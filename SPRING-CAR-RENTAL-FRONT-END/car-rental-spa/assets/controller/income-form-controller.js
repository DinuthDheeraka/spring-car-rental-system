let payments = [];

let datePattern1 = '';
let datePattern2 = '';


let dateOneSelectedYear  = '';
let dateOneSelectedMonth  = '';
let dateOneSelectedDate  = '';

let dateTwoSelectedYear  = '';
let dateTwoSelectedMonth  = '';
let dateTwoSelectedDate  = '';

$('#date-1-year').change(function (e) {
    dateOneSelectedYear = e.target.value;
    datePattern1 = '';
    datePattern1=dateOneSelectedYear;
    searchPayment();
    calTotal("one",datePattern1);
});

$('#date-1-month').change(function (e) {
    dateOneSelectedMonth = e.target.value;
    datePattern1 = '';
    datePattern1=dateOneSelectedYear+'-'+dateOneSelectedMonth;
    searchPayment();
    calTotal("one",datePattern1);
});

$('#date-1-date').change(function (e) {
    dateOneSelectedDate = e.target.value;
    datePattern1 = '';
    datePattern1=dateOneSelectedYear+'-'+dateOneSelectedMonth+'-'+dateOneSelectedDate;
    calTotal("one", datePattern1);
});


$('#date-2-year').change(function (e) {
    dateTwoSelectedYear = e.target.value;
    datePattern1 = '';
    datePattern1=dateTwoSelectedYear;
    searchPayment();
    calTotal("two",datePattern2);
});

$('#date-2-month').change(function (e) {
    dateTwoSelectedMonth = e.target.value;
    datePattern1 = '';
    datePattern1=dateTwoSelectedYear+'-'+dateTwoSelectedMonth;
    searchPayment();
    calTotal("two",datePattern2);
});

$('#date-2-date').change(function (e) {
    dateTwoSelectedDate = e.target.value;
    datePattern1 = '';
    datePattern1=dateTwoSelectedYear+'-'+dateTwoSelectedMonth+'-'+dateTwoSelectedDate;
    searchPayment();
    calTotal("two",datePattern2);
});

function searchPayment(value) {
    $.ajax({
        url:baseUrl+'payment/findAll',
        async:false,
        method:'get',
        dataType:'json',
        success:function (resp) {
            payments = resp.data;
        }
    });
}

function calTotal(side,dateParam) {
    let total = 0;
    for(let i = 0; i<payments.length; i++){
        let date = new Date(payments[i].date);
        var d = date.getDate();
        var m = date.getMonth() + 1;
        var y = date.getFullYear();
        var dateString = y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);

        if(dateString.startsWith(dateParam)){
            total+=payments[i].amount;
        }
    }
    $('#date-'+side+'-amount').text('RS.'+total);

    calDiffer();
}

function calDiffer() {

    let one = ($('#date-one-amount').text().substring(3,$('#date-one-amount').text().length));
    let two = ($('#date-two-amount').text().substring(3,$('#date-two-amount').text().length));

    $('#differ').text('Difference is Rs.'+Math.abs(one-two));
}
