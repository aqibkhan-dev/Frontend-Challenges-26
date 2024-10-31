const btn = document.querySelector('button');
const container = document.querySelector('.container');
const card = document.querySelector('.card');
btn.addEventListener('click', (e)=>{
e.preventDefault();
container.classList.add('hide');
card.classList.remove('hide');
});

