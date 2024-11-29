
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('username_input');

togglePassword.addEventListener('click', () => {
    // تغییر نوع ورودی پسورد بین password و text
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    // تغییر آیکون
    togglePassword.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
});

function validateForm(){

    var field = document.forms["singin_form"]["email_tel_input","username_input"].value;
    if (field == null || field == ""){
        alert("لطفا تمامی فیلد ها را پر کنید.");
        return false;
    }
    else{
        alert("😊مجدد خوش آمدید")
    }
}