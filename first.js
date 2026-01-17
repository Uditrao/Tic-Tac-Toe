let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGameBtn=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");



let turnO=true;

const winpat=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const showWinner=(winner)=>{
    msg.innerText=`Winner is, ${winner}`;
    msg.classList.add("winning-message");
    msgcontainer.classList.remove("hide");
}

let gameOver=false;

const disableBoxes=()=>{
    gameOver=true;
}

const endisableBoxes=()=>{
    gameOver=false;
}

const checkWin=()=>{
    for(let pat of winpat){
        let pos1val=boxes[pat[0]].innerText;
        let pos2val=boxes[pat[1]].innerText;
        let pos3val=boxes[pat[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                disableBoxes();
                showWinner(pos1val);
            }
        }
        
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (gameOver==true || box.innerText !== ""){
            return;
        }
        if(turnO===true){
            box.innerText="O"
            box.style.color="green";
            turnO=false;
        }
        else{
            box.innerText="X";
            box.style.color="#d65a3e";
            turnO=true;
        }
        checkWin();
    })
})

reset.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
    });
    turnO=true;
    endisableBoxes();
    msg.classList.remove("winning-message");
    msgcontainer.classList.add("hide");
})

newGameBtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
    });
    turnO=true;
    endisableBoxes();
    msg.classList.remove("winning-message");
    msgcontainer.classList.add("hide");
})

