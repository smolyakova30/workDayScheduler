let currentDay = moment().format("dddd, MMMM Do");
let hour = moment().hours();
let userInput;
let hourSpan;

let nineAm = $("#9am");
let tenAm = $("#10am");
let elevenAm = $("#11am");
let twelvePm = $("#12pm");
let onePm = $("#13pm");
let twoPm = $("#14pm");
let threePm = $("#15pm");
let fourPm = $("#16pm");
let fivePm = $("#17pm");

// Display date on a page
$("#currentDay").text(currentDay);


function storeTasks(){
    var store9 = JSON.parse(localStorage.getItem("9 AM"));
    nineAm.val(store9);
  
    var store10 = JSON.parse(localStorage.getItem("10 AM"))
    tenAm.val(store10);
    
    var store11 = JSON.parse(localStorage.getItem("11 AM"))
    elevenAm.val(store11);
    
    var store12 = JSON.parse(localStorage.getItem("12 PM"))
    twelvePm.val(store12);
    
    var store13 = JSON.parse(localStorage.getItem("1 PM"))
    onePm.val(store13);
    
    var store14 = JSON.parse(localStorage.getItem("2 PM"))
    twoPm.val(store14);
    
    var store15 = JSON.parse(localStorage.getItem("3 PM"))
    threePm.val(store15);
   
    var store16 = JSON.parse(localStorage.getItem("4 PM"))
    fourPm.val(store16);
    
    var store17 = JSON.parse(localStorage.getItem("5 PM"))
    fivePm.val(store17);
}

function colorCoded () {
    
    $(".form-control").each(function () {
        let timeTest = parseInt($(this).attr("id"));
        hour = parseInt(hour);

        if (hour > timeTest) {
            $(this).addClass("past");
        } else if (hour < timeTest) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
  }

$(document).ready(function(){
    storeTasks();
    colorCoded();

// button to save task
$(".saveBtn").on("click", function(){
    userInput = $(this).siblings(".form-control").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));

  })

});

