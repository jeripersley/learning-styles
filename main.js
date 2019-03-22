
/*$(document).ready(function() {
  // when the new game button is clicked
  $("#start-button").click(function() {
      // start the game and re-render
      startGame();
      render();
  });


//function render() 
  if (model.gameHasStarted == click) {
    $("#game").hide();
      return

//function startassessment() {
  

}*/

// function to calculate the result of the survey
function tabulateAnswers() {
    // initialize variables for each choice's score
    
    var c1score = 0;
    var c2score = 0;
    var c3score = 0;
        
    // get a list of the radio inputs on the page
    var choices = document.getElementsByTagName('input');
    // loop through all the radio inputs
    for (i=0; i<choices.length; i++) {
      // if the radio is checked..
      if (choices[i].checked) {
        // add 1 to that choice's score
        if (choices[i].value == 'c1') {
          c1score = c1score + 1;
        }
        if (choices[i].value == 'c2') {
          c2score = c2score + 1;
        }
        if (choices[i].value == 'c3') {
          c3score = c3score + 1;
        }
      }
    }
    
    // Find out which choice got the highest score.
  
    var maxscore = Math.max(c1score,c2score,c3score);
    
    // Display answer corresponding to that choice
    var resultsbox = document.getElementById('results');
    if (c1score == maxscore) { // If user chooses the first choice the most, this outcome will be displayed.
      resultsbox.innerHTML = "You are a computer researcher! You will enjoy developing algorithms, and doing things with computers no one else has done before. For example, researchers sent a robot to the moon, built a computer to beat the best humans in Jeopardy, and are creating robots to do your chores for you. Computer researchers typically go to college and work at universities, or as a part of the research and development team in companies.";
    }
    if (c2score == maxscore) { // If user chooses the second choice the most, this outcome will be displayed.
      resultsbox.innerHTML = "You are an altruistic coder! You love to help people and feel the positive impact of your work every day. Altrustic coders are out there every day making the world a better place. Computer scientists write software to more effectively help doctors diagnose illnesses such as cancer, connect people in third world countries to education and medical resources on the internet, code websites and software for nonprofit organizations, and much more!";
    }
    if (c3score == maxscore) { // If user chooses the third choice the most, this outcome will be displayed.
      resultsbox.innerHTML = "You are a developer! Developers create games, apps, social media, movies, and all sorts of fun programs that people enjoy. These coders work on projects such as Minecraft, Poptropica, and Youtube. Developers need sharp coding skills, are great debuggers, and need to work well in a team of other developers.";
    }
 
  }
  
  // program the reset button
  function resetAnswer() {
    var resultsbox = document.getElementById('results');
    resultsbox.innerHTML = "Here is your Learning Style";
  }
  
    