// // Your code goes here

// Nav event listener to nest a second click listener in 
const nav = document.querySelector('nav');
nav.addEventListener('click', e => console.log(e.target));

// Removes Default action for click event of Anchor tags using a second nested click listener with propagation control. 
const anchors = Array.from(document.getElementsByTagName('a'));
anchors.forEach(anchor => {
    anchor.addEventListener(`click`, e => {
        console.log(e.target);
        e.preventDefault(); // This prevents elements default action to triggering, so no page refresh.
        alert("This will not refresh")
        e.stopPropagation() // This prevents propagation. 
    });
    // Applies to For each on Anchor tags.
    });

// Enlarges images on MouseOver
const pTags = Array.from(document.querySelectorAll('p'));
pTags.forEach(p =>{
    // On mouseover BGColor change
    p.addEventListener(`mouseover`, e => {
        e.target.style.backgroundColor = 'grey';
    });
    // On mouseenter scale change
    p.addEventListener("mouseenter", e =>{
        e.target.style.transition = "transform .5";
        e.target.style.transform = "scale(1.2)";
    });
    // On mouseout scale change
    p.addEventListener("mouseout", e =>{
        e.target.style.transform = "scale(1)";
    });
    // On mouseleave BGColor return
    p.addEventListener(`mouseleave`, e => {
        e.target.style.backgroundColor = 'white'
    });
    // Zoom in on dblclick
    p.addEventListener(`dblclick`, e => {
        e.target.style.fontSize = '20px'
    });
    p.addEventListener("copy", e => (p.style.color = "green"));
    // Applies to For each on Anchor tags.
    p.style.borderRadius = "5px"
    p.style.padding = "5px"
});


const body = document.querySelector("body");
// Alerts user of Read Only status
body.addEventListener("keydown", e =>
  alert("You can NOT modify the page content!")
);
// 720 deg rotation animation of targeted element.
body.addEventListener("auxclick", e =>{
    TweenMax.to(e.target, 1, {rotation:720, yoyo: true, repeat: 1});
});

window.addEventListener("load", e => console.log("Page loaded successfully."));
