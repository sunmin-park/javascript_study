# javascript&jquery
* 제이쿼리는 자바스크립트에서 DOM에 관한 부분만 쉽게 쓰는 것
## 객체, 속성, 메소드, 이벤트
* 객체란? script 적용 대상(태그 또는 다양한 변수 가능)
* 속성이란? 객체가 가지고 있는 고유 속성(img가 객체라면 src가 속성)
* 메소드란? 객체를 특정 조건에서 실행하고 싶은 경우 실행명령어(함수)
* 이벤트란? 사용자와 상호 작용하는 동작(마우스오버, 터치, 클릭 등)
### 객체, 속성, 메소드, 이벤트 기본 문법
* 객체.속성  >> 객체는 속성 뒤에
* 객체.속성.속성  >> 객체 뒤의 속성은 갯수 제한없이 쓸 수 있음
* 객체.속성.메서드()
* 객체.속성.속성.메서드()
* 객체.메서드(객체.속성)
* 객체.메서드(객체.속성.속성.메서드())
### 객체, 속성, 메서드 문법 뜻
* `객체.속성` 속성 기존 값 읽기
* `객체.메서드()` 메서드를 실행하라
* `객체.속성="값"` 오른쪽 값을 왼쪽 객체.속성에 새로 대입하라
* `<img src="./img/white.png">`
* `img.src;` white 이미지 읽기
* `img.src = "./img/black.png";` white에 black을 대입 
----
<!-- 언제 시작해서 어떤 프로그램 썼고
어떤 페이지를 작업했고 어려운 점은 무었이었는지
리드미에 적어 두면 죠음 -->
<!-- css 작업 하고 js 작업 들어 가야 함 -->
## 일반 함수와 화살표 함수
* `function(){}` 일반함수
* `()=>{}` 화살표 함수(ES6 부터 추가된 함수 축약형)
### 일반함수와 화살표 함수의 사용 예시 및 주의사항
* 화살표함수는 제이쿼리에서 사용할 수 없다.
* 일반함수에서는 `this` 접근 객체(현재 대상)으로 인식한다.
* 화살표함수에서는 `this` 키워드를 인식하지 못한다.
* 일반함수 함수 생성 : `function 함수명(){실행결과}`
* 화살표함수 생성 : `const 함수명=()=>{실행결과}`