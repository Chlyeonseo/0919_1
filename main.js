// let tit1 = document.querySelector("h1");
// tit1.style.color = "red";
// tit1.style.fontSize = "100px";

// let tit2 = document.querySelector("h2");
// tit2.style.color = "blue";
// tit2.style.fontSize = "50px";

/*
이런 절차지향적 초급 코드는 일일히 DOM을 제어하기에는 변수 생성부터 특정 기능 구현 로직까지 번거로운 작업을 계속 해야합니다.
만약 대단위 프로젝트 등에서 반복적인 작업을 할 경우 생산성에 큰 문제가 발생
*/

//=>함수로 패키징하여 코드의 가독성과 생산성을 높이려는 노력

// function fontStyle(title,color,size){
//     let tit = document.querySelector(title);
//     tit.style.color = color;
//     tit.style.fontSize = size;
// }
// fontStyle("h1","red","100px");
// fontStyle("h2","blue","50px");
/*
이 작업은 그마나 효율적으로 하기 위하여 함수를 사용하였습니다
하지만 만약 안 쪽의 기능 구현들이 하나하나 복잡한 로직을 수행해야 할 경우
개별적인 함수의 기능이 복잡해지면서 오히려 생산성이 떨어질 수 있다.
*/

//=>기능별로 함수를 쪼개는 노력

// function fontStyle(title,color,size){
//     let tit = document.querySelector(title);
//     // tit.style.color = color;
//     // tit.style.fontSize = size;
//     changeColor(tit,color);
//     changeSize(tit,size)
// }

// function changeColor(el,color){
//     el.style.color = color;
// }
// function changeSize(el,size){
//     el.style.fontSize = size;
// }
// fontStyle("h1","red","100px");
// fontStyle("h2","blue","50px");

//es5 생성자 함수 => 객체를 생성하기 위한 특별한 함수

// function FontStyle(el){
//     //객체를 만들어주는 함수

//     this.el = document.querySelector(el);
// }
// FontStyle.prototype.changeColor = function(color){
//     //상속받게 해줌!//메소드

//     this.el.style.color = color;
// }
// FontStyle.prototype.changeSize = function(size){
//     this.el.style.fontSize = size;
// }

// let tit11 = new FontStyle("h1");
// console.log(tit11);
// let tit22 = new FontStyle("h2");

// tit11.changeColor("red");
// tit11.changeSize("100px");
// tit22.changeColor("blue");
// tit22.changeSize("50px");

/*
생성자함수 (어떤 반복적인 대량의 결과물을 뽑아내기 위한 시스템적인 틀)
=>붕어빵 틀같은 것

생성자 함수는 객체를 만들기 위한 함수인데
그러면 생성자 함수를 통해 생성된 실제적인 결과물 = 인스턴스(객체)

프로토타입
생성자함수 생성시 만들어지는 저장공간
동일한 생성자함수를 통해 생성된 인스턴스들은 모두 동일한 프로토타입을 상속받아 공유합니다.
이렇게 상속으로 공유된 메소드를 사용함으로서
많은 리소스를 아끼고, 생산성을 높일 수 있습니다.
*/

//인스턴스 생성 시 메서드가 무조건 호출되어야 하는 상황일 때

function FontStyle(el,color,size){
    //객체를 만들어주는 함수

    this.el = document.querySelector(el);
    this.changeColor(color);
    this.changeSize(size);
}
FontStyle.prototype.changeColor = function(color){
    //상속받게 해줌!//메소드
    this.el.style.color = color;
}
FontStyle.prototype.changeSize = function(size){
    this.el.style.fontSize = size;
}

new FontStyle("h1","red","100px");
new FontStyle("h2","blue","50px");

//위와 같이 생성자 함수를 생성과 동시에 메소드를 호출하게 된다면
//특정 객체 전용의 메소드를 프로토타입에 등록하여
//기능별로 카테로라이징(그룹화)할 수 있다.

//es5 생성자함수의 단점
//일반함수와 구별이 어려움 -> 암묵적인 규칙 = 대문자 시작 BUT 그래도 어려움
//메서드를 모두 일일히 프로토타입에 등록해야 한다는 불편함

//=> 그 결과 class문법(es6)을 사용하게 된다.