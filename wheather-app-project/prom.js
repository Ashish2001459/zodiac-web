let a =10;
let b= 20;
let result= a+b;
let resultFromserver = fetch(
    "https://jsonplaceholder.typicode.com/posts"
)
console.log(resultFromserver);