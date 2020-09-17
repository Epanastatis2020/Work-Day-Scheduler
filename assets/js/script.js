//IDs & Classes I might need to use
// #displayDateTime
// #displayDifferentDate
// #previousBtn
// #currentBtn
// #nextBtn



//Declaring global variables

    //This is the global current date/time variable
    let displayDate;
    //This is the stored calendar variable
    let calendar;
    //These are variables for the buttons
    let currentBtnEl = $("#currentBtn")[0];
    let previousBtnEl = $("#previousBtn")[0];
    let nextBtnEl = $("#nextBtn")[0];
    let clearBtnEl = $("#clearBtn")[0];


$(document).ready(function() {
    init();
});

//initialiser
function init() {
    $("#planner").empty();
    setCurrentDateTime();
    setJumbatron();
    populateTable();

    //Event listeners
    $("tr").click(handleClick);
    $("#clearBtn").click(clearTimeSlots);
    $("#previousBtn").click(previousTimeSlots);
    $("#currentBtn").click(currentTimeSlots);
    $("#nextBtn").click(nextTimeSlots);
}

// This function sets the current date/time
function setCurrentDateTime() {
    var now = moment();
    displayDate = now.clone();
    setInterval(setCurrentDateTime, 1000);
};

//This function updates the day/time on the jumabatron
function setJumbatron() {
    var jumbatronDate = moment().format("dddd Do MMMM YYYY, HH:mm");
    $('#displayDateTime').html(jumbatronDate);
    setInterval(setJumbatron, 1000);
}

// This function is what happens when either "save" or "delete" buttons are clicked
function handleClick (event) {
    let jqueryEvent = $(event.target);
    if (jqueryEvent.hasClass("fa-save")) {
        saveTimeSlot(event);
    }
    else if (jqueryEvent.hasClass("fa-trash")) {
        deleteTimeSlot(event);
    }
};

// This function saves the calendar event
function saveTimeSlot (event) {
    event.preventDefault();
    let newCalendarEvent = $(event.target).closest("tr").find("textarea").val();
    let newCalendarEventTime = $(event.target).closest("tr").attr("id");
    if (newCalendarEvent === "") {
        return;
    }
    let newCalendarEntry = {
        Entry: newCalendarEvent,
        Timeslot: newCalendarEventTime
    };
    calendar = JSON.parse(window.localStorage.getItem('calendar'));
    if (calendar === null) {
        calendar = [];
    }
    calendar.push(newCalendarEntry);
    localStorage.setItem("calendar", JSON.stringify(calendar));
    init();
}

// This function deletes the calendar event
function deleteTimeSlot (event) {
    event.preventDefault();
    calendar = JSON.parse(window.localStorage.getItem('calendar'));
    rowIDToBeDeleted = $(event.target).closest("tr").attr("id");
    let foundID = calendar.find(function(calendarEntry) {
        if (calendarEntry.Timeslot === rowIDToBeDeleted) {
            return true;
        }
    });
    let indexPosition = calendar.indexOf(foundID);
    calendar.splice(indexPosition, 1);
    localStorage.setItem("calendar", JSON.stringify(calendar));
    init();
 }

// This function updates the content in the table with saved data

function updateTable () {

}

// This function is what happens when the "clear" button is clicked
function clearTimeSlots (event) {
    debugger;
     event.preventDefault();
     window.localStorage.clear();
 }

//This function is what happens when the "previous day" link is clicked
function previousTimeSlots() {
    //Add code to update table with previous day's locally stored values
    //Add code to change jumbatron sub-heading to show previous date instead of current
    //I ran out of time to do this
}

//This function is what happens when the "current day" link is clicked
function currentTimeSlots() {
    init();
}

//This function is what happens when the "next day" link is clicked
function nextTimeSlots() {
    //Add code to update table with next day's locally stored values
    //Add code to change jumbatron sub-heading to show next date instead of current
    //I ran out of time to do this
}

//This loop creates the table and elements 
function populateTable() {
    for (let hour = 09; hour < 22; hour ++) {
        //creating the variables for the function
        let hourDateVal = moment(displayDate).hour(hour).minute(0);
        let idVal = hourDateVal.format("YYYY-MM-DD HH:[00]");
        let idSaveVal = hour + "save"
        let idDelVal = hour + "delete"
        let idDelVal2 = `${hour}delete`
        //creating the table rows and content
        let newTr = $("<tr>").attr("id", idVal);
        let newTh = $("<th>").attr("scope", "row").attr("class", "align-middle").text(hourDateVal.format("HH:[00]"));
        let newTd1 =$("<td>").attr("class", "event-input-div align-middle");
        let newTd2 = $("<td>").attr("id", idSaveVal);
        let newTextArea
        let saveBtn = $("<button>").attr("type", "button").attr("class", "btn align-middle saveButton")
        let saveIcon = $("<i>").attr("class", "far fa-save fa-2x");
        let newTd3 = $("<td>").attr("id", idDelVal);
        let deleteBtn = $("<button>").attr("type", "button").attr("class", "btn align-middle deleteButton")
        let deleteIcon = $("<i>").attr("class", "fas fa-trash fa-2x");
        //If statement checking for valid time window
        if (hourDateVal.isSame(displayDate, "hour")) {
            newTr.attr("class", "bg-primary")
            newTextArea = $("<textarea>").attr("class", "event-input align-middle")
        }
        else if (hourDateVal.isAfter(displayDate)) {
            newTr.attr("class", "bg-info")
            newTextArea = $("<textarea>").attr("class", "event-input align-middle")
        }
        else {
            newTr.attr("class", "")
            newTextArea = $("<textarea readonly>").attr("class", "event-input align-middle")
        };
        // fill table with any saved values
        let calendarContent = JSON.parse(localStorage.getItem('calendar'));
        for (var i = 0; i < calendarContent.length; i++) {
            if (calendarContent[i].Timeslot == idVal) {
                newTextArea.text(calendarContent[i].Entry)
            }
        }   
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
