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



//========= GAMES.JS - WIll be moved to its own .js========//
// initial output from JSON which is transfromed into an array
let output = ""

// array of questions
let my_json = ""

// total questions (questions.length) used for changing questions
let total_questions = ""

//current question - used for changing pages
let current_question = 0

//current score - updated when correct question is answered
let current_score = 0
let correct = false
let previous_question = ""
let correct_answer = ""

// TIMER (appended to html for stop watch)
let second_timer = 0
let minute_timer = 0


$(document).ready(function () {

// actions function to retreive api data
  getPuzzles()
  console.log("ready!")

// checks is jquery is working
  console.log($)

//retrives APIs from http://localhost:3000/api/puzzles/:id
 function getPuzzles(){

//game_id is retreived from the HTML
     output = $.getJSON('/api/puzzles/'+game_id)

//outputs the API request and convers to an array (my_json)
  $.getJSON('/api/puzzles/'+game_id).done((data)=>{
    console.log(data)
    my_json=data
    console.log(my_json)

//appends puzzle data to HTML when API data has been loaded
    update_question()

//determins the total number of questions - sets variable
    total_questions=data.questions.length
  })

}; // end of getPuzzles


// this function updates the Questions & Score when next/back is clicked
function update_question(){

// question is pulled using [current_question] as an index
const check_question = my_json.questions[current_question]

$('#question').text(check_question.question)
$('#solution').text(check_question.solution)
$('#incorrect_a').text(check_question.incorrect_a)
$('#incorrect_b').text(check_question.incorrect_b)
$('#incorrect_c').text(check_question.incorrect_c)
$('#current_score').text(current_score)

// if(current_question === total_questions){
//   $('#submit_quiz').fadeTo(10, 1)
// }

// IF statement that changes the interviewers face depending on the previous answer
if(current_question != 0){
if(correct === true){
$('#animation').attr("src","https://piskel-imgstore-b.appspot.com/img/9a414811-558c-11eb-b96b-3587bbd7da8a.gif")
$('#answer').text('Your previous answer was correct!')
}
else {
  $('#animation').attr("src","https://piskel-imgstore-b.appspot.com/img/dff8dfdc-558c-11eb-b412-3587bbd7da8a.gif")
  $('#answer').text('Your previous answer was incorrect. The answer to the question ' + previous_question + ' was '+ correct_answer)
}

}

//this stores previous question data to be used for feedback
previous_question = check_question.question
correct_answer = check_question.solution
// This will be used to animate the expression of the interviewer depending on whether the previous answer was true/false
}



// next button
$("#next").click(function() {
  console.log('NEXT')

// checks if current page is less than maximum page (last question)
  if(current_question <= total_questions){

//function checks which radio button has been clicked - adds score
    check_radio()

//adds +1 to current question
    current_question++

//runs function to update shown question & score
    update_question()
    console.log(current_question)

  }
})

// //back button
// $("#back" ).click(function() {
//   console.log('back')
// //checks if current page is equal to or less than question 0 (index)
//    if(current_question >= 0){
// //function checks which radio button has been clicked - adds score
//      check_radio()
//      current_question--
//      update_question()
//      console.log(current_question)
//
// }
// })


// SCORE CHECK FUNCTION - FOR MANDAA //
function check_radio() {

// 1. checks if correct radio button has been checked
   if($('#correct').is(':checked')) {

// 2. if correct button has been checked add +100 to scores
  current_score = current_score+100

// changes "correct" variable to true. This will be used to animate a gif if previous answeer is correct or false
  correct = true
  console.log(current_score)
  }

//3. if incorrect button has been clicked minus 30 from the score
  else{
    current_score = current_score-30
      console.log(current_score)
      correct = false
  }
}


// on screen timer
// THIS CODE IS A MESS - need to clean
window.onload = setInterval(function(){


  // if seconds = 59 add to minute variable
  if (second_timer === 59){
    minute_timer = minute_timer+1
    //resent seconds timer
    second_timer = 0
    $('#timer').text("This is a timer - could use?: "+minute_timer+ " : "+second_timer)

  }
  if (second_timer <= 10){
  second_timer = second_timer + 1
  $('#timer').text("This is a timer - could use?: "+minute_timer+ " : 0"+second_timer)
}

  if (second_timer >= 10){
    second_timer = second_timer + 1
    $('#timer').text("This is a timer - could use?: "+minute_timer+ " : "+second_timer)
  }

}, 1000)

//end document.ready
})
