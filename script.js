//Delaring variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
const header= document.querySelector('.header')
console.log(btnOpenModal);
//Exposing the modal window
for (
 let i = 0;
 i < btnOpenModal.length;
 i++ //Iteration
)
 btnOpenModal[i].addEventListener('click', function () {
 console.log('Button clicked');
 modal.classList.remove('hidden'); //Modal window
 overlay.classList.remove('hidden'); //BlurryBackground
 });
//Closing the modal window using both the X on the modal window and the blurry background
const closeModal = function () {
 modal.classList.add('hidden'); //Modal window
 overlay.classList.add('hidden'); //BlurryBackground
};
btnCloseModal.addEventListener('click', closeModal); //Here were executing the function
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function () {
 console.log('A key was pressed');
});
document.addEventListener('keydown', function (esc) {
 if (esc.key === 'Escape' && !modal.classList.contains('hidden')) {
 closeModal();
 }
});