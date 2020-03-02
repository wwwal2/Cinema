import { calculateRequestProps } from '../../../utils';
import { apiResultsPerPage } from '../../../constants/app';
import Request from './Request';

const request = new Request();

export default async (requestName, requestArgs, cardsPerPage, uiPage) => {
  const layout = calculateRequestProps(uiPage, cardsPerPage, apiResultsPerPage);

  if (layout.startPage === layout.endPage || layout.endRes === 0) {
    const data = await request[requestName](
      layout.startPage,
      ...requestArgs,
    );
    return {
      items: data.results.slice(layout.startRes, layout.startRes + cardsPerPage),
      totalResults: data.total_results,
    };
  }
  const page1 = await request[requestName](
    layout.startPage,
    ...requestArgs,
  );

  const page2 = await request[requestName](
    layout.endPage,
    ...requestArgs,
  );
  const payload1 = page1.results.slice(
    layout.startRes,
    page1.results.length,
  );
  const payload2 = page2.results.slice(
    0,
    layout.endRes,
  );

  return {
    items: payload1.concat(payload2),
    totalResults: page1.total_results,
  };
};
