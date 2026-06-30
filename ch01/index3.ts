// 이렇게 타입스크립트에 함수 호툴이나 변수에 값을 제공할 수 있는지 여부를 확인하는 것은 할당 가능성이라 함

//3. 타입 애너테이션
// 때론 변수에 타입스크립트에 초깃값이 없을 경우 타입스크립트는 나중에 사용할 변수 초기 타입을 파악하려 하지않음
// 기본적으로 변수를 암묵적인 any 타입으로 간주
// 즉, 변수는 세상의 모든 것이 될 수 있음/초기 타입을 유추할 수 없는 변수는 진화하는 any라고 부름

let user; // 타입: any 하지만 이렇게 사용한다면 사용하는 의미 없음(그럴바엔 자바스크립트)
// let user: string;

user = "이시연"; // 타입: string
user.toUpperCase();

user = 1000;
user.toPrecision(); // 문자열 메서드 - 문자열을 전부 대문자로 변경(원본을 직접 변경하지 않고 새로운 문자열을 반환)
// user.toUpperCase(); // 숫자 메서드 - 숫자를 지정한 유효 자릿수만큼 문자열로 변환
// const price = 123.567
// console.log(price.toPrecision(6)); = 123.5 지정한 자릿수는 타입 외에 는 포함하지 않음(소숫점 포함x)

// 숫자가 작으면 지수 표기법이 같이 나올 수 있음
// 1e+2 = 100 이라는 의미
// console.log(price.toPrecision(1)); = "1e+2"
// console.log(price.toPrecision(2)); = "1.1e+2"
// console.log(price.toPrecision(3)); = "123"

let a = 3 + "5";
console.log(a);
