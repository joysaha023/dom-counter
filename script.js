const counter1Display = document.getElementById('counter1Display');
const counter1IncrimentBtn = document.getElementById('counter1IncrimentBtn')
const counter1DecrimentBtn = document.getElementById('counter1DecrimentBtn')

const counter2Display = document.getElementById('Counter2Display')
const counter2IncrimentBtn = document.getElementById('counter2IncrimentBtn')
const counter2DecrimentBtn = document.getElementById('counter2DecrimentBtn')

const counter3Display = document.getElementById('counter3Display')
const counter3IncrimentBtn = document.getElementById('counter3IncrimentBtn')
const counter3DecrimentBtn = document.getElementById('counter3DecrimentBtn')

const resetBtn = document.getElementById('resetBtn')


let counter1value = 0;
let counter2value = 0;
let counter3value = 0;

counter1IncrimentBtn.addEventListener('click', function(){
    if(counter1value === 30){
        return alert("Your Counter limit reach out! Please try another one!!!!!!!!")
    }
    counter1value += 1;
    counter1Display.innerText = counter1value;
})

counter1DecrimentBtn.addEventListener('click', function(){
    if(counter1value === 0){
        return alert("You can't add Negetive value!!!!!!!")
    }
    counter1value -= 1;
    counter1Display.innerText = counter1value;
})

counter2IncrimentBtn.addEventListener('click', function(){
    if(counter2value === 30){
        return alert("Your Counter limit reach out! Please try another one!!!!!!!!")
    }
    counter2value += 1;
    counter2Display.innerText = counter2value;
})

counter2DecrimentBtn.addEventListener('click', function(){
    if(counter2value === 0){
        return alert("You can't add Negative value!!!!!!!")
    }
    counter2value -= 1;
    counter2Display.innerText = counter2value;
})

counter3IncrimentBtn.addEventListener('click', function(){
    if(counter3value === 30){
        return alert("Your Counter limit reach out! Please try another one!!!!!!!!")
    }
    counter3value += 1;
    counter3Display.innerText = counter3value;
})

counter3DecrimentBtn.addEventListener('click', function(){
    if(counter3value === 0){
        return alert("You can't add Negative value!!!!!!!")
    }
    counter3value -= 1;
    counter3Display.innerText = counter3value;
})

resetBtn.addEventListener('click', function(){

    counter1Display.innerText = 0;
    counter2Display.innerText = 0;
    counter3Display.innerText = 0;

    counter1value = 0;
    counter2value = 0;
    counter3value = 0;
})