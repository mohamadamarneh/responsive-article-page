
// dropdown list start
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
// dropdown list end



// change content in sidebar  start
// note **   we can do it with scss and jquery or bootstap and we can do it more dynamic but its just 3 cases
document.getElementById('popular-content').style.display = "none";
document.getElementById('trending-content').style.display = "none";
document.getElementById('latest-content').style.display = "block";
function handleList() {

    if (document.getElementById('latest-radio').checked) {

        document.getElementById('popular-content').style.display = "none";
        document.getElementById('trending-content').style.display = "none";
        document.getElementById('latest-content').style.display = "block";

    }

    if (document.getElementById('popular-radio').checked) {

        document.getElementById('trending-content').style.display = "none";
        document.getElementById('latest-content').style.display = "none";
        document.getElementById('popular-content').style.display = "block";

    }

    if (document.getElementById('trending-radio').checked) {
        document.getElementById('popular-content').style.display = "none";
        document.getElementById('latest-content').style.display = "none";
        document.getElementById('trending-content').style.display = "block";

    }
}

// change content in sidebar  end



// back to up button start
window.onscroll = function() {refbtn()};
window.onload = document.getElementById('refbtn').style.display='none';
let a = document.body.getBoundingClientRect().top;
function refbtn(){
    
    a = document.body.getBoundingClientRect().bottom;
    if(a >= 833){
        document.getElementById('refbtn').style.display='none';
    }else{
        document.getElementById('refbtn').style.display='block';
    }
}

// back to up button end




// cards section start
var slides = document.getElementsByClassName("card");
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);

    if (n == 1) {
        
        let c = document.querySelector(".card-wrapper");
        c.scrollBy(290, 0)
    }
    if (n == -1) {
    
        let c = document.querySelector(".card-wrapper");
        c.scrollBy(-290, 0)
    }

}

function currentSlide(n) {
    showSlides(slideIndex = n);

}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("card");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "block";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// cards section end