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