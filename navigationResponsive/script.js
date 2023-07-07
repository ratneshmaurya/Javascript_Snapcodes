//we want is when we click on burger , nav link ocuupies class of nav-active

const navSlide=()=>{
    let burger=document.querySelector('.burger');
    let nav=document.querySelector('.nav-links');
    let navLinks=document.querySelectorAll('.nav-links li');

    console.log(burger);
    console.log(nav);
    console.log(navLinks);


    //on clicking burger , .nav-link class aajaae and uske andrr ke navlinks animate krte hue baad me aaye;
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active'); //click ho toh add, again click pe fade
        burger.classList.toggle('toggle');
        navLinks.forEach((link,index)=>{
            console.log(link);
            if(link.style.animation){
                link.style.animation="";
            }
            else{
                link.style.animation=`navLinkFade 0.5s ease forwards ${index/5 +0.5}s`;
            }
        });
    });
}
navSlide();