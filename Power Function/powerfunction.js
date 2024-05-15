//Write a recursive function to calculate the result of raising a number to a given power.

function power(base, exponent) {
  if (exponent === 0) {
    //any number raised to power 0 is 1
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

const result = power(5, 3);
console.log(result);
