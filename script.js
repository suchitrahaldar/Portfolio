// ==============================
// Mobile Menu
// ==============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});

// ==============================
// Close Menu on Link Click
// ==============================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});

// ==============================
// Sticky Navbar Shadow
// ==============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,.15)";

    }

    else{

        header.style.boxShadow = "none";

    }

});

// ==============================
// Scroll Animation
// ==============================

const sections = document.querySelectorAll("section");

function reveal(){

sections.forEach(section=>{

const top = section.getBoundingClientRect().top;

const windowHeight = window.innerHeight;

if(top < windowHeight - 100){

section.style.opacity = "1";

section.style.transform = "translateY(0px)";

}

});

}

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(50px)";

section.style.transition=".8s";

});

window.addEventListener("scroll", reveal);

reveal();

// ==============================
// Typing Effect
// ==============================

const titles = [

"Web Developer",

"WordPress Developer",

"Frontend Developer",

"SEO Specialist"

];

let index = 0;

let char = 0;

const typing = document.querySelector(".home-content h2");

function typeText(){

if(char < titles[index].length){

typing.textContent += titles[index].charAt(char);

char++;

setTimeout(typeText,120);

}

else{

setTimeout(eraseText,1500);

}

}

function eraseText(){

if(char>0){

typing.textContent = titles[index].substring(0,char-1);

char--;

setTimeout(eraseText,70);

}

else{

index++;

if(index>=titles.length){

index=0;

}

setTimeout(typeText,200);

}

}

typing.textContent="";

typeText();

// ==============================
// Back To Top Button
// ==============================

const topBtn = document.createElement("button");

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="20px";
topBtn.style.bottom="20px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#0d6efd";
topBtn.style.color="#fff";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 10px 20px rgba(0,0,0,.2)";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ==============================
// Contact Form
// ==============================

const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank You! Your message has been sent successfully.");

form.reset();

});