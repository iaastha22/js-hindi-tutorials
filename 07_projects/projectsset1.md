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