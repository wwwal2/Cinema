const splitToArray = (total) => {
  const elements = [];
  for (let i = 2; i <= total; i += 1) {
    elements.push(i);
  }
  return elements;
};

export default (total, current, sideLength) => {
  let result = splitToArray(total - 1);
  // cut right
  if (current + sideLength < total - 1) {
    result = result.slice(0, current - 2 + sideLength);
    result.push('...');
  }
  // cut left
  if (current - sideLength > 2) {
    result = result.slice(current - sideLength - 1, result.length);
    result.unshift('...');
  }
  // add limits
  result.unshift(1);
  result.push(total);
  return result;
};
