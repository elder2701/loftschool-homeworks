import React, { Component } from 'react';

const PostSerial = props => {
  return (
    <div className="show">
      <img className="show-image" src={props.urlfig} alt="" />
      <h2 className="show-label t-show-name">{props.name}</h2>
      <p className="show-text t-show-genre">
        <b>Жанр: </b> {props.genre}
      </p>
      <p className="show-text t-show-summary">{props.summary}</p>
    </div>
  );
};

class Show extends Component {
  state = {
    showId: '',
    data: {}
  };

  static getDerivedStateFromProps(props, state) {
    console.log(props, state);
    if (props.showId !== state.showId) {
      console.log(props, state);
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
    return Object.keys(this.state.data).length ? (
      <PostSerial
        urlfig={this.state.data.image.medium}
        name={this.state.data.name}
        genre={this.state.data.genres.toString()}
        summary={this.state.data.summary}
      />
    ) : null;
  }
}

export default Show;
