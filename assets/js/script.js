// for future times, change row (tr) class to "bg-info"
// for current time, change row (tr) class to "bg-primary"

//Declaring global variables


//Functions
$(document).ready(function() {
    //init();

var now = moment().format("dddd Do MMMM, YYYY, H:mm");
$('#currentDateTime').append(now);

});
