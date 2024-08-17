function validate() {
    alert("hello")
    const name =
        document.forms.RegForm.name.value;
    const email =
        document.forms.RegForm.email.value;
    const password =
        document.forms.RegForm.Password.value;
    const confirmpassword =
        document.forms.RegForm.confirmPassword.value;
    console.log(name, email, password, confirmpassword);
    if (name === ""
        || name.includes('0') || name.includes('1')
        || name.includes('2') || name.includes('3')
        || name.includes('4') || name.includes('5')
        || name.includes('6') || name.includes('7')
        || name.includes('8') || name.includes('9')) {
        window.alert
            ("Please enter your name properly.");
        name.focus();
        return false;
    }
    if (email === "" || !email.includes('@')) {
        window.alert
            ("Please enter a valid e-mail address.");
        email.focus();
        return false;
    } if (password === "") {
        alert("Please enter your password");
        password.focus();
        return false;
    }

    if (password.length < 6) {
        alert
            ("Password should be atleast 6 character long");
        password.focus();
        return false;

    }
    if (confirmpassword === "") {
        alert("Please enter your password");
        password.focus();
        return false;
    }

    if (confirmpassword.length < 6) {
        alert
            ("Password should match");
        password.focus();
        return false;

    }
    return true;
}