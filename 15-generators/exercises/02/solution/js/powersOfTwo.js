function* powersOfTwo() {
  let number = 2;
  while (true) {
    yield number;
    number *= 2;
  }
}

export default powersOfTwo;
