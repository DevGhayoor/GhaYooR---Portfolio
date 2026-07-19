/*================ LOADER =================*/

window.addEventListener("load",()=>{

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.display="none";

    }

});



/*================ MOBILE MENU =================*/


const menuIcon = document.querySelector(".menu-icon");

const navLinks = document.querySelector(".nav ul");


if(menuIcon){

menuIcon.onclick = ()=>{

    navLinks.classList.toggle("active");

}

}



document.querySelectorAll(".nav ul li a").forEach(link=>{

    link.onclick=()=>{

        navLinks.classList.remove("active");

    }

});



/*================ STICKY NAVBAR =================*/


window.addEventListener("scroll",()=>{


const nav=document.querySelector(".nav");


if(window.scrollY>50){

    nav.classList.add("sticky");

}

else{

    nav.classList.remove("sticky");

}


});





/*================ TYPING EFFECT =================*/


new Typed("#element",{

strings:[

"Frontend Developer",

"UI/UX Designer",

"Web Designer",

"Creative Coder"

],

typeSpeed:80,

backSpeed:50,

backDelay:1000,

loop:true

});





/*================ SCROLL PROGRESS =================*/


window.addEventListener("scroll",()=>{


let scrollTop=document.documentElement.scrollTop;


let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;


let progress=(scrollTop/height)*100;


const bar=document.getElementById("progress-bar");


if(bar){

bar.style.width=progress+"%";

}


});





/*================ TOP BUTTON =================*/


const topBtn=document.getElementById("topBtn");


window.addEventListener("scroll",()=>{


if(window.scrollY>400){


topBtn?.classList.add("show");


}

else{


topBtn?.classList.remove("show");


}


});



topBtn?.addEventListener("click",(e)=>{


e.preventDefault();


window.scrollTo({

top:0,

behavior:"smooth"

});


});





/*================ ACTIVE NAV LINK =================*/


const sections=document.querySelectorAll("section");

const links=document.querySelectorAll(".nav ul li a");


window.addEventListener("scroll",()=>{


let current="";


sections.forEach(section=>{


let top=window.scrollY;


let offset=section.offsetTop-150;


let height=section.offsetHeight;


let id=section.getAttribute("id");



if(top>=offset && top<offset+height){

current=id;

}



});



links.forEach(link=>{


link.classList.remove("active");


if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}


});


});






/*================ THEME TOGGLE =================*/


const themeBtn=document.querySelector(".theme-toggle");


themeBtn?.addEventListener("click",()=>{


document.body.classList.toggle("light-mode");



if(document.body.classList.contains("light-mode")){


themeBtn.innerHTML="🌙";


}

else{


themeBtn.innerHTML="☀️";


}


});







/*================ CUSTOM CURSOR =================*/


const cursor=document.querySelector(".cursor");


document.addEventListener("mousemove",(e)=>{


if(cursor){


cursor.style.left=e.clientX+"px";


cursor.style.top=e.clientY+"px";


}


});





/*================ PARTICLES =================*/


particlesJS("particles-js",{


particles:{


number:{


value:80

},


color:{


value:"#adff2f"

},


size:{


value:3

},


move:{


speed:2

},


line_linked:{


enable:true,


distance:150,


color:"#adff2f"


}


},


interactivity:{


events:{


onhover:{


enable:true,

mode:"repulse"


}


}


}


});