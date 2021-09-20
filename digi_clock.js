function clock(){
    var hours=document.getElementById("hour");
    var minutes=document.getElementById("minutes");
    var seconds=document.getElementById("seconds");
    var ampm=document.getElementById("ampm");

    var h=new Date().getHours();
    var m=new Date().getMinutes();
    var s=new Date().getSeconds();
    var am = "AM";

    if (h>12){
        h=h-12;
        var am="PM"
    }

    if (h<10){
        h = "0"+h
    }
    if (m<10){
        m ="0"+ m
    }
    if (s<10){
        s ="0"+s
    }


    hours.innerHTML=h;
    minutes.innerHTML=m;
    seconds.innerHTML=s;
    ampm.innerHTML = am;
    }
    var interval=setInterval(clock,1000);


function start(){

}

clock.onclick = function() {
    if(pause){
      theClock = initClock();
    } else {
      clockTime = 'stop';
      clock.innerText = clockTime;
      clearInterval(theClock);
   }
    pause = !pause;
  };


function stop(){
    if (setTimeout = clock) {
        currentTime = "stop";  
    document.querySelector('clock').onclick = stop();   
    } 
  
    
}


function Continue(){
    
}