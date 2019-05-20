import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { showRequest } from '../../actions';
import styles from './ShowPage.module.css';

class ShowPage extends PureComponent {
  componentDidMount() {
    const {
      showRequest,
      match: {
        params: { id }
      }
    } = this.props;

    showRequest(id);
  }

  casts = cast => {
    return cast === undefined
      ? null
      : cast.map(({ person }) => (
          <div className="t-person" key={person.id}>
            <p>{person.name}</p>
            {person.image ? (
              <img src={person.image.medium} alt={person.name} />
            ) : null}
          </div>
        ));
  };

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
  return {
    result: state.shows.result,
    isFetching: state.shows.isFetching,
    error: state.shows.error
  };
};
const mapDispatchToProps = { showRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
