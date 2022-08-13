console.log("Welcome to Tic Tac Toe");
 let bgMusic = new Audio("bgm.mp3");
 let ting = new Audio("ting.mp3");
 let gameOver = new Audio("game over.wav");
let isgameover = false;


let turn = "X";

//Function to change the turn
const changeTurn = ()=>{
    if(turn==="X"){
        return "0";
    }else{
        return "X";
    }
};

//Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText ) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText ) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "250px";
            gameOver.play();
        }
    })


  

};


//Game Logic 
//bgMusic.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", ()=> { 
        if(boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkWin();
            if(!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }

    } )
} )

//adding function to reset button
reset.addEventListener("click", ()=>{
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element =>{ 
        element.innerText = "";
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "0";
})