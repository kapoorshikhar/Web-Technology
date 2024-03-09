let num =78;
let ans= prompt("Please answer the weather ' You ' want to play the ' Game of Guessing ' answer 'Y/N' ");
if (ans=='y'||ans=='Y'||ans=='yes'||ans=='Yes'||ans=='YES'){
    let num1_= prompt("Guess the Number : ") 
    while (num1_ != 78  ){
       num1_= prompt("'You Guessed wrong the Number pLease try again : ")
    }
    if(num1_==78){
        alert("You won the Game")
      
    }    
}
else {
    alert("Thank You for....")
}
