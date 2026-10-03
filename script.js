let slideIndex = 0;

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

// Show selected slide
function showSlide(index){

    // Loop back to first slide if past the last slide
    if(index >= slides.length){
        slideIndex = 0;
    }
    //loop to last slide if before the first slide
    else if(index < 0){
        slideIndex = slides.length -1;
    }else {
        slideIndex = index;
    }

    //Remove active class from all slides 
    slides.forEach(slide => {
        slide.classList.remove("active");
    });
    //Remove active class from all dots
    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    //Add active class to current slide and dot
    slides[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active");
}
    //Next /previous buttons
    function changeslide(direction){
    showSlide(slideIndex + direction);
}

// Dot navigation
function currentSlide(index) {
    showSlide(index);
}
// Auto-play interval
let autoPlay = setInterval(() => {
    changeslide(1);
    }, 4000);

