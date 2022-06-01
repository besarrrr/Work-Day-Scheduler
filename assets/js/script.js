
// Setting current date, time and year to the header

var CurrentTime = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
$("#currentDay").append(CurrentTime);
console.log(CurrentTime);

