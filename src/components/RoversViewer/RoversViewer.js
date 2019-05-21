// Здесь вам нужно реализовать вью

// Подключите его к редакс роутеру
// Вам потребуются селекторы для получения выбранного сола
// и списка фотографий

// Так же вы будете диспатчить экшены CHANGE_SOL и FETCH_PHOTOS_REQUEST
// Эти экшены находятся в модуле ROVER PHOTOS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './RoversViewer.module.css';
import SelectSol from '../SelectSol';
import RoverPhotos from '../RoverPhotos';
import {
  getPhotos,
  changeSol,
  fetchPhotosRequest,
  getError,
  SOL_MAX,
  SOL_MIN,
  ROVERS,
  getSol
} from '../../modules/RoverPhotos';

class RoversViewer extends Component {
  componentDidMount() {
    this.loadPhotos();
  }

  handleChangeSol = value => {
    const { changeSol } = this.props;
    changeSol(value);
    this.loadPhotos();
  };

  loadPhotos = () => {
    const { fetchPhotosRequest, sol } = this.props;

    ROVERS.forEach(name => {
      fetchPhotosRequest({
        name,
        sol
      });
    });
  };

  renderPhotos() {
    const { sol, getPhotos, getError } = this.props;

    return ROVERS.map(roverName => {
      const roverPhotos = getPhotos(roverName, sol);
      const error = getError(roverName);

      return !roverPhotos ? null : (
        <RoverPhotos
          name={roverName}
          photos={roverPhotos.photos}
          key={roverName}
          error={error}
        />
      );
    });
  }

  render() {
    const { sol } = this.props;

    return (
      <div className={styles.root}>
        <SelectSol
          selectedSol={sol}
          changeSol={this.handleChangeSol}
          max={SOL_MAX}
          min={SOL_MIN}
        />
        <div className={styles.сontainer}>{this.renderPhotos()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sol: getSol(state),
  getPhotos: getPhotos(state),
  getError: getError(state)
});

const mapDispatchToProps = {
  changeSol,
  fetchPhotosRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoversViewer);
