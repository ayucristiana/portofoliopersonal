function scrollToAbout(){

document.getElementById("about").scrollIntoView({
behavior:"smooth"
});

}

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseover",()=>{

card.style.transform="scale(1.08)";

});

card.addEventListener("mouseout",()=>{

card.style.transform="scale(1)";

});

});

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>50){

nav.style.background="#01243d";

}else{

nav.style.background="rgba(0,0,0,.25)";

}

});
