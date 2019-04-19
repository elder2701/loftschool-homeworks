import React, { Component } from 'react';

const PostSerial = ({ urlfig, name, genre, summary }) => {
  return (
    <div className="show">
      <img className="show-image" src={urlfig} alt="" />
      <h2 className="show-label t-show-name">{name}</h2>
      <p className="show-text t-show-genre">{genre}</p>
      <p className="show-text t-show-summary">{summary}</p>
    </div>
  );
};

class Show extends Component {
  state = {
    showId: '',
    data: null
  };

  static getDerivedStateFromProps(props, state) {
    if (props.showId !== state.showId) {
      return { showId: props.showId };
    }
    return null;
  }

  componentDidUpdate(prevProps) {
    if (this.state.showId !== prevProps.showId) {
      let url = `http://api.tvmaze.com/singlesearch/shows?q=${
        this.state.showId
      }`;
      fetch(url)
        .then(res => res.json())
        .then(film => this.setState({ data: film }));
    }
  }

  render() {
    if (!this.state.data)
      return <p className="show-inforation t-show-info">Шоу не выбрано</p>;
    const { summary, image, name, genres } = this.state.data;
    const regExpression = /<\/*[a-z]>/g;
    let sumStr = summary.replace(regExpression, '');
    let genStr = 'Жанр: ' + genres.toString().replace(/,/g, ', ');
    return (
      <PostSerial
        urlfig={image.medium}
        name={name}
        genre={genStr}
        summary={sumStr}
      />
    );
  }
}

export default Show;
