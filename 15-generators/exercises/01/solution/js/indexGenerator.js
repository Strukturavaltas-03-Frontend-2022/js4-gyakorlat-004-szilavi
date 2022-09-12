function* indexGenerator() {
  let i = 1;
  while (true) {
    yield i;
    i++;
  }
}

export default indexGenerator;
