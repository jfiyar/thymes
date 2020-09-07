function getPermutation(n, k) {
  /*

  */
  const arr = ["123", "132", "213", "231", "312", "321"];
  arr.map((num) => {
    console.log(num);
    num = num.split("");
    for (let i = 0; i < num.length; i++) {
      num[i] = num[i] - 1;
    }
    num = num.join("");
    const hx10 = parseInt(num, n);
    console.log(hx10);
    return num;
  });
  console.log(n, k);
  let start = "";
  for (let i = 0; i < n; i++) {
    start = start + i;
  }
  console.log(start);
  const x10 = parseInt(start, n + 1);
  console.log(x10);
  const target = x10 + n;
  console.log(target.toString(n + 1));
}
console.log(getPermutation(3, 3));
