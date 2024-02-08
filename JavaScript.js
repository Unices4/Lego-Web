const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.modal-closeButton');


const spiderman = document.querySelector('#spiderman');
const robin = document.querySelector('#robin');
const batman = document.querySelector('#batman');

const buttons = Array.of(spiderman,robin,batman);

buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        modal.classList.remove('hidden');
        modal.classList.add('visible');
    });
});


closeButton.addEventListener('click', ()=>{
    console.log('here')
    modal.classList.remove('visible');
    modal.classList.add('hidden');
});

