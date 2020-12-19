let tic1 = document.getElementById("tic1");
let tic2 = document.getElementById("tic2");
let tic3 = document.getElementById("tic3");
let tic4 = document.getElementById("tic4");
let tic5 = document.getElementById("tic5");
let tic6 = document.getElementById("tic6");
let tic7 = document.getElementById("tic7");
let tic8 = document.getElementById("tic8");
let tic9 = document.getElementById("tic9");
let td = document.querySelectorAll("td");

function playerOne(){
    const playerOne = prompt("Please enter a name for Player One(X)", "");
    if (playerOne != null) {
    $("#playerX").text(playerOne + '(X)')
    
    }
}
playerOne()

function playerTwo(){
    const playerTwo = prompt("Please enter a name for Player Two(O)", "");
    if (playerTwo != null) {
    $("#playerO").text(playerTwo + '(O)')
    
    }
}
playerTwo()

ticTacToe();

let count = 1;
let gameEnd = false;

function ticTacToe() {
    for (let i = 0; i < td.length; i++) {
        td[i].addEventListener("click", function (a) {
            if (gameEnd === false) {
                if (td[i].querySelector("span").innerHTML === "") {
                    playerTurn(i);
                    winCondition();
                    if (count !== 9) {
                        count++;
                    } else if (count === 9 && gameEnd === false) {
                        gameEnd = true;
                        alert("Tie!")

                    };
                }
            } else {
                gameEnd = false;
                count = 1;
            }
        });
    }
}

function playerTurn(i) { 
    if (count % 2 === 0) {
        td[i].querySelector("span").innerHTML = "O";
    } else {
        td[i].querySelector("span").innerHTML = "X";
    }
}

function winCondition() {
    let tic1 = document.getElementById("tic1");
    let tic2 = document.getElementById("tic2");
    let tic3 = document.getElementById("tic3");
    let tic4 = document.getElementById("tic4");
    let tic5 = document.getElementById("tic5");
    let tic6 = document.getElementById("tic6");
    let tic7 = document.getElementById("tic7");
    let tic8 = document.getElementById("tic8");
    let tic9 = document.getElementById("tic9");

    if (winCheck(tic1, tic2, tic3)) {
        alert(tic1.innerText + " wins!")
        gameEnd = true
    }
    else if (winCheck(tic4, tic5, tic6)) {
        gameEnd = true
        alert(tic4.innerText + " wins!")
    }
    else if (winCheck(tic7, tic8, tic9)) {
        gameEnd = true
        alert(tic7.innerText + " wins!")
    }
    else if (winCheck(tic1, tic4, tic7)) {
        gameEnd = true
        alert(tic1.innerText + " wins!")
    }
    else if (winCheck(tic2, tic5, tic8)) {
        gameEnd = true
        alert(tic2.innerText + " wins!")
    }
    else if (winCheck(tic3, tic6, tic9)) {
        gameEnd = true
        alert(tic3.innerText + " wins!")
    }
    else if (winCheck(tic1, tic5, tic9)) {
        gameEnd = true
        alert(tic1.innerText + " wins!")
    }
    else if (winCheck(tic3, tic5, tic7)) {
        gameEnd = true
        alert(tic3.innerText + " wins!")
    }  else{
        return false;
    }
}

function winCheck(tic1, tic2, tic3) {
    if (tic1.innerText === tic2.innerText && tic1.innerText === tic3.innerText && tic1.innerText){
        return tic1.innerText === tic2.innerText && tic1.innerText === tic3.innerText && tic1.innerText;
    }
}

$('.resetButton').click(function () {
    $('span').text("")
})
