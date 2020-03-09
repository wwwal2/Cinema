export default class Request {
  constructor() {
    this.key = '80ab1c9954395b4f678edc2f29c0a276';
    this.basicUrl = 'https://api.themoviedb.org/3/';
    this.discoverUrl = `${this.basicUrl}discover/movie?api_key=${this.key}&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false`;
    this.genresUrl = `${this.basicUrl}genre/movie/list?api_key=${this.key}&language=en-US`;
    this.detailsUrl = `${this.basicUrl}movie/`;
    this.popularUrl = `${this.basicUrl}movie/popular?api_key=${this.key}&language=en-US&page=`;
    this.findUrl = `${this.basicUrl}search/movie?api_key=${this.key}&language=en-US`;
    this.keyNames = [
      '&page=',
      '&primary_release_year=',
      '&with_genres=',
      '&vote_average.gte=',
      '&vote_average.lte=',
    ];
  }

  async getData(url) {
    const data = await fetch(`${url}`);

    if (!data.ok) {
      return 'Request failed';
    }

    return data.json();
  }

  getMovies(...args) {
    const req = args.reduce((acc, curr, index) => {
      if (curr !== ' ') {
        acc = acc + this.keyNames[index] + curr;
        if (index === 3) {
          acc = acc + this.keyNames[4] + (Number(curr) + 0.9);
        }
        return acc;
      } return acc;
    }, this.discoverUrl);

    return this.getData(req);
  }

  getPopular(page = 1) {
    return this.getData(`${this.popularUrl}${page}`);
  }

  getGenres() {
    return this.getData(this.genresUrl);
  }

  getDetails(id) {
    return this.getData(`${this.detailsUrl}${id}?api_key=${this.key}&language=en-US`);
  }

  findMovie(page, query) {
    return this.getData(`${this.findUrl}&query=${query}&page=${page}&include_adult=false`);
  }
}
