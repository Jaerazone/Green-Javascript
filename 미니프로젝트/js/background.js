//html 과 연결하고
//배경을 만들어야해서 img 파일을 채워넣어보자

const images = ["0.jpg","1.jpg"]; 
//배경이미지를 배열로 들고온다

const choseImage = images[ Math.floor(Math.random()*images.length)];
// 이미지 파일 이름을 선택해서 들고오려고함, 랜덤으로!
// url에 랜덤하게 사진을 들고와야하는데 
//math random을 이용해서 랜덤으로 사진보이게할거임
//원하는 숫자를 랜덤으로 보이게해주는데
// Math.random은 0.xx ~ 1미만의 소수까지 나오기때문에 
// Math.floor가 정수형으로 표현되게함. 0,1만 출력
// image.length 배열의 길이는 현재 2임
// 정수로배출( 랜덤소수*배열길ㅇㅣ) 를 뜻함

// let index =Math.floor(Math.random()*image.length);
// const choseImage = image[index];
// 위2줄 똑같은코드임

const bodyBackground = document.querySelector("body");
//바디를 불러왔음

bodyBackground.style.background = `url(./img/${choseImage})`;//이미지 파일이름 추가
//CSS style을 이용해서 bodyBackground에 추가
//style =  " background : url= "./img/0.jpg";"