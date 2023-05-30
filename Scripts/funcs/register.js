import { handleRegistrationFormSubmit } from './auth.js';

const registerBtn = document.getElementById('register-btn');

registerBtn.addEventListener('click', event => {
    event.preventDefault();
    handleRegistrationFormSubmit();
});