let rock = document.querySelector('.rock');
let paper = document.querySelector('.Paper');
let scissor = document.querySelector('.Scissor');

let user_move;
let comp_move;

let userele  = document.querySelector('.move');

let user_score = document.querySelector('.user1')
let comp_score = document.querySelector('.user2')

let us=0,cs=0;

function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}
const mySound = new Audio('win.mp3');
const loose = new Audio('loose.mp3');

function playGame(){
    comp_move = getRandomInt(-1,1);
    console.log(user_move)
    console.log(comp_move)
    if(user_move==1 && comp_move==0){
        userele.innerText = "You loose"
          userele.style.color  = "red"
        loose.play();
        cs++;
    }
    else if(user_move==-1 && comp_move==1)
        {
            userele.innerText = "You loose 🥈"
              userele.style.color  = "red"
            loose.play();
            cs++;
        }
    else if(user_move==0 && comp_move==-1)
            {
                userele.innerText = "You loose"
                  userele.style.color  = "red"
                loose.play();
        cs++;
    }
    else if(user_move==comp_move)
    {
         userele.innerText = "Draw"
         userele.style.color  = "yellow"


    }
    
    else{
         userele.innerText = "You won 🥇"
           userele.style.color  = "green"
         mySound.play();
        us++;
    } 
    comp_score.innerText = `Your Score : ${cs}`
    user_score.innerText = `Your Score : ${us}`

}

rock.addEventListener('click',()=>{
   
    user_move = 1;
    playGame();
})
paper.addEventListener('click',()=>{
   user_move = 0;
    playGame();
})
scissor.addEventListener('click',()=>{
    user_move = -1;
    playGame();
})





