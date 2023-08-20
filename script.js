const signupBtn = document.querySelector('.green-bg button');
const formWrapper = document.querySelector('.form-wrapper');

signupBtn.addEventListener('click', () => {
    formWrapper.classList.toggle('change');
})