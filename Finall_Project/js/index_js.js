
function scrollToTop() {
     window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.onscroll = function() {
     let scrollButton = document.getElementById("scrollButton");
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       scrollButton.style.display = "block";
     } else {
       scrollButton.style.display = "none";
     }
};

function emailValidate(formid,input_nwl) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.forms[formid].elements[input_nwl].value;
    if(reg.test(address) == false) {
        alert('آدرس ایمیل وارد شده نامعتبر است');
        return false;
   }
   else{
        alert('آدرس ایمیل شما با موفقیت ثبت شد')
        alert('اکنون شما عضوی از ماهستید😉')
   }
}




