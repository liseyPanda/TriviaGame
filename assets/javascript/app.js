//initiate variables
$(document).ready(function(){
  var questions = [
    {
      question: "This character is from Australia and they are known for having a fascination with blowing stuff up. Who is this?",
      correctAnswer: "Junkrat",
      answer1: "McCree",
      answer2: "Ashe",
      answer3: "Solider:76"
    },
    {
      question: "This character is from South Korea and they are an avid gamer. Who is this character?",
      correctAnswer: "Mei",
      answer1: "D.Va",
      answer2: "Symmetra",
      answer3: "Genji"
    },
  ]
  var q = 0;
  //create timer function for user to see
  //how many seconds they have left for the question
  function timer() {
    var time_left = parseInt($("#timer").html());
    if(time_left != 0){
      $("#timer").html(--time_left);
    }
  }

  console.log(questions[0].question);
  //start game when start button is pressed
  $("#start_game").click(function(){
    game_interval = setInterval(timer, 1000);
    $("#play_window").show();
    $("#start_window").hide();
    game();
  })

  //cycle through Questions, display one per try
  function game(){
    document.getElementById("question").innerHTML = questions[q].question;
    document.getElementById("correct").innerHTML = questions[q].correctAnswer;
    q++;
  }
  //if correct answer congraulate and move to next question
  //if incorrect tell them the correct answer and move to next question
});
