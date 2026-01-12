let isLogin = true;

const nameField = document.getElementById("name");
const confirmField = document.getElementById("confirm");
const tagline = document.getElementById("tagline");
const actionBtn = document.getElementById("actionBtn");
const switchText = document.getElementById("switchText");

nameField.style.display = "none";
confirmField.style.display = "none";

function toggleMode(){
    isLogin = !isLogin;

    nameField.style.display = isLogin ? "none" : "block";
    confirmField.style.display = isLogin ? "none" : "block";

    tagline.innerText = isLogin
        ? "Sign in to continue"
        : "Create your account";

    actionBtn.innerText = isLogin ? "Sign In" : "Register";

    switchText.innerHTML = isLogin
        ? 'New here? <span onclick="toggleMode()">Create account</span>'
        : 'Already have an account? <span onclick="toggleMode()">Sign in</span>';
}

function handleAuth(){
    if(!isLogin){
        if(password.value !== confirm.value){
            alert("Passwords do not match");
            return false;
        }
        alert("Registration successful");
        toggleMode();
        return false;
    }

    alert("Login successful");
    return false;
}