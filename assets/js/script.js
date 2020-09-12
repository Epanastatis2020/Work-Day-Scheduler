// for future times, change row (tr) class to "bg-info"
// for current time, change row (tr) class to "bg-primary"

//Declaring global variables


//Functions
$(document).ready(function() {
    //init();

function setCurrentDateTime() {
    var now = moment().format("dddd Do MMMM, YYYY, H:mm");
    $('#currentDateTime').html(now);
    setInterval(setCurrentDateTime, 1000);
};

setCurrentDateTime ();

});
