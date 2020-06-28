const Slide= document.querySelector('.slide');
const carouselImg= document.querySelectorAll('.note');

const PrevButt= document.querySelector('#prev');
const NextButt= document.querySelector('#next');

let counter= 1;
const size= carouselImg[0].clientWidth;
Slide.style.transform= 'translateX(' + (-size * counter) + 'px';


NextButt.addEventListener('click', ()=>{
    if(counter>=carouselImg.length-1){return};
    Slide.style.transition ="transform 0.3s ease-in-out"
    counter++;
    Slide.style.transform= 'translateX(' + ( -size*counter)+ 'px';

});
PrevButt.addEventListener('click', ()=>{
    if(counter<=0){return};
    Slide.style.transition ="transform 0.3s ease-in-out"
    counter--;
    Slide.style.transform= 'translateX(' + (-size*counter) + 'px';

});

Slide.addEventListener('transitionend', ()=>{
    if(carouselImg[counter].id ==='lastclone'){
        Slide.style.transition= "none";
        counter= carouselImg.length-2;
        Slide.style.transform= 'translateX(' + (-size * counter) + 'px';
    }
    if(carouselImg[counter].id ==='firstclone'){
        Slide.style.transition= "none";
        counter= carouselImg.length - counter;
        Slide.style.transform= 'translateX(' + (-size * counter) + 'px';
    }
});