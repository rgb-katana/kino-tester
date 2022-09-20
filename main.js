function square(x) {
  let string = ``;
  for (let j = 0; j < x; j++) {
    for (let i = 0; i < x; i++) {
      string += `+`;
    }
    if (j == x - 1) {
      // sda
    } else {
      string += `\n`;
    }
  }
  return string;
}

console.log(square(9));
