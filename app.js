const bar=document.getElementById("bar");
const nav=document.getElementById("navbar");
const close=document.getElementById("close");


var i = 0;
var txt = "Welcome to BasicBrush Studios, Your premier partner in story telling and brand elevation.Our passion-filled team specializes in crafting campaigns that delivers tangible results .With expertisein Social media management, web management, and Business management, we ensure that your brands story resonates deeply with your audience, exceeding expectations and driving growth. Join us on this journey of creativity and success.";
var speed = 50;

let header=document.getElementById("header");

// Call typeWriter function when the page loads
window.onload = function() {
  typeWriter();
};

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


if(bar){
    bar.addEventListener("click",()=>{
        nav.classList.add("active");
    })
}
if(close){
    close.addEventListener("click",()=>{
        nav.classList.remove("active");
    })
}

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    let headerOpacity = scrollTop > 0 ? 0.9 : 1;
    header.style.opacity = headerOpacity;
  });