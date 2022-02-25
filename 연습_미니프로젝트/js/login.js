//html 파일 연결완료

const loginForm = document.getElementById("login-form");
// 값을 넣으면 새로고침이 되기때문에
// 이벤트 함수로 설정을 변경해본다

// 전역변수로 작성함
const loginInput = document.querySelector("#login-form input");

const greeting = document.querySelector("#greeting");

const memoFormShow = document.querySelector("#memo-form");

function onLoginSubmit(event) {
    // submit을 받아와본다
    event.preventDefault(); 
    //이벤트실행시 새로고침안하고 그대로 진행됨
    const username = loginInput.value;
    // 전역변수로 작성해준 
    //const loginInput = document.querySelector("#login-form input");
    //에서 가져와 주었습니다
    greeting.innerHTML =`반갑습니다. ${username}님`;
    
    loginForm.classList.add("hidden");
    
    memoFormShow.classList.remove("hidden");
}

loginForm.addEventListener("submit", onLoginSubmit);
//submit 버튼을 누르면 , 위 이벤트함수가실행됨