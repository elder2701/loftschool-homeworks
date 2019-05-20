// Реализуйте страницу поиска.
import styles from './Search.module.css';
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import ShowPreview from '../ShowPreview';
import { getIsFetching, getResult, getError } from '../../reducers/search';
import { searchRequest } from '../../actions';

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.

class Search extends PureComponent {
  state = {
    serial: ''
  };

  handleChange = e => {
    const value = e.target.value;
    this.setState({ serial: value });
  };

  handleClick = () => {
    const { serial } = this.state;
    const { searchRequest } = this.props;

    if (serial) {
      searchRequest(serial);
    }
    this.setState({ serial: '' });
  };
  render() {
    const { serial } = this.state;
    const { result, isFetching, error } = this.props;
    if (isFetching) return <p>Выполняется поиск...</p>;
    if (error) return <p>Произошла сетевая ошибка</p>;

    return (
      <Fragment>
        <div className={styles.previewList}>
          <input
            onChange={this.handleChange}
            placeholder="Haзвание сериала"
            className={styles.input}
            value={serial}
          />
          <div className={styles.buttonWrapper}>
            <button className={styles.button + ' t-search-button'}>
              Найти
            </button>
          </div>
        </div>
        <div className={'t-search-result' + styles.searchPanel}>
          {result.map(item => (
            <ShowPreview key={item.id} {...item} />
          ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  result: getResult(state),
  isFetching: getIsFetching(state),
  error: getError(state)
});

const mapDispatchToProps = { searchRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
