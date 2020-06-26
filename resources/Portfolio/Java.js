const carouselSlide= document.querySelector('.slide');
const carouselImg= document.querySelectorAll('.slide img');

const PrevButt= document.querySelector('#prev');
const NextButt= document.querySelector('#next');

let counter= 1;
const size= carouselImg[0].clientWidth;
carouselSlide.style.transform= 'translateX(' + (-size * counter) + 'px';


NextButt.addEventListener('click', ()=>{
    if(counter>=carouselImg.length-1){return};
    carouselSlide.style.transition ="transform 0.4s ease-in-out"
    counter++;
    carouselSlide.style.transform= 'translateX(' + (-size * counter) + 'px';

});
PrevButt.addEventListener('click', ()=>{
    if(counter<=0){return};
    carouselSlide.style.transition ="transform 0.4s ease-in-out"
    counter--;
    carouselSlide.style.transform= 'translateX(' + (-size * counter) + 'px';

});

carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImg[counter].id ==='lastclone'){
        carouselSlide.style.transition= "none";
        counter= carouselImg.length-2;
        carouselSlide.style.transform= 'translateX(' + (-size * counter) + 'px';
    }
    if(carouselImg[counter].id ==='firstclone'){
        carouselSlide.style.transition= "none";
        counter= carouselImg.length - counter;
        carouselSlide.style.transform= 'translateX(' + (-size * counter) + 'px';
    }
});