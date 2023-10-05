# Work Day Scheduler

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     |    
| JavaScrpit | [https://www.w3schools.com/js/default.asp](https://www.w3schools.com/js/default.asp) |
| JQuery | [https://api.jquery.com/](https://api.jquery.com/) |
| Day.js | [https://day.js.org/en/](https://day.js.org/en/) |

## Description

[Visit the Deployed Site]https://jamessahunter.github.io/work-day-scheduler/

The purpose of this project was to create a web page that displays the day and dat as well as the task or events for each hour of the standard working day. For each hour the time block should be color coded as to whether that time has past, is the present time or is in the future. The program should also have the entered events store in local storage so that even if the page is refreshed the events still show up in their respective time blocks. In this project I learned how to implement two 3rd pary application programming interface (API). The main one used was JQuery which is used to simplify the JavaScript code making traversing the document and event handeling easier. The second 3rd party API used was Day.js which was used to return the current date and time. This program used Day.js to tell the current hour which then changed the classes and the subsequent styling of the time blocks. There was also an event listener placed on the save button that would then cause the entered text to be saved into local storage. 

## Usage

The user can enter an event in to the text box and it will be saved into local storage.

![Usage Example](/Work%20Day%20Scheduler.gif)

## Learning Points

Learned about Jquery and Day.js

## Author Info

### James Hunter
* [LinkedIn](https://www.linkedin.com/in/james-hunter123/)
* [Github](https://github.com/jamessahunter)

## Credits

Jerome Chenette for providing the original code
* [Github](https://github.com/jeromechenette)