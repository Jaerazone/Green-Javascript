//html 과 연결하고
//날짜와 시간을 받아와서 시간의 흐름을 표현해보자
const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    //어디서 들고올꺼냐면 date라는 객체를 만들고
    // new Date(현재시간)을 가져와서 date에 넣어줌
    // const date = date.getDate(); //getDate는 날짜를 들고올수있음

    //숫자값을 받아오면 일의자리수는 한자리로 표현
    // 1>>01  padStart(); >> String 객체에서 사용가능
    const hours = String(date.getHours()).padStart(2,"0"); //시간
    const minutes = String(date.getMinutes()).padStart(2,"0"); //분
    const seconds = String(date.getSeconds()).padStart(2,"0"); //초
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}
getClock(); // 실행시키면 1초멈추는게 싫어서 넣어줌
setInterval(getClock, 1000);
