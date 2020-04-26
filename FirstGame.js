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
var number=createarray(1,25);
 function numberfn(){
    
    for(var j=0;j<25;j++)
    {var randomindex=getRandom(0,number.length-1);
       this.random=number[randomindex];
        number.splice(randomindex,1);
        this.x=document.getElementsByClassName("keys");
        x[j].innerHTML=random;
         
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
      if(z==m && m<10){
               document.getElementsByClassName("keys")[index].style.background = "goldenrod";
       document.getElementsByClassName("keys")[index].innerHTML="&#12852"+m;
       }else if(z==m && m>=10){
        document.getElementsByClassName("keys")[index].style.background = "goldenrod";
        document.getElementsByClassName("keys")[index].innerHTML="&#1285"+(m+20);
        } else if(m==null){
        y=document.getElementById("score").innerHTML;
        h=y.match(/\d+/g); 
        document.getElementById("demo").innerHTML="Your Timing is"+" "+h+" "+"seconds &#128516";
        stop();
        document.getElementById("k").style.visibility="visible";
        document.getElementById("kid").style.visibility="visible";
        local(h);
        stp();
        }else if(z!=m){
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
 function local(l){
    if (typeof(Storage) !== "undefined") {
        if (l < JSON.parse(localStorage.getItem('highscore'))) { 
            localStorage.setItem('Etime',JSON.stringify(l));
            }
      } else {
        alert(" Sorry! No Web Storage support..");
      }
      
    
    }