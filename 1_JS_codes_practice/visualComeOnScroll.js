function scrollView(){
    var text=document.querySelector('.intro-text');
    var position=text.getBoundingClientRect().top;
    var windowHeight=window.innerHeight /1.3; //halfing the hieght
    var animationDone=false;
    if(!animationDone && position<windowHeight){
        text.classList.add('appear');
    }
    else if(position>windowHeight)  //agr text neeche aa jaae then next time animation fir se ho jaae , uske liye
    {
        animationDone=false;
        text.classList.remove('appear'); //when text comes again neeche then dubara text ko hide kr de
    }
}
window.addEventListener('scroll',scrollView);