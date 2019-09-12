var TargetScore = 0
var YourScore = 0
var WinCount = 0
var LossCount = 0
var CrystalObject= {
    blueCrystal:{
        value: 0,
        img: "../images/"
    },
    
}

function StartGame(){
    TargetScore = Math.floor((Math.random() * 120) + 19);
    CrystalObject.blueCrystal.value = Math.floor((Math.random() * 12) + 1)
    $("#TargetScore").text(TargetScore)
} 

//need a on click event for the crystals we click
$("#crystal").on("click", function(){
    console.log("clicked")
})
StartGame();