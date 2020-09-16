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

    //This is the global current date/time variable
    let displayDate;
    //These are variables for the buttons
    let currentBtnEl = $("#currentBtn")[0];
    let previousBtnEl = $("#previousBtn")[0];
    let nextBtnEl = $("#nextBtn")[0];
    let clearBtnEl = $("#clearBtn")[0];


$(document).ready(function() {
    //init();
    //This is where all the functions should be called
    setCurrentDateTime();
    setJumbatron();
    populateTable();

    //Event listeners
    $("tr").click(handleClick);

});

// This function sets the current date/time
function setCurrentDateTime() {
    var now = moment();
    displayDate = now.clone();
    setInterval(setCurrentDateTime, 1000);
};

//This function updates the day/time on the jumabatron
function setJumbatron() {
    var jumbatronDate = displayDate.format("dddd Do MMMM YYYY, HH:mm");
    $('#displayDateTime').html(jumbatronDate);
    setInterval(setCurrentDateTime, 1000);
}

// This function is what happens when the "save" button is clicked
function handleClick (event) {
    let jqueryEvent = $(event.target);
    if (jqueryEvent.hasClass("fa-save")) {
        saveTimeSlot(event);
    }
    else if (jqueryEvent.hasClass("fa-trash")) {
        deleteTimeSlot(event);
    }
};

// This function is what happens when the "delete" button is clicked
// function deleteTimeSlot (event) {
//     event.preventDefault();
//     localStorage.removeItem(//reference to specific row here)
//     //specific row.textContent = "";
// }

// // This function is what happens when the "clear" button is clicked
// function clearTimeSlots (event) {
//     event.preventDefault();
//     localStorage.clear();
// }

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
    for (let hour = 09; hour < 22; hour ++) {
        //creating the variables for the function
        let hourDateVal = moment(displayDate).hour(hour).minute(0);
        let idVal = hourDateVal.format("YYYY-MM-DD HH:[00]");
        let idSaveVal = hour + "save"
        let idDelVal = hour + "delete"
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
        };
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

