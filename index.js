
const menu=document.querySelector("#menu");
const close=document.querySelector("#close");
const navLinks=document.querySelector(".nav");

const body=document.querySelector("body");

menu.addEventListener("click",()=>{
navLinks.style.right="0px";
})
close.addEventListener("click",()=>{
    navLinks.style.right="-200px"
})