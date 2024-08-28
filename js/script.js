
let slideIndex = 1;
showSlides(slideIndex);
autoSlide();

function currentSlide(n){
    showSlides(slideIndex = n)
}
function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if(n>slides.length){
        slideIndex = 1;
    }
    if(n<1){
        slideIndex = slides.length;
    }
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    for(i=0;i<dots.length;i++){
        dots[i].className = dots[i].className.replace("active","");
    }
    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].className += " active";
}

function autoSlide(){
    slideIndex++;
    showSlides(slideIndex);
    setTimeout(autoSlide,7000);
}


document.addEventListener('DOMContentLoaded',function(){
    const counters = document.querySelectorAll('.counter');

   const updateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 200;

    if(current<target){
        counter.innerText = `${Math.ceil(current+increment)}`;
        setTimeout(()=>updateCounter(counter),10);
    }else{
        counter.innerText = target;
    }
   };

   const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const counter = entry.target;
            updateCounter(counter);
            observer.unobserve(counter);
        }
    });
   },{
    threshold:0.2
   });
   counters.forEach(counter => {
    counter.innerText = '0';
    observer.observe(counter);
   })
})
