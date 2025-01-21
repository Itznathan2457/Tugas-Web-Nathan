function togglePassword() {
    const passwordField = document.querySelector('.password-field');
    const passwordToggle = document.querySelector('.password-toggle');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        passwordToggle.src = 'assets/hidden.png'; 
    } else {
        passwordField.type = 'password';
        passwordToggle.src = 'assets/eye.png'; 
    }
}
