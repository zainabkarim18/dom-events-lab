/*-------------------------------- Constants --------------------------------*/
let operatorArr= ['*', '-' ,'+', '/'];
let operator
/*-------------------------------- Variables --------------------------------*/
let num1="" , num2="", result;
let val;
/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');


/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        // if(event.target.innerHTML == '=')
        // This log is for testing purposes to verify we're getting the correct value
        //console.log(event.target.innerText);
        // Future logic to capture the button's value would go here...
        val = event.target.innerText;
            // if(event.target.innerText == '/' || event.target.innerText == '*' 
            //     || event.target.innerText == '+' || event.target.innerText == '-' ){
        
            if(operatorArr.indexOf(val)>=0 && num1){
                operator = event.target.innerText;
                console.log("operator:" +operator);
        }else if(!operator && operatorArr.indexOf(val) < 0 && (val != '=' && val !='C')){
            num1 += val;
            console.log("number1:"+num1);
            display.innerHTML = num1;
        }else if (operator && operatorArr.indexOf(val) < 0 && (val != '=' && val !='C')) {
            num2 += val;
            console.log("number2:"+num2);
            display.innerHTML += val;
        }else if (val=="="||val=="C"){
            // console.log("pressed & not typed "+val);
        }
    });
});


calculator.addEventListener('click', (event) => {
  // This log is for testing purposes to verify we're getting the correct value
  // You have to click a button to see this log
//   console.log(event.target.innerText);
val = event.target.innerText;
  // Example
//   if (event.target.classList.contains('number')) {
//     // Do something with a number
//   }

    if (event.target.classList.contains('operator') && num1) {
        // Do something with a number
        display.innerHTML += operator;
    }

  // Example
    if (val === '=' && num1 && num2 && !result ){
            
        num1 = parseInt(num1);
        num2 = parseInt(num2); 
    if (operator === '*') {
        // Do something with this operator
        result = num1 * num2;
        console.log(result);
        display.innerHTML += "="+ result;
    } else if (operator === '/') {
        // Do something with this operator
        result = num1 / num2;
        console.log(result);
        display.innerHTML += "="+ result;
    } else if (operator === '+') {
        // Do something with this operator
        result = num1 + num2;
        console.log(result);
        display.innerHTML += "="+ result;
    } else if (operator === '-') {
        // Do something with this operator
        result = num1 - num2;
        console.log(result);
        display.innerHTML += "="+ result;
    }
    }else if (val === 'C'){
        num1="";
        num2="";
        operator=null;
        result=null;
        display.innerHTML = "";
    }
});
