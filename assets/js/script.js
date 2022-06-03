var saveBtn = $(".saveBtn");

// Setting current date, time and year to the header

var CurrentTime = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
$("#currentDay").append(CurrentTime);

//save tasks in local storage so they stay when page is reloaded

//saveBtn.on("click", function () {

   // var time = $(this).siblings(".hour").val();
   // var tasks = $(this).siblings(".tasks").text();

   // localStorage.setItem(time,tasks);
   // tasks.value=localStorage.getItem(time,tasks);
//});


let tasks = document.querySelector(".tasks");

tasks.value= localStorage.getItem("tasks");

tasksEl.addEventListener("keyup", event => {
  localStorage.setItem("tasks", tasks.value);
});


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

  timeTracker();
