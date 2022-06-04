# Work-Day-Scheduler

The task is to take existing code and refactor it to make a working day time planner. The code received had functional CSS and HTML but lacked Javascript to make it interactive. The code received led to a website that had a general outline of a planner but did not have the ability to add text, save text, or mark the correct time and date. It also did not have various class tags to make the most of the third party APIs used in the code. 


## Acceptance Criteria

GIVEN I am using a daily planner to create a schedule<br>
WHEN I open the planner<br>
THEN the current day is displayed at the top of the calendar<br>
WHEN I scroll down<br>
THEN I am presented with time blocks for standard business hours<br>
WHEN I view the time blocks for that day<br>
THEN each time block is color-coded to indicate whether it is in the past, present, or future<br>
WHEN I click into a time block<br>
THEN I can enter an event<br>
WHEN I click the save button for that time block<br>
THEN the text for that event is saved in local storage<br>
WHEN I refresh the page<br>
THEN the saved events persist


## Work Done

* Used JQuery and Bootstrap API to add functionality and design

* Saved text input via local storage and then used the values saved to re-upload on page refresh. This was done by giving each text input box an individual ID and saving the text by that ID in local storage

* Depending on time, made it so that the planner showed what was past, present, and upcoming. Assigned gray for past, red for present, and green for upcoming. 



## Deployed Site

https://besarrrr.github.io/Work-Day-Scheduler/


## Github Repository

https://github.com/besarrrr/Work-Day-Scheduler

## Website Image

![Sample image](./assets/images/Screenshot%202022-06-04%20121900.png)







