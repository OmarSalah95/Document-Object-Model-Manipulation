// // Your code goes here
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `drag / drop`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [ ] `dblclick`

// Nav event listener to nest a second click listener in 
const nav = document.querySelector('nav');
nav.addEventListener('click', e => console.log(e.target));

// Removes Default action for click event of Anchor tags using a second nested click listener with propagation control. 
const anchors = Array.from(document.getElementsByTagName('a'));
anchors.forEach(anchor => {
    anchor.addEventListener(`click`, e => {
        console.log(e.target);
        e.preventDefault(); // This prevents elements default action to triggering, so no page refresh.
        e.stopPropagation() // This prevents propagation. 
    });
    // Applies to For each on Anchor tags.
    });

// Enlarges images on MouseOver
const images = Array.from(document.querySelectorAll('p'));
images.forEach(img =>{
    img.addEventListener(`mouseover`, e => {
    e.target.style.backgroundColor = 'grey';
    });
    // Applies to For each on Anchor tags.
    });