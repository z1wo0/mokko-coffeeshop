
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
