import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('[type="email"]'),
    textArea: document.querySelector('[name="message"]'),
}

const LOCAL_KEY = "feedback-form-state"


refs.form.addEventListener('input', throttle(onFormInput, 250))
refs.form.addEventListener('submit', onFormSubmit);

addValuesOnForm();

function onFormSubmit(e) {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem(LOCAL_KEY)))
    localStorage.removeItem(LOCAL_KEY);
    e.currentTarget.reset();
    
}

function onFormInput(e) {
    const { currentTarget: {elements: {message, email}} } = e;
    localStorage.setItem(LOCAL_KEY, `{"email":"${email.value}","message":"${message.value}"}`);  
};

function addValuesOnForm () {
    const formValues = JSON.parse(localStorage.getItem(LOCAL_KEY));
    if (formValues) {
        refs.email.value = formValues.email;
        refs.textArea.value = formValues.message;
    }
};
