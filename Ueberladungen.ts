function add(value1: string, value2: string); //{} das hier erstmal weg lassen
function add(value1: number, value2: number); //{} auch erstmal weg lassen
function add(value1: any, value2: any) {
  if (typeof value1 === "string") {
    value1 = parseFloat(value1);
  }
  value2 = +value2;
  var result = value1 + value2;
  console.log(result);
}

// zeite variante
function multiply(value1: number | string, value2: number | string) {
  value1 = +value1;
  value2 = +value2;
  var result = value1 * value2;
  console.log(result);
}

add(3, 5);
add("3", "5");

// NO GO --> add(2, "5");  und add(3, true);

multiply(5, 10);
