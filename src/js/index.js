/*Slide show */
var slideIndex;
var showSlidesTimeout;
function showSlides(stop) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active","");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
    slideIndex++;
    if (slideIndex > slides.length - 1) {
        slideIndex = 0
    }
    if (!stop) {
        showSlidesTimeout = setTimeout(showSlides, 3000);
    }
}
showSlides(slideIndex = 0);
function currentSlide(n) {
    clearTimeout(showSlidesTimeout);
    slideIndex = n;
    showSlides(true);
}
 /* Arrow reload */
$(document).ready(function(){
    $("#reload1").click(function(){
        $("#reload1 span").toggleClass("reload1");
    });
});
$(document).ready(function(){
    $("#reload2").click(function(){
        $("#reload2 span").toggleClass("reload1");
    });
});
$(document).ready(function(){
    $("#reload3").click(function(){
        $("#reload3 span").toggleClass("reload1");
    });
});
$(document).ready(function(){
    $("#reload4").click(function(){
        $("#reload4 span").toggleClass("reload1");
    });
});
$(document).ready(function(){
    $("#reload5").click(function(){
        $("#reload5 span").toggleClass("reload1");
    });
});
$(document).ready(function(){
    $("#reload6").click(function(){
        $("#reload6 span").toggleClass("reload1");
    });
});
 /* Sticky menu */
window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}