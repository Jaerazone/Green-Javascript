const todoInput = document.querySelector("#memo-form input");
const todoButton = document.querySelector("#todo-button");

const todoBoard = document.querySelector("#todo-board");

todoButton.addEventListener("click",todoFormButton);

function todoFormButton() {
    //버튼을 눌렀을때 li요소를 생성 및 추가
    const li = document.createElement("li");
    // 체크박스
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    // 체크박스 이벤트리스너 추가
    checkbox.addEventListener("click", todoCheck);

    //내용 : createTextNode
    const text = document.createTextNode(todoInput.value);

    //X버튼
    const button = document.createElement("button");
    button.textContent ="X";
    // X버튼 이벤트리스너 추가
    button.addEventListener("click", todoDelete);

    //li에 체크박스와 내용와 X버튼 추가
    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(button);

    //ul에 li 추가
    todoBoard.appendChild(li);
    
    todoInput.value="";
}

function todoCheck(event) {
    // console.log(event.target)
    const checkbox = event.target;
    if (checkbox.checked) {
        // 체크박스가 checked되면 li의 색을 lightgray로 바꿈
        checkbox.parentNode.style.color="lightgray";
    }
    else {
        // 체크박스가 checked == false 되면 li의 색을 black으로 바꿈
        checkbox.parentNode.style.color="black";
    }
}

function todoDelete(event) {
    //checkbox를 통해 li를 찾아서 삭제(remove)
    event.target.parentNode.remove();
}