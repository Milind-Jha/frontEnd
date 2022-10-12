var firstPlayerChance = true;

function startGame(){
    document.getElementById("play").innerText="Game Started";   
}

function rollDicePlayer1(){
    if(firstPlayerChance && !checkVictory()){
        var total = 0;
        var result = (Math.floor(Math.random()*6))+1;
        console.log(result);
        var result2 = Math.floor(Math.random()*6)+1;
        console.log(result2);
        var diceImage  = "images/"+"dice"+result+".png";
        var diceImage2 = "images/"+"dice"+result2+".png";
        var image1 = document.querySelectorAll("img")[0];
        var image2 = document.querySelectorAll("img")[1];
        image1.setAttribute("src",diceImage);
        image2.setAttribute("src",diceImage2);
        var pastScore1 = document.getElementById("score1").innerText; 
        document.getElementById("score1").innerText = result + result2 + Number(pastScore1);
        if(result===result2){
            alert("Well Done! You get another move.")
        }
        else
            firstPlayerChance = false;
    }
    else if(!firstPlayerChance)
        alert("Player2 to move");
    else
        alert("Game Over");
    if(checkVictory())
        alert("Game Over");
}

function rollDicePlayer2(){
    if(!firstPlayerChance && !checkVictory()){
        var total = 0;
        var result = (Math.floor(Math.random()*6))+1;
        console.log(result);
        var result2 = Math.floor(Math.random()*6)+1;
        console.log(result2);
        var diceImage  = "images/"+"dice"+result+".png";
        var diceImage2 = "images/"+"dice"+result2+".png";
        var image1 = document.querySelectorAll("img")[0];
        var image2 = document.querySelectorAll("img")[1];
        image1.setAttribute("src",diceImage);
        image2.setAttribute("src",diceImage2);
        var pastScore1 = document.getElementById("score2").innerText; 
        document.getElementById("score2").innerText = result + result2 + Number(pastScore1);
        if(result===result2)
            alert("Well Done! You get another move.")
        else
            firstPlayerChance=true;
    }
    else if(firstPlayerChance)
        alert("Player1 to move");
    else
        alert("Game Over");
    if(checkVictory())
        alert("Game Over");
}
function checkVictory(){
    if(document.getElementById("score1").innerText>=100){
        alert("Player 1 wins");
        return true;
    }   
    else if(document.getElementById("score2").innerText>=100){
        alert("Player 2 wins");
        return true;
    }
    return false;
}
