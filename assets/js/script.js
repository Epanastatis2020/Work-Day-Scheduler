// for future times, change row (tr) class to "bg-info"
// for current time, change row (tr) class to "bg-primary"

//Declaring global variables



$(document).ready(function() {
    //init();

// This function sets the current date/time on the jumbatron
function setCurrentDateTime() {
    var now = moment().format("dddd Do MMMM, YYYY, H:mm");
    $('#displayDateTime').html(now);
    setInterval(setCurrentDateTime, 1000);
};



// This function determines which time slots are accessible for input
function checkTimeSlot() {

}

// This function is what happens when the "save" button is clicked
function saveTimeSlot () {
    //Add code to save input text to local storage referencing time and date
}

// This function is what happens when the "delete" button is clicked
function deleteTimeSlot () {
    //Add code to delete saved input text and date time from local storage
}

// This function is what happens when the "clear" button is clicked
function clearTimeSlots () {
    //Add code to delete all local storage
}

//This function is what happens when the "previous day" link is clicked
function previousTimeSlots() {
    //Add code to update table with previous day's locally stored values
    //Add code to change jumbatron sub-heading to show previous date instead of current
}

//This function is what happens when the "current day" link is clicked
function currentTimeSlots() {
    //Re-initialise
}

//This function is what happens when the "next day" link is clicked
function nextTimeSlots() {
    //Add code to update table with next day's locally stored values
    //Add code to change jumbatron sub-heading to show next date instead of current
}

setCurrentDateTime ();

});
