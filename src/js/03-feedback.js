import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('[type="email"]');
const textareaRef = document.querySelector('[name="message"]');
const LOCAL_KEY = "feedback-form-state"
console.log(localStorage.getItem(LOCAL_KEY))
formRef.addEventListener('input', throttle(onInput, 250))
formRef.addEventListener('submit', onSubmit);

addOnInput();

function onSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
}

function onInput(e) {
    const { currentTarget: {elements: {message, email}} } = e;
    localStorage.setItem(LOCAL_KEY, `{"email":"${email.value}","message":"${message.value}"}`);  
};

function addOnInput () {
    const localValue = JSON.parse(localStorage.getItem(LOCAL_KEY));
    if (localValue) {
        emailRef.value = localValue.email;
        textareaRef.value = localValue.message;
    }
};
