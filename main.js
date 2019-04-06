/*
$(document).ready(function() {
      resetRadio();
  });*/

// initialize variables for each choice's score
    
var a1score = 0;
var a2score = 0;
var a3score = 0;

var k1score = 0;
var k2score = 0;
var k3score = 0;

var v1score = 0;
var v2score = 0;
var v3score = 0;


// function to calculate the result of the survey
function tabulateAnswers() {
    
    // get a list of the radio inputs on the page
    var choicesA = document.getElementsByTagName('input');
    // loop through all the radio inputs
    for (i=0; i<choicesA.length; i++) {
      // if the radio is checked..
      if (choicesA[i].checked) {
        // add 1 to that choice's score
        if (choicesA[i].value == 'a1') {
          a1score = a1score + 1;
        }
        if (choicesA[i].value == 'a2') {
          a2score = a2score + 1;
        }
        if (choicesA[i].value == 'a3') {
          a3score = a3score + 1;
        }
      } 
    }

    var choicesK = document.getElementsByTagName('input');
    for (i=0; i<choicesK.length; i++) {
      // if the radio is checked..
      if (choicesK[i].checked) {
        // add 1 to that choice's score
        if (choicesK[i].value == 'k1') {
          k1score = k1score + 1;
        }
        if (choicesK[i].value == 'k2') {
          k2score = k2score + 1;
        }
        if (choicesK[i].value == 'k3') {
          k3score = k3score + 1;
        }
      } 
    }

    var choicesV = document.getElementsByTagName('input');
    for (i=0; i<choicesV.length; i++) {
      // if the radio is checked..
      if (choicesV[i].checked) {
        // add 1 to that choice's score
        if (choicesV[i].value == 'v1') {
          v1score = v1score + 1;
        }
        if (choicesV[i].value == 'v2') {
          v2score = v2score + 1;
        }
        if (choicesV[i].value == 'v3') {
          v3score = v3score + 1;
        }
      }
    } 
  }       
         
    // Find out which choice got the highest score for Auditory.
  
    //var maxscoreA = Math.max(a1score,a2score,a3score);

     // Find out which choice got the highest score for Kinesthetic.
  
    //var maxscoreK = Math.max(k1score,k2score,k3score);

    // Find out which choice got the highest score for Visual.
  
    //var maxscoreV = Math.max(v1score,v2score,v3score);



    // Determine highest of the 3 types
    var overallmax = Math.max(a1score, k1score, v1score);

    // Display answer corresponding to that choice
    var resultsbox = document.getElementById('results');
      if (a1score == overallmax) { // If user chooses the first choice the most, this outcome will be displayed.
        resultsbox.innerHTML = "You are an Auditory Learner! You will enjoy developing algorithms, and doing things with computers no one else has done before. For example, researchers sent a robot to the moon, built a computer to beat the best humans in Jeopardy, and are creating robots to do your chores for you.";
      }
      if (k1score == overallmax) { // If user chooses the second choice the most, this outcome will be displayed.
        resultsbox.innerHTML = "You are a Kinesthetic/Tactile Learner! You love to help people and feel the positive impact of your work every day. Altrustic coders are out there every day making the world a better place.";
      }
      if (v1score == overallmax) { // If user chooses the third choice the most, this outcome will be displayed.
        resultsbox.innerHTML = "You are a Visual Learner! Developers create games, apps, social media, movies, and all sorts of fun programs that people enjoy. These coders work on projects such as Minecraft, Poptropica, and Youtube.";
      }
      
  

// reset page
/*function resetRadio() {
  
  radio();
  clearSubmit();
}


      // clears radio buttons
function radio() {
  var radioButtonArray = document.getElementsByTagName('input');

    for (var i=0; i<radioButtonArray.length; i++)   {
      var radioButton = radioButtonArray[i];
      radioButton.checked = false;
    }
}
    
    // clears results paragraph
function clearSubmit() {
  document.getElementById('results').innerHTML = "";
}

*/
