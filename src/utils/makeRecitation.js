export default (array, value) => {
  return array.map((item, index, arr) => {
    if (index + 1 === arr.length) {
      return `${item[value]}.`;
    }
    return `${item[value]}, `;
  });
};
