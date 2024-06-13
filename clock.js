const events=["Its Anniversay My ","Happy Birthday My Cat "]
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let day=document.getElementById("date")
let month=document.getElementById("month")
let year=document.getElementById("year")

const eventToday=document.getElementById("event-today")

const monthName=["January","February","March","April","May","June","July","August","September","October","November","December"]


setInterval(function(){
    let time = new Date();
    hrs.innerHTML = (time.getHours() < 10 ? '0':'') + time.getHours();
    min.innerHTML = (time.getMinutes() < 10 ? '0':'') + time.getMinutes();
    sec.innerHTML = (time.getSeconds() < 10 ? '0':'') + time.getSeconds();

    day.innerHTML=(time.getDate()<10?'0':'')+time.getDate();
    month.innerHTML=monthName[time.getMonth()];
    year.innerHTML=time.getFullYear();


    if(time.getDate()===3){
        eventToday.innerHTML="Its Anniversary My "
    }else if(time.getDate()===18 && time.getMonth()===8){
        eventToday.innerHTML=events[1]
    }else{
        eventToday.innerHTML="I Love You My Cat ";
    }
},1000);
