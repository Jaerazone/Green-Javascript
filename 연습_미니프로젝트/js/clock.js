const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();

    const hours = String(date.getHours()).padStart(2,"0"); //시간
    const minutes = String(date.getMinutes()).padStart(2,"0"); //분
    const seconds = String(date.getSeconds()).padStart(2,"0"); //초
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);