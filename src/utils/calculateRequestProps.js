export default (uiPage, cardsPerPage, apiResultsPerPage) => {
  const endResult = uiPage * cardsPerPage;
  const startResult = endResult - cardsPerPage;

  const startPage = Math.floor(startResult / apiResultsPerPage) + 1;
  const endPage = Math.floor(endResult / apiResultsPerPage) + 1;

  const startRes = Math.round(((startResult / apiResultsPerPage) % 1) * apiResultsPerPage);

  const endRes = Math.round(((endResult / apiResultsPerPage) % 1) * apiResultsPerPage);

  return {
    startPage,
    startRes,
    endPage,
    endRes,
  };
};
