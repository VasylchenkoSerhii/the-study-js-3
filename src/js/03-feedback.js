import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('[type="email"]'),
    textArea: document.querySelector('[name="message"]'),
}

const LOCAL_KEY = "feedback-form-state"


refs.form.addEventListener('input', throttle(onFormInput, 500))
refs.form.addEventListener('submit', onFormSubmit);


const formData = localStorage.getItem(LOCAL_KEY) ? JSON.parse(localStorage.getItem(LOCAL_KEY)) : {};

addValuesOnForm();

function onFormSubmit(e) {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem(LOCAL_KEY)))
    localStorage.removeItem(LOCAL_KEY);
    e.currentTarget.reset();
    
}

function onFormInput(e) {
    const { target: { name, value } } = e;
    formData[name] = value;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(formData))
};

function addValuesOnForm () {
    const formValues = JSON.parse(localStorage.getItem(LOCAL_KEY));
    if (formValues) {
        if (formValues.email) {
            refs.email.value = formValues.email;
        } 
        if (formValues.message) {
           refs.textArea.value = formValues.message; 
        }
    }
};
