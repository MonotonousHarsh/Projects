let randomNumber = parseInt(Math.random()*100 + 1);
let Userinput = document.querySelector(".guessField");
let submit = document.querySelector("#subt");
let prevGuess = document.querySelector(".guesses");
let remainGuess = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrhigh");
let startOver = document.querySelector('.resultParas')
let p = document.createElement('p');
        
      let playGame = true;
       let previousguesses =[];
let numGuess = 1;

    if(playGame){
        submit.addEventListener("click" , function(e){
            e.preventDefault();
         const guess  = parseInt(Userinput.value);
           validateGuess(guess);
    }
);
    }

    function validateGuess(guess){
        if(isNaN(guess)){
            alert('please Enter a valid number !! ');
        } 
         if( guess > 100){
            alert('Please enter a  number Less than  100 !')
         }
         if( guess < 1){
            alert('Please enter a  number Greater than 1!')
         }
        else {
            previousguesses.push(guess);
        }
        if(numGuess===11){
            displayGuess(guess);
            displayMassage(`Game Over! Your Random number was ${randomNumber}`);
            
                EndGame();
        } else{
            displayGuess(guess);
            checkGuess(guess);
        }
       
        
     };


        function checkGuess(guess){
            if(guess=== randomNumber){
                displayMassage(`You Guessed  it right`);
                EndGame();
            }
            else if(guess<randomNumber){
                displayMassage(`OHH ! You are just  less than required Number`);
            }
            else if(guess> randomNumber){
                displayMassage(`Ohh! You are Just Greater than required Number`);
            } };
            function displayGuess(guess){
                Userinput.value='' ;
                prevGuess.innerHTML =+ `${guess}  ` 
                
                numGuess++;
                remainGuess.innerHTML = `${11-numGuess}`
            }

            function displayMassage(message){
                  lowOrHi.innerHTML=`<h2>${message} </h2>`
            }
            
            function EndGame (){
               Userinput.value = '';
                Userinput.setAttribute('disabled', '')
                p.classList.add("button");
                p.innerHTML = `<h2 id="newGame"> Start! New Game</h2>`;
                startOver.appendChild(p);
                playGame = false;
                NewGame();
            };
            function NewGame(){
                const newGameButton =  document.querySelector('#newGame');
                newGameButton.addEventListener('click', function(e){
                    let randomNumber = parseInt(Math.random()*100 + 1);
                    //Userinput= "";
                    previousguesses = [];
                    numGuess= 1;
                    prevGuess.innerHTML="";
                    remainGuess.innerHTML= `${11-numGuess}`
                   Userinput.removeAttribute('disabled')
                   startOver.removeChild(p);
                   playGame= true;
                })
            }