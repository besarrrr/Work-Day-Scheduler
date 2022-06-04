// Setting current date, time and year to the header

var CurrentTime = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
$("#currentDay").append(CurrentTime);


//save tasks in local storage so they stay when page is reloaded


var saveBtn = $(".saveBtn");

saveBtn.on("click", function () {

        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
})

//sets color blocks for past, present, and future

function timeTracker() {
    
   var time = moment().hour();

   $(".time-block").each(function() {
    var plannerHour = parseInt($(this).attr("id"));

    //new classes depending on the time it is
    if (plannerHour > time) {
        $(this).addClass("future");
    } else if (plannerHour === time) {
        $(this).addClass("present");
    } else {
        $(this).addClass("past");
    }
    });

  };

  $("#8 .description").val(localStorage.getItem("8"));
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));

  timeTracker();
