// for future times, change row (tr) class to "bg-info"
// for current time, change row (tr) class to "bg-primary"

//IDs & Classes I might need to use
// #displayDateTime
// #displayDifferentDate
// #previousBtn
// #currentBtn
// #nextBtn
// #clearBtn
// .saveButton
// .deleteButton


//Declaring global variables

    //This keeps track of the current date and time
    var currentDate;
    //This is what date and time is displayed in the jumbotron
    var displayDate;



$(document).ready(function() {
    //init();
    //This is where all the functions should be called
    saveCurrentDate();
    setCurrentDateTime();

// This function sets the current date/time on the jumbatron
function setCurrentDateTime() {
    var now = moment();
    displayDate = now.clone().format("dddd Do MMMM, YYYY, H:mm");
    $('#displayDateTime').html(displayDate);
    setInterval(setCurrentDateTime, 1000);
};

// This function saves the current date & time
function saveCurrentDate() {
    let now = moment();
    currentDate = now.clone().format("DD MM YYYY, HH:mm");
}

// This function determines which time slots are accessible for input
function checkTimeSlot() {
    moment("id string", "HHmm");
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

//This loop creates the table and elements 
function populateTable() {
    for (let hour = 09; hour < 18; hour ++) {
        //creating the variables for the function
        let hourDateVal = moment(displayDate).hour(hour).minute(0);
        let idVal = hourDateVal.format("YYYY-MM-DD HH:[00]");
        let idSaveVal = hour + "save"
        let idDelVal = hour + "delete"
        console.log(idVal);
        //creating the table rows and content
        let newTr = $("<tr>").attr("id", idVal);
        let newTh = $("<th>").attr("scope", "row").attr("class", "align-middle").text(hourDateVal.hour(hour));
        let newTd1 =$("<td>").attr("class", "event-input-div align-middle");
        let newTextArea = $("<textarea>").attr("class", "event-input align-middle");
        let newTd2 = $("<td>").attr("id", idSaveVal);
        let saveBtn = $("<button>").attr("type", "button").attr("class", "btn align-middle saveButton")
        let saveIcon = $("<i>").attr("class", "far fa-save fa-2x");
        let newTd3 = $("<td>").attr("id", idDelVal);
        let deleteBtn = $("<button>").attr("type", "button").attr("class", "btn align-middle deleteButton")
        let deleteIcon = $("<i>").attr("class", "fas fa-trash fa-2x");
        //appending the created elements
        $("#planner").append(newTr);
        newTr.append(newTh);
        newTr.append(newTd1);
        newTd1.append(newTextArea);
        newTr.append(newTd2);
        newTd2.append(saveBtn);
        saveBtn.append(saveIcon);
        newTr.append(newTd3);
        newTd3.append(deleteBtn);
        deleteBtn.append(deleteIcon);
    }
}

populateTable();

});
