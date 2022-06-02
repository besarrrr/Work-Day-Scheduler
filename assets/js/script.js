let tasks = document.querySelector(".tasks");

// Setting current date, time and year to the header

var CurrentTime = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
$("#currentDay").append(CurrentTime);
console.log(CurrentTime);


//save tasks in local storage so they stay when page is reloaded

tasks.value= localStorage.getItem("tasks");

tasks.addEventListener("keyup", event => {
    localStorage.setItem("tasks", tasks.value);
});

