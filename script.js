
const header=document.getElementById("header");
const menuButton=document.getElementById("menuButton");
const navigation=document.getElementById("navigation");
const buttons=document.querySelectorAll(".category-button");
const grids=document.querySelectorAll(".menu-grid");

function headerState(){header.classList.toggle("scrolled",window.scrollY>25)}
window.addEventListener("scroll",headerState,{passive:true});
headerState();

menuButton.addEventListener("click",()=>{
 const open=navigation.classList.toggle("active");
 menuButton.classList.toggle("active");
 document.body.classList.toggle("menu-open",open);
});

navigation.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
 navigation.classList.remove("active");
 menuButton.classList.remove("active");
 document.body.classList.remove("menu-open");
}));

buttons.forEach(button=>button.addEventListener("click",()=>{
 buttons.forEach(x=>x.classList.remove("active"));
 button.classList.add("active");
 button.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"});
 const target=button.dataset.category;
 grids.forEach(grid=>grid.classList.toggle("active",grid.dataset.menu===target));
}));

const observer=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{
  if(entry.isIntersecting){
   entry.target.classList.add("visible");
   observer.unobserve(entry.target);
  }
 });
},{threshold:.08});

document.querySelectorAll(".reveal").forEach(x=>observer.observe(x));

document.addEventListener("DOMContentLoaded",()=>{
    const layer=document.getElementById("coffee-particles");
    if(!layer)return;
    const count=window.innerWidth<600?9:18;
    for(let i=0;i<count;i++){
        const cup=document.createElement("div");
        cup.className="coffee-float";
        cup.style.left=(5+Math.random()*90)+"%";
        cup.style.top=(8+Math.random()*84)+"%";
        cup.style.setProperty("--duration",(12+Math.random()*16)+"s");
        cup.style.setProperty("--rotate",(-16+Math.random()*32)+"deg");
        cup.style.setProperty("--tilt",(-18+Math.random()*36)+"deg");
        cup.style.setProperty("--depth",(-25+Math.random()*50)+"deg");
        cup.style.transform = `scale(${0.72+Math.random()*0.55})`;
        cup.style.animationDelay=(-Math.random()*15)+"s";
        cup.innerHTML='<span class="steam s1"></span><span class="steam s2"></span><span class="steam s3"></span><span class="coffee-cup"></span>';
        layer.appendChild(cup);
    }
});
