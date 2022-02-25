//html 연결시키기

const memoBoard = document.querySelector("#memo-board");

const memoForm = document.querySelector("#memo-form");
const memoInput = document.querySelector("#memo-form input");


const savememo = ["미리 만들어진 메모쟝1",
                    "미리만든메모장 2",
                    "한번더 추가 셋~3"
                ];

for (let m of savememo) {
    let memo = document.createElement("div");
    memoBoard.appendChild(memo);
    memo.innerHTML = m;
}

function memoFormSubmit (event) {
    event.preventDefault();
    // 이벤트막아줌, 새로고침 안되게
    console.log(memoInput.value);

    let memo = document.createElement("div");
    memoBoard.appendChild(memo);
    memo.innerHTML = memoInput.value; //화면에출력
    memoInput.value="";
    memoInput.autofocus = true;//엔터입력후 다시 커서생성
}   


memoForm.addEventListener("submit", memoFormSubmit);