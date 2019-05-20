// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.
import styles from './ShowPreview.module.css';
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class ShowPreview extends PureComponent {
  render() {
    const innerHTML = html => {
      return { __html: html };
    };
    const { id, name, image, summary } = this.props;
    return (
      <div className={styles.container + 't-preview'}>
        <div>
          <Link to={`/show/${id}`} className="t-link">
            {name}
          </Link>
          {image !== null && <img src={image.medium} alt={name} />}
        </div>
        <div dangerouslySetInnerHTML={innerHTML(summary)} />
      </div>
    );
  }
}

export default ShowPreview;
