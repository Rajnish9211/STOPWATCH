//Accesing all elements by their id's
let startbutton=document.getElementById('start');
let stopbutton=document.getElementById('stop');
let resetbutton=document.getElementById('reset');
//variables declaration
let hour = 00;
let minute = 00;
let second = 00;
let count = 00;
 
//handling the start button by click
startbutton.addEventListener('click',function(){
    timer=true;
    Stopwatch();
});

// this will handle stop button by click
stopbutton.addEventListener('click', function(){
    timer=false;
    Stopwatch();
});
//this will reset all values of stopwatch
resetbutton.addEventListener('click',function(){
    timer=false;
    hour =0;
    minute =0;
    second=0;
    count=0;
    document.getElementById('hour').innerHTML="00";
    document.getElementById('min').innerHTML="00";
    document.getElementById('sec').innerHTML="00";
    document.getElementById('count').innerHTML="00";
});

//stopwatch function handle all time management
function Stopwatch(){
    if(timer){
        count++;
    if(count==100){
        second++;
        count=0;
    }
    if(second==60){
        
        minute++;
        second=0;
    }
    if(minute==60){
        hour++;
        minute=0;
        second=0;
    }
    let hrString = hour;
    let minString = minute;
    let secString = second;
    let countString = count;

    if(hour<10){
        hrString = "0"+ hrString;
    }
    if(minute<10){
        minString="0"+minString;
    }
    if(second<10){
        secString="0"+secString;
    }
    if(count<10){
        countString="0"+countString;
    }
    //changing value of innerhtml by using their id's
    document.getElementById('hour').innerHTML=hrString;
    document.getElementById('min').innerHTML=minString;
    document.getElementById('sec').innerHTML=secString;
    document.getElementById('count').innerHTML=countString;
    setTimeout(Stopwatch,10);
 }
}
