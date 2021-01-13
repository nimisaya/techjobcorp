// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require_tree .
//= require jquery3
//= require jquery_ujs
//= require_tree .

let output = ""
let my_json = ""


$(document).ready(function () {

  getSearchResults()
  console.log("ready!")

console.log($)
 // output = ($.getJSON.done('/api/puzzles/'+game_id))
 // my_json = output.responseJSON


 function getSearchResults(){
   $.getJSON('/api/puzzles/'+game_id).done( displaySearchResults ).fail( console.warn );

 }; // getSearchResults()


function displaySearchResults(){
  console.log('displaySearchResults')
  output = ($.getJSON.done('/api/puzzles/'+game_id))
  my_json = output.responseJSON
}

})








let current_question = 0
let total_questions = my_json.length

function update_question(){
const check_question = my_json.questions[current_question]

$('#question').text(check_question.question)
$('#solution').text(check_question.solution)
$('#incorrect_a').text(check_question.incorrect_a)
$('#incorrect_b').text(check_question.incorrect_b)
$('#incorrect_c').text(check_question.incorrect_c)
}



$("#next").click(function() {
  console.log('NEXT')
  if(current_question <= total_questions){
    current_question++
    update_question()
  }
})

$("#back" ).click(function() {
  console.log('back')
   if(current_question >= 0){
     current_question--
     update_question()

}
})
