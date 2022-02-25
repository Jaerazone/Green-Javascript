//html 파일에서 크립트연결해야함

const loginForm = document.getElementById("login-form");
// getElementById를 이용하면 HTML의 아이디값을 가져올수있다. 대신 아이디값만 쓸수있고
// querySelector는 그안에 세부까지 지정가능해서 querySelector를 더 많이쓴다.
//다른값으로 안바뀌기때문에 상수const 로 해줌
//let으로 들고오면 다른값으로 바뀔수 있기때문에.
//html 파일의 login-form만 들고옴


//전역변수작성임 const
const loginInput = document.querySelector("#login-form input");
//login-form 태그에서 input이라는걸 찾으려고함
//querySelector를 이용하면 CSS 선택자를 이용해서 요소의 첫번째태그를 선택할수있다.
//const loginBtn = document.querySelector("#login-form input[type = 'button']")
//로그인버튼이라고 임시로 만들어줌
//input 이 두개라서 버튼까지 들고와준다

const greeting = document.querySelector("#greeting");
//html의 id를 들고오기때문에 const상수의 이름똑같이해도 상관없음

//querySelectorall은 배열전체를 들고오는것
//querySelector은하나씩 들고오는것 특징은 
//-CSS선택자를 통해서 요소의 첫번째 태그를 선택해서 들고올수있다
///////★★CSS선택자 설명★★★★★★★★★★★★★★★★★★★★★★★★
//전체선택자 *{}, // HTML요소선택자 p // 
//id선택자 id="name" #name   ->#을씀 //
// 클래스는 .class // 그룹은 .class,p
// div p{스타일};  => div 안에 p선택자를 들고오고
//div>p{스타일}; => div 안에 자손선택자를 들고온다
//속성 선택자-> [속성이름="속성값"]
///////★★CSS선택자 설명★★★★★★★★★★★★★★★★★★★★★★★★

const memoFormShow = document.querySelector("#memo-form");
//himl의 id인 memo-form을 들고왔다
//아래 함수이벤트안에 클래스리스트를 가져와 hidden을 제거했음.(참고)


//버튼을 눌렀을 때 INPUT의 값을 가져오기
//첫번째로 input의 값을 가져오는 함수
function onLoginSumit(event) { //sumit을 받아오기때문에 이름 이렇게 지음 ㅋㅋ
    //console.dir(loginInput); //dir 디렉토리의 약자
    //태그안에 있는 모든정보를 알수있다 콘솔창에서 value값, 
    //그리고 다른 속성값들을 확인가능

    event.preventDefault(); // 창을 새로띄우지않음 (이벤트를 막는다!)
    //이벤트가 실행되었을때 새로고침이 되지않도록 해주는 메소드

    const username = loginInput.value;
    //loginInput에서 value값을 가져오기
    //console.log(loginInput.value);
    // 전역변수로 작성해준 
    //const loginInput = document.querySelector("#login-form input");
    //에서 가져와 주었습니다

    greeting.innerHTML =`반갑습니다. ${username}님`; // `` 백틱사용
    //동일코드
    //greeting.innerHTML = "반갑습니다 "+username+"님";

    loginForm.classList.add("hidden");
    // 이걸 작성해주면 class="hidden"이라는 속성으로 들어가게됨
    //반갑습니다를 출력한 이후 또는, 그전에 코드 작성해도됨
    //이 디스플레이에서 로그인폼을 없애고 싶음
    
    memoFormShow.classList.remove("hidden");
    //(참고)memoFormShow 의 (hidden)클래스리스트를 가져와서 제거 할예정
}

// 두번째로 addEventListener를 이용해서 어디에 이벤트가 발생하며, 
// 어떤 함수를 실행시켜야하는지를 체크해야함.

loginForm.addEventListener("submit", onLoginSumit);
//loginBtn.addEventListener("click", onLoginSumit);
//button은 click이라는 이벤트!행동을해서 click넣어줌
// click을 실행했을때 이벤트리스너가 실행됨. 
//이 파일을 보면 위에서 아래로 순차적 실행된다는걸 참고
//이벤트 리스너 : 이벤트가 발생하는지 듣고 있는 메소드
// -> 이벤트가 발생할때 그 함수를 실행시켜주는 역할임