// 약수의 개수와 덧셈
// 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

function solution(left, right) {
  let result = 0;

  for (let num = left; num <= right; num++) {
    // 약수의 개수가 홀수인지 확인 (완전제곱수인 경우)
    if (Number.isInteger(Math.sqrt(num))) {
      result -= num; // 완전제곱수인 경우 빼기
    } else {
      result += num; // 그 외의 경우 더하기
    }
  }

  return result;
}
