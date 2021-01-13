// console.log('hello from game.js ')
//
//
//
//
//
// // $(document).ready(function () {
// // function fetchPuzzle() {
// // $('#update_me').load('/api/puzzles/'+game_id);
// // }
// // // var my_json = $.getJSON('/api/puzzles/'+game_id);
// // // var my_json = my_json.responseText
// // // var my_json = JSON.parse(my_json)
// //
// // fetchPuzzle()
// // })
//
// // $(document).ready(function () {
// // const output = ($.getJSON('/api/puzzles/'+game_id))
// // console.log(output)
// // var my_json = output.responseJSON
//
// // var my_json = JSON.parse(my_json)
// // console.log(my_json)
//
// console.log($)
// const output = ($.getJSON('/api/puzzles/'+game_id))
// var my_json = output.responseJSON
//
// let current_question = 0
// let total_questions = my_json.length
//
// function update_question(){
// const check_question = my_json.questions[current_question]
//
// $('#question').text(check_question.question)
// $('#solution').text(check_question.solution)
// $('#incorrect_a').text(check_question.incorrect_a)
// $('#incorrect_b').text(check_question.incorrect_b)
// $('#incorrect_c').text(check_question.incorrect_c)
// }
//
//
// $(document).ready(function () {
//
// $("#next").click(function() {
//   console.log('NEXT')
//   if(current_question <= total_questions){
//     current_question++
//     update_question()
//   }
// })
//
// $("#back" ).click(function() {
//   console.log('back')
//    if(current_question >= 0){
//      current_question--
//      update_question()
//
// }
// })
//
//
// })
