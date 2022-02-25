//html 파일에서 id 메모보드 연결
const memoBoard = document.querySelector("#memo-board");

const memoForm = document.querySelector("#memo-form");
const memoInput = document.querySelector("#memo-form input");
//memo-form과 그안의 input 을 들고옴
//이 두값을 memo-board으로 가져와서 실행시킬예정

const savememo = ["미리 만들어진 메모입니다1",
                    "미리 만들어진 메모입니다2",
                    "한번더 추가합니다3"
                ];
//문자열을 배열로 만들어줌
//이걸 추가할 공간을 만들어줄 예정
//아래 for문으로 작성

//아래 두 const예시로써준거임 무시해두댐
//const saveTime = [];
//const savememoform = [
//    {memo:"메모", time:"12:08"},
    //{memo:"메모2", time:"12:09"}
//]; 
// const savetime =[]; 이걸 사용해서 하는것보다 , 
// 규칙을 만든 배열을 만들어 다같이 합치는게 더 보기좋다

//아래for문임.
for (let m of savememo) {
    let memo = document.createElement("div");

    memoBoard.appendChild(memo);
    memo.innerHTML = m;
}


function memoFormSubmit (event) {
    event.preventDefault();
    //자동으로 실행되는 이벤트를 막아줌
    console.log(memoInput.value);
    // 잘실행되는지 콘솔창에서 확인할수있다

    let memo = document.createElement("div"); 
    //createElement를 통해 말그대로 요소 생성만해줌
    memoBoard.appendChild(memo);
    //새로운 요소(태그)를 만들어서 memo-board(div요소)에 추가
    //버튼을 누를때마다 요소를 만들게되기때문에
    //아까처럼 const 상수값으로 넣어주면 값넣을때마다 새로생성되기때문에 오류걸림
    //그래서 let으로 값넣어준다
    memo.innerHTML = memoInput.value; //화면에 출력해줌, 사용자가 입력해둔값을 아래
    memoInput.value = ""; // "빈칸" 이라는 문자열로 재할당해줌
    console.dir(memoInput);
    memoInput.autofocus = true; // 빈칸에 입력후 엔터하면 커서다시생성되게함
    //추가된 input 요소의 속성
    //autofocus 알아보기
    //required placeholder multiple
    
}
//memoForm 눌렀을때 새로고침이 되면 안되기때문에 이벤트를 받아온다

memoForm.addEventListener("submit", memoFormSubmit);
//submit을 눌렀을때 만들어준 memoFormSubmit이 실행되도록한다



