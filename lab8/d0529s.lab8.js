
const rock=document.querySelector(".choice-rock")
const paper=document.querySelector(".choice-paper")
const scissors=document.querySelector(".choice-scissors")
const result=document.querySelector("#result")
const choices=["rock","paper","scissors"];
function getRandomNumber(){
    const number=Math.floor(Math.random()*choices.length);
    return number;
}
rock.addEventListener("click",()=>{
    console.log("You chose rock");
    result.textContent="You chose rock";
    let index=getRandomNumber();
    let computer=choices[index];
    let outcome
    if(computer===choices[0]){
        outcome="Tie"
       
    }else if(computer===choices[1]){
        
         outcome="You Lose :("
    }else{
         outcome="You Win :)"
    }
    result.textContent=`You chose rock. Computer chose ${computer}. ${outcome}`

});
paper.addEventListener("click",()=>{
    console.log("You chose paper");
    result.textContent="You chose paper";
    let index=getRandomNumber();
    let computer=choices[index];
    let outcome
    if(computer===choices[0]){
        outcome="You Win :)"
       
    }else if(computer===choices[1]){
        
         outcome="Tie"
    }else{
         outcome="You Lose :( "
    }
    result.textContent=`You chose paper. Computer chose ${computer}. ${outcome}`

});
scissors.addEventListener("click",()=>{
    console.log("You chose scissors");
    result.textContent="You chose scissors";
    let index=getRandomNumber();
    let computer=choices[index];
    let outcome
    if(computer===choices[0]){
        outcome="You Lose :("
       
    }else if(computer===choices[1]){
        
         outcome="You Win :)"
    }else{
         outcome="Tie "
    }
    result.textContent=`You chose scissors. Computer chose ${computer}. ${outcome}`

});