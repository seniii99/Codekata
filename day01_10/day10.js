// 배열의 평균값
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

// 예제코드
// function solution(numbers) {
//     var answer = 0;
//     return answer;
// }

function solution(numbers) {
    let answer = 0;
    for (let i = 0; i < numbers.length; i++) {
        answer += numbers[i]; 
    }
    let newAnswer = answer / numbers.length;
    return newAnswer;
}