var numberOfButtons=document.querySelectorAll("button").length;
var audioCrash=new Audio("sounds/crash.mp3");
var audioKick=new Audio("sounds/kick-bass.mp3");
var audioSnare=new Audio("sounds/snare.mp3");
var audioTom1=new Audio("sounds/tom-1.mp3");
var audioTom2=new Audio("sounds/tom-2.mp3");
var audioTom3=new Audio("sounds/tom-3.mp3");
var audioTom4=new Audio("sounds/tom-4.mp3");
for(var i=0;i<numberOfButtons;i++){

    //checking for button clicked
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttonPressed=this.innerHTML;
        playSound(buttonPressed);
        buttonAnimation(buttonPressed);
    });

}

//checking for button clicked
document.addEventListener("keydown",function(event){
        playSound(event.key);
        buttonAnimation(event.key);
});

function playSound(buttonPressed){

    switch(buttonPressed){
        case "w":
            audioCrash.play();
            break;
        case "a":
            audioKick.play();
            break;
        case "s":     
            audioSnare.play();
            break;
        case "d":
            audioTom1.play();
            break;
        case "j":
            audioTom2.play();
            break;
        case "k":
            audioTom3.play();
            break;
        case "l":
            audioTom4.play();
            break;
    }    

}
function buttonAnimation(key){
    var activeButton=document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
