// 자릿수 더하기
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 예제 코드
// function solution(n) {
//   var answer = 0;

//   // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
//   console.log("Hello Javascript");

//   return answer;
// }

function solution(n) {
  let answer = 0;
  n = n.toString();
  for (let i = 0; i < n.length; i++) {
    answer += parseInt(n[i]);
  }

  return answer;
}
