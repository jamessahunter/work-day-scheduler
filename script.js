//event listener on button
//save to local storage 
//check time change classes
//get current time
//use jquery
//call jquery in html


// var storedinitials=JSON.parse(localStorage.getItem("initials"));
// localStorage.setItem("initials",JSON.stringify(initials));
// var initial=initials[i];

function init(){

var storedEvents=JSON.parse(localStorage.getItem("events"));
  if (storedEvents!==null){
    events=storedEvents;
  }
  else{
    events = new Array(9);
  }
}

// if (storedScores !==null){
//   scores=storedScores;
//   initials=storedinitials
// }  

// initialsText = initialsInput.value;

// initials.push(initialsText);




// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  init();

  renderEvents();
  // var advancedFormat = require('dayjs/plugin/advancedFormat')
  // dayjs.extend(advancedFormat)

  var today=dayjs().format('dddd, MMMM D');
  $('#currentDay').text(today);


$(".time-block").on("click",".saveBtn",function(event){
  var element=event.target;

  var index=$(element).parents(".time-block").data("hour");
  var attribute = $(element).attr("class");
  console.log(attribute);
if(attribute[0]==='f'){
  var eventText=$(element).parent().siblings(".description").val();
}
else{
  var eventText=$(element).siblings(".description").val();
}

  // console.log(index);
  // console.log($(element).parent());


  // console.log($(element).siblings(".description"));

  // console.log(events);
  events[(index-9)]=eventText;
  // console.log(events);
  renderEvents();
  storeEvents(events);
})


function storeEvents(events){
  localStorage.setItem("events",JSON.stringify(events));
  // console.log(events);

}

function renderEvents(){

  blocks=$(".time-block > textarea");
  // console.log(events);
  for (let i = 0; i < 9; i++) {
    if(events[i]!==null){
    var event=events[i];
    // console.log("worls");
    $(blocks[i]).text(event);
    }
  }
}


blockColor();



});

function blockColor(){
  var currentHour=dayjs().$H;
  $('#hour-9,#hour-10,#hour-11,#hour-12,#hour-13,#hour-14,#hour-15,#hour-16,#hour-17').each(function(){
    var dataHour=$(this).data("hour");
    if(dataHour>currentHour){
      $(this).removeClass('future');
      $(this).removeClass('present');
      $(this).addClass('past');
    }
    else if(dataHour<currentHour){
      $(this).addClass('future');
      $(this).removeClass('present');
      $(this).removeClass('past');
    }
    else{
      $(this).removeClass('future');
      $(this).addClass('present');
      $(this).removeClass('past');
    }
  })
}

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
