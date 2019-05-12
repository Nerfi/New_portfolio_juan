
 const cards = document.querySelectorAll('.card-category');


function toggleOpen() {
  this.classList.toggle('open');
}


function toggleActive(e) {
console.log(e.propertyName);
if (e.propertyName.includes('flex')) {
this.classList.toggle('open-active');


}

}

cards.forEach(card => card.addEventListener('click', toggleOpen));
cards.forEach(card => card.addEventListener('transitionend', toggleActive));

export {toggleOpen};
