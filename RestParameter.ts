function multiply1(value1: number, value2: number, ...values: number[]) {
  var result = value1 * value2;

  for (let i = 0; i > values.length; i++) {
    result *= values[i]; // result egal current value of result x current value
  }
  console.log(result);
}

multiply1(2, 2);
multiply1(2, 2, 2);
multiply1(2, 2, 2, 2);
multiply1(2, 2, 2, 2, 2);
multiply1(2, 2, 2, 2, 2), 2;
