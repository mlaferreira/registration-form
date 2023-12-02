const signInBtn = document.querySelector('#sign-in-btn');
const signUpBtn = document.querySelector('#sign-up-btn');
const container = document.querySelector('.container');

signUpBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    container.classList.add('sign-up-mode');
});

signInBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    container.classList.remove('sign-up-mode');
});
