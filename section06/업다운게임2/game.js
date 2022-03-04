//사용할 변수
let ran = 0;
let count = 1;

//윈도우가 로드된 후 실행하기위함.
window.onload = function () {
    // 원하는 객체 불러오기
    const userNum = document.querySelector("#user_num");    // 입력 받는 곳
    const startButton = document.querySelector("#start_button");    // 시작 버튼
    const gameForm = document.querySelector("#game_form");  // 입력 받는 form(submit)
    gameForm.firstElementChild.disabled = true; // disabled 사용할수 없다=참으로 되어있어서
    gameForm.lastElementChild.disabled = true; //막혀있다고 생각하면됨.

    // 원하는 객체에 이벤트 리스너 호출
    startButton.addEventListener('click', gameStart);
    gameForm.addEventListener('submit', gameCheck);
    //form요소는 submit 이벤트를 이용하여 함수를 실행시킬수있다.
}

// 게임 시작
// 랜덤 숫자를 할당하고 count값 및 창의 내용 초기화
function gameStart () {
    ran = Math.floor ( Math.random()*100 + 1 ); // 0~99까지의 값이 랜덤으로 들어간다, 1~100하고싶으면 +1하면됨!, floor 정수
    console.log(ran);
    count = 1;

// 입력 받는 form(submit)
    const gameForm = document.querySelector("#game_form");  
    gameForm.firstElementChild.disabled = false; // disabled 사용할수 없다=참으로 되어있어서
    gameForm.lastElementChild.disabled = false; //막혀있다고 생각하면됨.

    const explan = document.querySelector("#explan");
    explan.textContent = "게임이 시작되었습니다. 1~100사이의 수를 입력하세요";
}

//랜덤 숫자와 입력된 값 확인
function gameCheck(e) {
    // submit으로 들고오면 창 새로고침이 발생
    e.preventDefault(); //새로고침을 막아줌
    
    const explan = document.querySelector("#explan");
    const userNum = document.querySelector("#user_num");
    const result = document.querySelector("#result");
    // // DOM객체들고오기
    const userNumValue = userNum.value; // 길어서 이렇게 변수 선언해도되고 안하고 그대로 써도된다
    
    if( ran > userNum.value ) {
            explan.textContent = `${userNum.value} 보다 더 크다`;
    }
    else if (ran < userNum.value) {
        explan.textContent = `${userNum.value} 보다 더 작다`;
    }
    else if (ran == userNum.value) {
        explan.textContent = `${userNum.value}! 정답입니다`;
        userNum.disabled = true;
        userNum.nextElementSibling.disabled = true;

        // 새로운 노드 생성하여 아래에 횟수 기록 count
        // prompt를 열어서 이름입력
        //



    }
    //그 DOM객체의 값으로 ran값 비교
    //if문을 이용해서 DOM객체값 수정
    document.querySelector("#result").textContent = `${count}번째 입니다`;
    count++;
    userNum.value =""; // 입력칸, 내가 입력한 숫자 없애기

} 