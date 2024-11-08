// 평균 구하기
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// 예제코드
// function solution(arr) {
//     var answer = 0;
//     return answer;
// }

function solution(arr) {
    let answer = 0;
    for (let i = 0; i < arr.length; i++) {
        answer += arr[i];
    }
    let newAnswer = answer / arr.length;
    return newAnswer;
}