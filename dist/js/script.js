"use strict"
const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const btn = document.querySelector('.btn'),
      inputs = document.querySelectorAll('.intro__input'),
      inputsWrappers = document.querySelectorAll('.intro__input-wrap');
      

function showError(item, i,text) {
    let error = document.createElement('div')
    item.classList.add('intro__input_error');
    error.textContent = text;
    error.classList.add('intro__error');
    inputsWrappers[i].append(error);
}

function validateMail (regexp, input) {
    return regexp.test(input)
}

function clearForm() {
    inputs.forEach(item => {
        item.classList.remove('intro__input_error')
    });
    
    inputsWrappers.forEach((item, i) => {
        let error = item.querySelector('.intro__error')
        console.log(error);
        if (error) {
            error.remove()
        }
    })
    // inputsWrappers.forEach((item, i) => {
    //     if (item.contains('.intro__error')) {
    //         item.removeChild(error)
    //     }
    // })
}

function validate() {
    inputs.forEach((item, i) => {
        if (!item.value && item.id == 'first' && !item.classList.contains('intro__input_error')) {
            showError(item, i, 'First Name cannot be empty');
        } else if (!item.value && item.id == 'last' && !item.classList.contains('intro__input_error')) {
            showError(item, i, 'Last Name cannot be empty');
        } else if (item.id == 'email' && !item.classList.contains('intro__input_error')) {
            if(!item.value) {
                showError(item, i, 'Email cannot be empty');
            }
            else if(!validateMail(reg, item.value)) {
                showError(item, i, 'Looks like this is not an email')
            }
            
        } else if (!item.value && item.id == 'password' && !item.classList.contains('intro__input_error')) {
            showError(item, i, 'Password cannot be empty');
        }
    })
}



btn.addEventListener('click', (e) => {
    e.preventDefault();
    clearForm()
    validate()
})



