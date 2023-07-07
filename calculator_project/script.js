var btn=document.getElementsByClassName("btn");
var result=document.getElementById("result");
var op1=0;
var op2=null;
var operator=null;

console.log(btn);
console.log(result);
for(var i=0;i<btn.length;i++)
{
    btn[i].addEventListener('click',function(){
        var value=this.getAttribute('value');
        console.log(value); //to check value on console for our clarification
        console.log(typeof(value));
        if(value=='+'){
            operator='+';
            op1=parseFloat(result.textContent);
            result.innerHTML="";

        }
        else if(value== '='){
            op2=parseFloat(result.textContent);
            var ans=eval(op1+" "+operator+" "+op2);
            result.innerHTML=ans;
        }
        else{
            result.innerHTML += value;  //store as a string and concates each number entered to make a big number
        }
        console.log(result); //to check result on console for our clarification
    })
}