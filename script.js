// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
//calls block color function
  blockColor();
//call initial function
  init();
//calls render events function
  renderEvents();
//calls get today function
  getToday();
//event listener for a click on the button
$(".time-block").on("click",".saveBtn",saveButtonClicked)
});

//function to determine the color of the block
function blockColor(){
  //gets the current hour of the day 
  var currentHour=dayjs().$H;
  //selects each time block
    $('.time-block').each(function(){
      //gets the data corresponding to the hour number for each time block
    var dataHour=$(this).data("hour");
    //checks to see if the hour of the time block is greater than the current hour
    if(dataHour>currentHour){
      //adds the class past and removes both of the other options
      $(this).removeClass('future');
      $(this).removeClass('present');
      $(this).addClass('past');
    }
    //checks to see if the hour of the time block is less than the current hour
    else if(dataHour<currentHour){
      //adds the class future and removes the other options
      $(this).addClass('future');
      $(this).removeClass('present');
      $(this).removeClass('past');
    }
    //else for time block is the current hour
    else{
      //add the class present and removes the other options
      $(this).removeClass('future');
      $(this).addClass('present');
      $(this).removeClass('past');
    }
  })
}
//intial function
function init(){
  //pulls stored events and parses them
  var storedEvents=JSON.parse(localStorage.getItem("events"));

  //checks to see if the object is poplated
    if (storedEvents!==null){
      //put the array into the events variable
      events=storedEvents;
    }
    else{
      //if the array is empty create an array of length 9 the has placeholders
      events = new Array(9);
    }
  }
  //function for rendering the events
  function renderEvents(){
    //creates the variable blocks by taking the child element text area from each time block
    blocks=$(".time-block > textarea");
    //a for loop to go through all time blocks
    for (let i = 0; i < 9; i++) {
      //if the index of the array is not empty
      if(events[i]!==null){
        //create a varaible for that index
      var event=events[i];
      //insert that text into the time block
      $(blocks[i]).text(event);
      }
    }
  }
//gets todays day of the week
  function getToday(){
    //uses day.js to get the day of the week and the month and day
    var today=dayjs().format('dddd, MMMM D');
    //inserts that text onto the page
    $('#currentDay').text(today);
  }

  //stores the events in local storage
function storeEvents(){
  //sets the events into a string for storage 
  localStorage.setItem("events",JSON.stringify(events));
}

//called once the save button is clicked
function saveButtonClicked(event){
  //gets the elements that was clicked on
  var element=event.target;
  //finds which block was clicked on
  var index=$(element).parents(".time-block").data("hour");
  //determines if the icon or button was clicked
  var attribute = $(element).attr("class");
  //checks if the icon was clicked on
  if(attribute[0]==='f'){
    //gets the text that was entered
    var eventText=$(element).parent().siblings(".description").val();
  }
  // for when the button is clicked
  else{
    //gets the text that was entered
    var eventText=$(element).siblings(".description").val();
  }
  //puts the entered text into the events array
  events[(index-9)]=eventText;

  //calls the render events and store events functions
  renderEvents();
  storeEvents();

}




