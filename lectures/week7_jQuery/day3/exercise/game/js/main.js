/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
// STEP 1
// Make sure none of the code below executes until the DOM is totally loaded
// Your step 1 code here
var checkAnswer, writeQuestion, correctAnswer,
    questions = [{
        question: "What is the longest river in the world is called?",
        answers: ["Nile", "Amazon", "Thames"],
        correctAnswer: "Nile"
    }, {
        question: "What is the highest mountain in the world called?",
        answers: ["Everest", "Mount Blanc", "Snowden"],
        correctAnswer: "Everest"
    }, {
        question: "The longest road in the world is approximately how long?",
        answers: ["20000km", "2000km", "8000km"],
        correctAnswer: "8000km"
    }, {
        question: "Which country grows the most coffee",
        answers: ["Sweden", "Brazil", "France"],
        correctAnswer: "Brazil"
    }, {
        question: "Which sea or ocean does the river Jordan run into?",
        answers: ["Pacific", "Atlantic", "Dead Sea"],
        correctAnswer: "Atlantic"
    }],
    currentQuestionIndex = 0;
// STEP 2
// In h1 there is a span with id questionCount
// use jquery to set it's contents to be the same as the number of questions in our array
// Your step 2 code here
writeQuestion = function () {
    // STEP 3
    // In h1 there is a span with id questionNumber
    // use jquery to set it's contents to be the same as the number of the currentQuestionIndex
    // Your step 3 code here
    // STEP 4
    // We have a main div with an id of questionText
    // Populate it with the question property for the current question using currentQuestionIndex to get the correct question from the array
    // Your step 4 code here
    // STEP 5
    // Use jQuery to set the text of buttons A, B and C to be the value of the three different answers in
    // the answer array for the current question
    // Your step 5 code here
    // STEP 6
    // Set the global variable correctAnswer to be the current questions correctAnswer
    // Your step 6 code here
};
checkAnswer = function (selectedAnswer) {
    var moveToNextQuestion = function () {
        // Step 9
        // Increase the currentQuestionIndex by 1
        // Your step 9 code here
        // Step 10 
        // Write an if statement to check that the currentQuestionIndex is less than the number of questions
        // if it is less run the writeQuestion function to display a new question
        // Otherwise display the result div for 3 seconds 
        // and reset the game by setting currentQuestionIndex to 0
        // and running the writeQuestion again
        // Your step 10 code here
    };
    alert(selectedAnswer);
    // Step 8
    // Use an if statement to see if the selectedAnswer is the correctAnswer
    // If it is the correct answer show the correctAnswer div
    // use a javascript setTimeout to hide the correctAnswer div after 1 second = 1000ms
    // and then run the moveToNextQuestion function
    // Otherwise show the wrongAnswer div hide it using the above technique
    // and then run the moveToNextQuestion function
    // Your step 8 code here
};
writeQuestion();
//STEP 7
// Connect click functions to buttons a, b and c
// Write code so when you click on button A we call the checkAnswer function passing in the text of the button
// Repeat for the other 2 buttons passing the text of the button to check Answer
// Your step 7 code here
// STEP 11
// Can you adjust your code so you keep track of the score?
// Can you display the score at the end of the game?