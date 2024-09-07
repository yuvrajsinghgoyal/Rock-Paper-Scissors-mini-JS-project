//Colors Taken from coolors.com by Yuvraj Goyal
let userScore=0;
let compScore=0;
const choices=document.querySelectorAll('.choice');
const msg =document.querySelector('#msg')
const userScorePara =document.querySelector('#user-score')
const compScorePara =document.querySelector('#comp-score')

//genrating a function for a computer to choose and play the game 
const genCompChoice=()=>{
    const options=['rock','paper','scissors','rock','paper','scissors','rock','paper','scissors']
    const randomIndx=Math.floor(Math.random()*9);
    return options[randomIndx]

}
// end the comments
const drawGame=()=>{
    console.log("Game was draw")
    msg.innerText="Draw"
    msg.style.backgroundColor="#3e1f47"
}

const showWinner=(userWin)=>{
    if(userWin){
        userScore++
        userScorePara.innerText=userScore
        console.log("You win")
        msg.innerText="You Win"
        msg.style.backgroundColor="#52b788"
    }else{
        compScore++
        compScorePara.innerText=compScore
        console.log("You lost")
        msg.innerText="You Lost"
        msg.style.backgroundColor="#e5989b"
    }
}

const playGame=(userChoice)=>{
    console.log('userChoice is ',userChoice)
//after that genrate comp choice
    const comChoice=genCompChoice()
    console.log('Computer choice = ',comChoice)

    if(userChoice===comChoice){
        //draw
        drawGame()
    
    }else{
        let userWin=true;
        if(userChoice==='rock'){
            userWin=comChoice==='paper'?false :true
        }else if(userChoice==="paper"){
            userWin=comChoice==='scissors'?false:true
        }else{
            userWin=comChoice==='rock'?false:true;
        }
        showWinner(userWin)
    }
}



choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice)
    });
});