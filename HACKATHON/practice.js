let gamenum=25;
let usernum=prompt("Guess the gamenum");
while(usernum!=gamenum){
    usernum=prompt("you entered the wrong number....enter again: ");
}
console.log("Congrats, You guessed the correct number");