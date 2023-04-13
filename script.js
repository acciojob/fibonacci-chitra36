function fibonacci(num) {
// your code here
	if(num <= 2){
		return num-1;
	}
	
	let n1 =0; // 1
	let n2 =1; // 2
	var next = 0; // 2
	var number = parseInt(num);
	for(i =3;i <=number ; i++){
		next = n1+n2;
		n1 = n2;
		n2 = next;
	
	}
	return next;
	
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
