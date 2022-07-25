import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const LOCAL_KEY = "feedback-form-state"
console.log(localStorage.getItem(LOCAL_KEY))
formRef.addEventListener('input', onInput)
addOnInput()

function onInput(e) {
    const { currentTarget: {elements: {message, email}} } = e;
    localStorage.setItem(LOCAL_KEY, `{email: ${email.value}, message: ${message.value}}`)
}
function addOnInput() {
    const localValue = localStorage.getItem(LOCAL_KEY);
    if (localValue) {
    }
    
}