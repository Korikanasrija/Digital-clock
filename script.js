const time = document.getElementById('time');
const timeformat = document.getElementById('timeformat');

document.addEventListener('DOMContentLoaded',()=>{
    setInterval(showTime, 1000);
});

const showTime =() => {
    let date=new Date();

    let hr=date.getHours();
    let min=date.getMinutes();
    let secs=date.getSeconds();
    let msecs=date.getMilliseconds();
    hr=hr<10 ? `0${hr}` : hr;
    min=min<10 ? `0${min}` : min;
    secs=secs<10 ? `0${secs}` : secs;
    msecs=msecs<10 ? `0${msecs}` : msecs;
    
    time.innerHTML = `${hr} : ${min} : ${secs} : ${msecs}`;

    timeformat.innerHTML=hr>12 ? "PM" :"AM";

   //console.log("hours" +hr+"mins"+min+"secs"+secs+"millisecs"+msecs);

}