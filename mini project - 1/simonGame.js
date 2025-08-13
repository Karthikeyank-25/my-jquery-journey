var buttonColours = ["red","blue","green","yellow"];
var userClickedPattern = [];
var gamePattern = [];
var randomChosenColour;
var level = 0 ;
var started = false;
function nextSequence(){
    $("#level-title").text("Level 0");
    userClickedPattern = [];
    level ++;
    $("#level-title").text("Level "+level);
    var randomNumber = Math.floor(Math.random()*buttonColours.length);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeIn(300).fadeOut(300).fadeIn(300);
     var Sound = new Audio("sounds/"+randomChosenColour+".mp3");
    Sound.play();

}
$(".btn").click(function (){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
})
function animatePress(currenColour){
    $("#"+currenColour).addClass("pressed");
    setTimeout(function (){
        $("#"+currenColour).removeClass("pressed")
    },200)
}
function playSound(name){
    var audioFile = new Audio ("sounds/"+name+".mp3");
    audioFile.play();
}
$(document).keypress(function(){
    if(!started){
        nextSequence();
        started=true;}
})
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("Success");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function (){
                nextSequence();
            },400)
        }
    }
    else{
        console.log("Wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
        $("body").removeClass("game-over");
        },200)
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}
function startOver(){
        level = 0;
        gamePattern = [];
        started = false;

}