var curry = require('./curry');

function calculate (num1) {
  return function(operator){
    if (operator === 'add' || operator === '+'){
      return function(num2){
        return num1 + num2;
      }
    }
    if (operator === 'subtract' || operator === '-'){
      return function(num2){
        return num1 - num2;
      }
    }
    if (operator === 'multiply' || operator === '*'){
      return function(num2){
        return num1 * num2;
      }
    }
    if (operator === 'divide' || operator === '/'){
      return function(num2){
        return num1 / num2;
      }
    }
    if (operator === 'modulo' || operator === '%'){
      return function(num2){
        return num1 % num2;
      }
    }
    if (operator === 'power of' || operator === '^'){
      return function(num2){
        return Math.pow(num1, num2);
      }
    }
  }
};

function random (start) {
  return {
    'to' : function(end){
      return Math.floor(Math.random() * (end - start) + start)
    },
    'toInclude' : function(end){
      return Math.floor(Math.random() * ((end + 1) - start) + start)
    }
  }
}

function concat(arg1, arg2){
  return arg1 + " " + arg2;
}

var prependGreeting = function(name){
  return concat('Hello', name);
}

function add () {

}

var add4and5 = null;

function calculator(){

}

var add5 = null;
var sub5 = null;
var multiply5 = null;
var divide5 = null;
var mod5 = null;
var pow3 = null;

module.exports = {
  calculate : calculate,
  random : random,
  prependGreeting : prependGreeting,
  add4and5 : add4and5,
  calculator : calculator,
  add5 : add5,
  sub5 : sub5,
  multiply5 : multiply5,
  divide5 : divide5,
  mod5 : mod5,
  pow3 : pow3
};