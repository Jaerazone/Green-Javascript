        //★★★★함수를 설정할때 헤드위에 스크립트로 설정할수 있다★★★
        //★★★★혹은 하단부 스크립트에 넣는것 , 총 2가지 방법이 있다★★★

        //명시적 함수
        //함수를 호출하기전에 선언문은 head의 script안에 작성
        // 미리준비
        function hi(num) { // num: 매개변수로 사용
            // 부르면 바로 올수 있게 (매개변수)는 넣지 않았다
            document.write(`<p>${num} : hi<p>`);
        }
        function squr (num) { // num: 매개변수로 사용
            return num*num; //return값은 함수의 결과값을 되돌려줌
        }
        // 인수를 몇개 사용하는지 모를때
        // 여러개의 인수가 들어올 때
        function add() {
            //여러개의 인수는 arguments에 배열로 저장
            let count = arguments.length;
            let sum = 0;
            for (num of arguments) {
                //배열이기때문에 for...of사용가능
                sum += num; 
            }
            document.write(`총갯수 : ${count}, 합: ${sum}`);
        }         // console로 확인 가능 // add(1,2,3) 이렇게 적음댐
        