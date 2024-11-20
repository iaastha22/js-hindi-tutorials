# Project realted to DOM

### project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#Soluation code

## project 1

``` javascript
console.log("krrish")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
   button.addEventListener('click', function(e){
     if (e.target.id === 'grey'){
       body.style.backgroundColor = e.target.id;
     }
     if (e.target.id === 'white'){
       body.style.backgroundColor = e.target.id;
     }
     if (e.target.id === 'blue'){
       body.style.backgroundColor = e.target.id;
     }
     if (e.target.id === 'yellow'){
       body.style.backgroundColor = e.target.id;
     }
   });
});

```

###project2

```javascript
const form = document.querySelector('form');
form.addEventListener('submit', function(e){
e.preventDefault();

const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#results');
if(height === '' || height<0 || isNaN(height)){
  results.innerHTML = `please give a valid height ${height}`;
}
else if(weight === '' || weight<0 || isNaN(weight)){
  results.innerHTML = `please give a valid weight ${weight}`;
}
else {
  const bmi = (weight /( (height*height) / 1000)).toFixed(2);

  let category = '';
  if (bmi < 18.6){category = 'underweight' ;}
  else if (bmi =>18.6 && bmi < 24.9){category = 'normalrange' ;}
  else {category = 'overweight';}
  //show result
  results.innerHTML = `<span>${bmi}(${category})</span>`;
}
});
```

###project3 soluation
``` javascript
const clock = document.getElementById('clock');
setInterval(function(){
  let date= new Date();
  clock.innerHTML = date.toLocaleTimeString();
},1000)
```

###project4 soluation
```
let randomNumber = parseInt(Math.random()*100 + 1);

const submit = document.getElementById('subt');
const userInput = document.getElementById('guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.getElementsByClassName('resultParas');
const lowOrHigh = document.querySelector('.lowOrHi');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
const guess = parseInt(userInput.value);
console.log(guess);
validGuess(guess);
  });
}

function validGuess (guess){
  if(isNaN(guess)){
    alert('Please enter a valid number')
  } else if (guess < 1){
    alert('Please enter a number greater than 0')
  } else if (guess>100){
    alert('Please enter a number less than 100')
  }else {
    prevGuess.push(guess)
    if(numGuess >10){
      displayGuess(guess)
      displayMessage(`Game Over.Random number was ${randomNumber}`)
      endGame()
    }else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess (guess) {
  if(guess === randomNumber){
    displayMessage(`You guessed it right`)
    endGame()
  } else if (guess < randomNumber){
    displayMessage(`Number is TOO low`)
  }else if (guess > randomNumber){
    displayMessage(`Number is TOO High`)
}
}
function displayGuess(guess){
  userInput.value = '';
  guessSlot.innerHTML +=`${guess} `;
  numGuess++;
  remaining.innerHTML= `${11 -numGuess}`;
}

function displayMessage(message){
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function newGame(){
 const newGameButton = document.querySelector('#newGame')
 newGameButton.addEventListener('click', function(e){
  randomNumber =  parseInt(Math.random()*100 + 1);
  prevGuess = []
  numGuess = 1
  guessSlot.innerHTML = ''
  remaining.innerHTML = `${10- numGuess}`;
  userInput.removeAttribute('disabled')
  startOver.removeChild(p); 
  playGame= true
 });
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled' , '')
  p.classList.add('button')
  p.innerHTML= `<h2 id="newgame"> Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
```