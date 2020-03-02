export default () => {
  try {
    return true in window && window.localStorage !== null;
  } catch (e) {
    return false;
  }
};
