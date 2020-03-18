$(document).ready(function() {
    
});


$(document).ready(function() {
  $("tr:odd").addClass("odd");
  $("tr:even").addClass("even");
});

https://jqueryui.com/
https://api.jquery.com/category/events/
https://api.jquery.com/category/effects/

$("p").click(function(){ // When I click on <p> run this code });

$("p").click(function(){ 
  $("p").css('color', 'red');
})
$("h2").hover(function(){
  $("h2").css('background', 'lightblue');
})
$(".card-panel").mouseenter(function(){
  $("body").css('background-color', 'black')
})
$(".card-panel").mouseleave(function(){
  $("body").css('background-color', '#e1e2e2')
})

Multi-line comments start with /* and end with */ . Any text between /* and */ will be ignored by JavaScript.

$("#card-panel-3").click(function(){ 
  $("#card-panel-3").hide('fast');
})
$("#card-panel-4").click(function(){ 
  $("#card-panel-4").hide(3000);
})

$("#myButton").removeClass("border").addClass("blueBox");