//------------------------------------------------------
//--------------for smooth scrolling--------------------

var navMenuAnchorTags=document.querySelectorAll('.nav-menu li a'); //accessing all anchors tags here;
console.log(navMenuAnchorTags);//to check value only
for(var i=0;i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault(); //to prevent the default event of quick rolling of anchor tag
        var targetSectionId=this.getAttribute('href');
        console.log(targetSectionId); //for checking whether we r correct or not;
        var targetSectionId=targetSectionId.substring(1);//retrun whole except first character , becoz first one is #
        var targetSection=document.getElementById(targetSectionId); //now we got the desired target section where 
                                //we have to stop scrolling once we got to there
        
        var interval=setInterval(function(){
            var coordinates=targetSection.getBoundingClientRect(); //again and again have the coordinates value of that section
            if(coordinates.y<=0){
                clearInterval(interval); //once reach there stop there
                return;
            }
            window.scrollBy(0,50); //move by 50 px until reach to that section
        },20);

    })
}
