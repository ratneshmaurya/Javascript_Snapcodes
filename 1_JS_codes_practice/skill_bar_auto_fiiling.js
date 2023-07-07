//--------------------------------------------------------------
//-----------for skill progress animation-----------------------

var allSkills=document.querySelectorAll(".skill-progress > div");
window.addEventListener('scroll',skillFill);
var animationDone=new Array(allSkills.length);  //for each skill level ,sbka alag alag lena pdega becoz 
//jroori nhi viewport me sb ek saath aaye , kuchh neeche bhi reh skte at a given time
for(let i=0;i<allSkills.length;i++)
{
    animationDone[i]=false; //making initially false for all , that represent no animation done for any skills;
}

function initialFill() //to make 0% skills for each skill
{
    for(let i=0;i<allSkills.length;i++)
    {
        allSkills[i].style.width=0+'%';
    }
}
initialFill();//calling function;


function skillFill(){
    for(let i=0;i<allSkills.length;i++)
    {
       var skillCoordinate= allSkills[i].getBoundingClientRect();
       if(!animationDone[i]&&skillCoordinate.y<window.innerHeight)//means jaise hi respective
       // skil section viewport me aaye
       {
            animationDone[i]=true;
            let skillWidth=0;
            let targetWidth=allSkills[i].getAttribute('data');
            var interval2=setInterval(function(){
                if(skillWidth>=targetWidth){
                    clearInterval(interval2);
                    return;
                }
                skillWidth++;
                allSkills[i].style.width=skillWidth+'%';
            },15);
       }
       else if(skillCoordinate.y>window.innerHeight){
           animationDone[i]=false;
           allSkills[i].style.width=0+'%';  //again call function for each respective skill
           //to make 0% skill level----- here don't calling initialfill() because it will make 0% skill
           //for all , but hme sirf uska krna jo neeche hide ho jaae window se naaki sbka;
       }
    }
}
//----------------------------------------------------------------
//----------------------------------------------------------------