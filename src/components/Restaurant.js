import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './restaurant.cssmodule.css';

@cssmodules(styles)
class Restaurant extends React.Component {
  static propTypes = {
    restaurant: React.PropTypes.object.isRequired
  }

  render() {
    return (
      <li>
        <div>
          <img alt="restaurant-name" src={this.props.restaurant.photos[0].s3URL} />
        </div>
        <div>
          {this.props.restaurant.name}
        </div>
        <div>
          {this.props.restaurant.cuisines.map((cuisine) => cuisine)}
        </div>
        <div>
          {this.props.restaurant.address.city}
        </div>
      </li>
    );
  }
}

export default Restaurant;
