//event listener on button
//save to local storage 
//check time change classes
//get current time
//use jquery
//call jquery in html



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  var today=dayjs().format('dddd, MMMM DD');
  $('#currentDay').text(today);

  console.log(dayjs().$H);

console.log($("#hour-9").data("hour"));


$(".saveBtn").on("click",function(event){
  var element=event.target;
  console.log($(element).parents());
})

blockColor();


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


