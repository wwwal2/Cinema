export default (key) => {
  return (/^\d+$/.test(key) || key === '');
};
