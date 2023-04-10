function fibonacci(num) {
// your code here
	 [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b]
  }
}

// instantiate the fib generator
const fib_gen = fibonacci();

// get first 10 numbers
for (let i = 0; i < 10; i++) {
  console.log(fib_gen.next().value);
}

module.exports = fibonacci;
