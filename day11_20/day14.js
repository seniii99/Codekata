// 약수의 합
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 예제코드
// function solution(n) {
//     var answer = 0;
//     return answer;
// }

function solution(n) {
  let answer = [];
  let newAnswer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }
  for (let i = 0; i < answer.length; i++) {
    newAnswer += answer[i];
  }

  return newAnswer;
}
