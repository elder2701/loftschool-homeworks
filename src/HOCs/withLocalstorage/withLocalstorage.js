import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (name, data) => Todo => {
  //save(name, data);
  return class extends Component {
    state = {
      newValue: {}
    };

    handleSaveData = dataSave => {
      this.setState({ newValue: dataSave });
    };

    render() {
      save(name, this.state.newValue);
      this.setState({ newValue: {} });
      let dataFromStorage = load(name);
      return (
        <Todo savedData={dataFromStorage} saveData={this.handleSaveData} />
      );
    }
  };
};

export default withLocalstorage;
