export default (defaultOptions) => {
  try {
    const loaded = JSON.parse(localStorage.getItem('cinema'));
    return loaded || defaultOptions;
  } catch (e) {
    return false;
  }
};
