
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

function validateForm(){

    var field = document.forms["contact_Q"]["name","phone","email","subject","idea"].value;
    if (field == null || field == ""){
        alert("لطفا تمامی فیلد ها را پر کنید.");
        return false;
    }
    else{
        alert("پیشنهاد , انتقاد و یا نظر شما دوست عزیز برای ما با موفقیت ارسال شد.")
    }
}


