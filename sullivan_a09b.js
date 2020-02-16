/*  Anna Sullivan
    sullivan_a09b.js
    INFO2124WW
    Thoendel
    2/16/2020
*/
//return elements using getElementsByTagName p tag
let pTag = document.getElementsByTagName("p"); 
console.log(`The total number of <p> tags in this document are: ${pTag.length}`); //Output in console number of p tags

//return elements using getElementsByTagName div tag
let divTag = document.getElementsByTagName("div");
console.log(`The total number of <div> tags in this document are: ${divTag.length}`); //Output in console number of div tags

//return elements using getElementsByClassName called paragraph
let pClass = document.getElementsByClassName("paragraph");
console.log(`The total number of classes named paragraph in this document are: ${pClass.length}`); //Output in console number of paragraph class

//return elements using getElementsByClassName called block-text
let textClass = document.getElementsByClassName("block-text");
console.log(`The total number of classes named block-text in this document are: ${textClass.length}`); //Output in console number of block-text class

//return element with id b001
let idBoo = document.getElementById("b001");
console.log(`Display the element with the ID attribute value of b001: `); //Output in console text about b001
console.log(idBoo);//Output in console the element with ID b001