const num = 100;
let square = (function(a) {
 return a * a;
})(num);
console.log(`Square(${num})=` + square);

//This is an anonymous function called immediately when declared.
