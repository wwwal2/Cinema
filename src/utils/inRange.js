export default (page = 1, direction = 0, maxLimit = 1) => {
  const newPage = page + direction;
  if (newPage > 0 && newPage <= maxLimit) {
    return newPage;
  }
  return page;
};
