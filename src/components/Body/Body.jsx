import React from 'react';
import bodyStyles from '../../css_modules/bodyStyles.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=80ab1c9954395b4f678edc2f29c0a276&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2018&vote_average.lte=8')
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
      });
  }

  render() {
    return (
      <div className={bodyStyles.pageBody}>
        body
      </div>
    );
  }
}
