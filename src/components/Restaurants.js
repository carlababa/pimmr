import React from 'react';
import Restaurant from './Restaurant';
import cssmodules from 'react-css-modules';
import styles from './restaurants.cssmodule.css';

@cssmodules(styles)
class Restaurants extends React.Component {
  static propTypes = {
    restaurants: React.PropTypes.array.isRequired
  }

  render() {
    return (
      <ul>
        {this.props.restaurants.map((restaurant) => (
          <Restaurant restaurant={restaurant} />
        ))}
      </ul>
    );
  }
}

export default Restaurants;
