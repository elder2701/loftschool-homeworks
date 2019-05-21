import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styles from './Followers.module.css';
import cx from 'classnames';
import { getFollowers, getIsLoading, getError } from '../../modules/Followers';

class Followers extends PureComponent {
  renderFollower = follower => {
    return (
      <div className={cx(styles.root, styles.follower)} key={follower.id}>
        <img
          className={cx(styles.root, styles.followerImg)}
          alt={follower.login}
          src={follower.avatar_url}
        />
        <p className={cx(styles.root, styles.followerLogin)}>
          {follower.login}
        </p>
      </div>
    );
  };
  render() {
    const { followers, followersLoading, followersError } = this.props;

    if (followersError) {
      return <p>{`Ошибка получения подписчиков: ${followersError}`}</p>;
    }

    if (followersLoading) {
      return <p>Загрузка...</p>;
    }

    return (
      <div className={cx(styles.root, 't-followers')}>
        {followers && followers.map(follower => this.renderFollower(follower))}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  followers: getFollowers(state),
  followersLoading: getIsLoading(state),
  followersError: getError(state)
});
export default connect(mapStateToProps)(Followers);
