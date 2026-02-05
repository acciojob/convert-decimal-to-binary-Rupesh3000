function decimalToBinary(num) {
  if (num <= 0) return 0;
  // your code here]

  let ans = [];
  while (num > 0) {
    let bit = Math.floor(num % 2);
    ans.push(bit);
    num = Math.floor(num / 2);
  }
  return ans.reverse().join("");
}
const num = parseInt(prompt("Enter a number."));
alert(decimalToBinary(num));
