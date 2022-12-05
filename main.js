//undefined - не присвоено - не определено
let userName;
console.log(userName)

let someName = 'james'
someName = null;


console.log("Hello mark! whats up?")

let greet = 'Hello mark!'
let end = ' Whats up?'
let say = greet + end
console.log('Hello again!' + ' ' + say)

console.log(`Hello, ${end} - your name is alex`) //Using variables inside text


//function declaration
function sayHi() {
   alert('hello')
}

sayHi()

//function expression

const sayNo = function() {
   alert('Hello')
} 

/* function sayHi(userName){
   console.log(`HEllo!, ${userName}!`);
}
sayHi('Yuriy')

function goobye(date_1){
console.log(`Hey, ${date_1}`)
}
goobye(13) */