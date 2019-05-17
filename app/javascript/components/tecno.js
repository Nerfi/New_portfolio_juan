const slider = document.querySelector('.items'); //selecting white div that surrounds everything

//variables that will change

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft; //finding the place where the user initially clicked
  scrollLeft = slider.scrollLeft;
});


slider.addEventListener('mouseleave', () => {
 isDown = false;
 slider.classList.remove('active');

});

slider.addEventListener('mouseup', () => {
 isDown = false;
 slider.classList.remove('active');

});


slider.addEventListener('mousemove', (e) => {
 if(!isDown) return; // stop the function fron running

 e.preventDefault(); //this will stop selecting the text inside or anything
 const x = e.pageX - slider.offsetLeft;// where the cursor is when user move it to left/right
 const walk = (x- startX) * 3; //for every pixel moved, you're gonna scroll the slider 3 pixels
 slider.scrollLeft = scrollLeft - walk;
});



export { slider };
