
var second=0;
function scoreRun(){
    document.getElementById("score").innerHTML="Time:"+" "+second+" "+"seconds";
    second++;
    
};
function start(){
    id=window.setInterval(scoreRun,1000);
};
function stop(){
   window.clearInterval(id);
};
    

function load(){
    start();
    numberfn();
    
};

    function getRandom(min,max)
{
   var a=max-min+1;
    var result=Math.floor(Math.random()*a)+min;
    return result;
};

function createarray(start,end){
    var ar=[];
    for(var i=start;i<=end;i++){
        ar.push(i);
    }
    return ar;
};
var number=createarray(1,20);
 function numberfn(){
    
    for(var j=0;j<20;j++)
    {var randomindex=getRandom(0,number.length-1);
       this.random=number[randomindex];
        number.splice(randomindex,1);
        this.x=document.getElementsByClassName("keys");
        x[j].innerHTML=random;
        x[j].style.background="rgb(255,69,"+(random*10)+")";
       
        }
       };
       var bleep=new Audio()
       bleep.src="bleep.mp3"; 

       var clink=new Audio()
       clink.src="clink.wav"; 
var arra=createarray(1,25);  
function colourChange(index){
    clink.play();
       z=document.getElementsByClassName("keys")[index].innerHTML;
       var k=getRandom(0,number.length-1);
       this.m=arra[k];
       arra.splice(k,1);
       console.log(m);
       if(z==m && z<=5){
         document.getElementsByClassName("keys")[index].innerHTML=m+20;
         document.getElementsByClassName("keys")[index].style.background="rgb(255,69,"+((m+20)*10)+")";
       }else if(z==m && m==25){
        y=document.getElementById("score").innerHTML;
        h=y.match(/\d+/g); 
        document.getElementById("demo").innerHTML="Your Timing is"+" "+h+" "+"seconds &#128516";
        stop();
        document.getElementById("k").style.visibility="visible";
        document.getElementById("kid").style.visibility="visible";
        local(h);
        stp();
        document.getElementsByClassName("keys")[index].innerHTML="&#1285"+(m+20);
        document.getElementsByClassName("keys")[index].style.background = "goldenrod";
        document.getElementsByClassName("keys")[index].innerHTML="&#1285"+(m+20);
        }else if(z==m && m<10){
               document.getElementsByClassName("keys")[index].style.background = "goldenrod";
       document.getElementsByClassName("keys")[index].innerHTML="&#12852"+m;
       }else if(z==m && m>=10){
        document.getElementsByClassName("keys")[index].style.background = "goldenrod";
        document.getElementsByClassName("keys")[index].innerHTML="&#1285"+(m+20);
        } else if(z!=m){
        //document.getElementById("demo").innerHTML="You should click "+m+" but you have clicked "+z+" &#128580 Start the new game";
       // stop();
        arra.unshift(m);
        console.log(arra);
       // document.getElementById("k").style.visibility="visible";
       // document.getElementById("kid").style.visibility="visible";
       // document.getElementsByClassName("keys")[index].style.background = "gray";
        // stp();
       }
    };
 function stp(){
     window.setTimeout(cance,3000);
 };
 function cance(){
    window.document.location="game.html";
 };

    
    function local(l)
    {
        var a = [];
        a = JSON.parse(localStorage.getItem('Etime')) || [];
        a.push(l);
        localStorage.setItem('Etime', JSON.stringify(a));
        
    }