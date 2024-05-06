
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password2');

// Function to check inputs
function checkInputs(input) {
    // Validation logic for the specific input
    // You can add your validation logic here for the input parameter
    console.log('Checking input:', input.id);
}

// Add event listeners to each input field
username.addEventListener('input', () => {
    checkInputs(username);
});

email.addEventListener('input', () => {
    checkInputs(email);
});

password.addEventListener('input', () => {
    checkInputs(password);
});

password2.addEventListener('input', () => {
    checkInputs(password2);
});

togglePassword.addEventListener('click', () => {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    // toggle the eye slash icon
    togglePassword.classList.toggle('fa-eye-slash');
});

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}


function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        //check if password is at least 8 characters
        if (passwordValue.length < 8) {
            setErrorFor(password, 'Password must be at least 8 characters');
        } 
        //check if password contains at least one number
        else if (!/[0-9]/.test(passwordValue)) {
            setErrorFor(password, 'Password must contain at least one number');
        } 
        //check if password contains at least one special character
        else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(passwordValue)) {
            setErrorFor(password, 'Password must contain at least one special character');
        } 
        //check if password contains at least one uppercase letter
        else if (!/[A-Z]/.test(passwordValue)) {
            setErrorFor(password, 'Password must contain at least one uppercase letter');
        } 
        //check if password contains at least one lowercase letter
        else if (!/[a-z]/.test(passwordValue)) {
            setErrorFor(password, 'Password must contain at least one lowercase letter');
        } 
        else {
            setSuccessFor(password);
        }
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Password2 cannot be blank');
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords does not match');
    } else {
        setSuccessFor(password2);
    }
}