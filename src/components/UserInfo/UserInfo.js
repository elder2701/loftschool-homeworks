import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styles from './UserInfo.module.css';
import cx from 'classnames';
import { getUser, getIsLoading, getError } from '../../modules/User';

class UserInfo extends PureComponent {
  render() {
    const { user, userError, userLoading } = this.props;
    console.log(this.props);

    if (userError) {
      return <p>{`Ошибка получения пользователя: ${userError}`}</p>;
    }

    if (userLoading) {
      return <p>Загрузка...</p>;
    }

    if (!user) return null;
    return (
      <div className={styles.root}>
        <div className={cx(styles.root, styles.imageWrapper)}>
          <img
            className={cx(styles.root, styles.image)}
            alt={user.login}
            src={user.avatar_url}
          />
        </div>
        <div>
          <p className="t-user-name">{user.login}</p>
          <p className="t-user-bio">{user.bio}</p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: getUser(state),
  userLoading: getIsLoading(state),
  userError: getError(state)
});
export default connect(mapStateToProps)(UserInfo);
