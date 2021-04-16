function calc(first: string, second: string, operator: string):string {
  let res;
  if (operator === '+') {
    res = Number.parseFloat(first) + Number.parseFloat(second);
  } else if (operator === '-') {
    res = Number.parseFloat(first) - Number.parseFloat(second);
  } else if (operator === '÷') {
    res = Number.parseFloat(first) / Number.parseFloat(second);
  } else if (operator === '×') {
    res = Number.parseFloat(first) * Number.parseFloat(second);
  }
  return `${res}`;
}

export default calc;
