export default (key) => {
  return /^\d+$/.test(key) ? key : key.substring(0, key.length - 1);
};
