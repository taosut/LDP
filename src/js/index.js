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
/* jquery */
$(document).ready(function(){
    /* Arrow reload */
    $("#reload1").click(function(){
        $("#reload1 i").toggleClass("reload");
    });
    $("#reload2").click(function(){
        $("#reload2 i").toggleClass("reload");
    });
    $("#reload3").click(function(){
        $("#reload3 i").toggleClass("reload");
    });
    $("#reload4").click(function(){
        $("#reload4 i").toggleClass("reload");
    });
    $("#reload5").click(function(){
        $("#reload5 i").toggleClass("reload");
    });
    $("#reload6").click(function(){
        $("#reload6 i").toggleClass("reload");
    });
    /* bg menu */
    $("#btn").click(function(){
        $(".menu").toggleClass("sticky1");
    });
    /* scrolling menu */
    $('.nav-link').click(function() {
        var sectionTo = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(sectionTo).offset().top
        }, 1500);
    });
    /* toggle menu */
    $(".nav-item").click(function(){
        $(".collapse").removeClass("show");
    });
});