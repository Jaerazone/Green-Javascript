//사용할 변수
let ran = 0;
let count = 1;

//윈도우가 로드된 후 실행하기위함.
window.onload = function () {
    // 원하는 객체 불러오기
    const userNum = document.querySelector("#user_num");
    const startButton = document.querySelector("#start_button");
    const gameForm = document.querySelector("#game_form");
    gameForm.firstElementChild.disabled = true;
    gameForm.lastElementChild.disabled = true;

    // 원하는 객체에 이벤트 리스너 호출
    startButton.addEventListener('click', gameStart);
    gameForm.addEventListener('submit', gameCheck);
}

// 게임 시작
// 랜덤 숫자를 할당하고 count값 및 창의 내용 초기화
function gameStart () {

}

//랜덤 숫자와 입력된 값 확인
function gameCheck(e) {
    e.preventDefault();

} 