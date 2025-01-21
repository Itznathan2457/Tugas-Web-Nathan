document.getElementById("welcome-signup")?.addEventListener("click", () => {
    window.location.href = "option.html";
});

document.getElementById("signup-email")?.addEventListener("click", () => {
    window.location.href = "email-signup.html";
});

document.getElementById("signup-form")?.addEventListener("submit", (event) => {
    event.preventDefault(); 
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    
    alert(`Sign up successful! Welcome, ${username}!`);
});

function togglePassword() {
    const passwordField = document.querySelector('.password-field');
    const passwordToggle = document.querySelector('.password-toggle');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        passwordToggle.src = 'hidden.png'; 
    } else {
        passwordField.type = 'password';
        passwordToggle.src = 'eye.png'; 
    }
}
 
    window.fbAsyncInit = function () {
        FB.init({
            appId: '940398788235404', 
            cookie: true,
            xfbml: true,
            version: 'v12.0'
        });
    };

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  
    document.getElementById('facebookLogin').addEventListener('click', () => {
        FB.login(response => {
            if (response.authResponse) {
                const accessToken = response.authResponse.accessToken;

              
                FB.api('/me', { fields: 'name,email,picture' }, userInfo => {
                    const queryString = `name=${encodeURIComponent(userInfo.name)}&email=${encodeURIComponent(userInfo.email)}&picture=${encodeURIComponent(userInfo.picture.data.url)}`;
                    window.location.href = `profile.html?${queryString}`;
                });
            } else {
                alert('User cancelled login or did not fully authorize.');
            }
        }, { scope: 'email,public_profile' });
    });

   