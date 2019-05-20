// Реализуйте страницу шоу.
import styles from './ShowPage.module.css';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { showRequest } from '../../actions';

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action
class ShowPage extends PureComponent {
  render() {
    const innerHTML = html => {
      return { __html: html };
    };
    const { result, isFetching, error } = this.props;

    if (isFetching) return <p>Данные загружаются...</p>;
    if (error) return <p>Произошла сетевая ошибка</p>;
    return result.name !== undefined ? (
      <div>
        <p>{result.name}</p>
        {result.image !== undefined && (
          <img src={result.image.medium} alt={result.name} />
        )}
        <div>
          <p dangerouslySetInnerHTML={innerHTML(result.summary)} />
        </div>
        <div className={styles.cast}>{this.casts(result._embedded.cast)}</div>
      </div>
    ) : null;
  }
}

const mapStateToProps = state => {
  const { result, isFetching, error } = state.show;
  return {
    result,
    isFetching,
    error
  };
};

const mapDispatchToProps = {
  showRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
