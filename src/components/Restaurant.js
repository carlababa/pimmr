import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './restaurant.cssmodule.css';

@cssmodules(styles)
class Restaurant extends React.Component {
  static propTypes = {
    restaurant: React.PropTypes.object.isRequired
  }

  makeBold(name) {
    const splitedName = name.split(/restaurant/i);
    if (splitedName.length > 1) {
      return <span>{splitedName[0]} <b>Restaurant</b> {splitedName[1]}</span>;
    }
    return <span>{name}</span>;
  }

  render() {
    return (
      <li>
        <div className={styles.restaurantImage}>
          <img alt="restaurant-name" src={this.props.restaurant.photos[0].s3URL} />
        </div>
        <div className={styles.restaurantName}>
          {this.makeBold(this.props.restaurant.name)}
        </div>
        <div className={styles.cuisines}>
          {this.props.restaurant.cuisines.map((cuisine) => cuisine)}
        </div>
        <div className={styles.city}>
          {this.props.restaurant.address.city}
        </div>
      </li>
    );
  }
}

export default Restaurant;
