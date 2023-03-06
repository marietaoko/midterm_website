const book = document.querySelector('.book');
// const book5 = document.querySelector('#book5');
// const book3 = document.querySelector('#book3');
// const book4 = document.querySelector('#book4')


// open.addEventListener('click', function(){
//   nav.style.height = '20vh';
// });

// close.addEventListener('click', function(){
//   nav.style.height = '0';
// });

window.addEventListener("scroll", () => {
let offset = window.scrollY;
console.log(offset);
book.style.left = offset * .15 + 'px';
// book5.style.left = offset * .2 + 'px';
// book3.style.transform = `translateX(-${offset * 0.4}px)`;
// book4.style.bottom = offset * 0.3 + 'px';
 });

//  dart.addEventListener('click', function(){
//       this.classList.toggle('change');
//   });