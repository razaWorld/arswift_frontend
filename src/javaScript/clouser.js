function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3
function outer() {
  let name = "Ali";

  function inner() {
    console.log(name);
  }

  return inner;
}

const myFunc = outer();
myFunc(); // Output: "Ali"