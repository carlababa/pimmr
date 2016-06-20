import React from 'react';
import $ from 'jquery';
import Restaurants from './Restaurants';
import Pagination from './Pagination';
import cssmodules from 'react-css-modules';
import styles from './app.cssmodule.css';

@cssmodules(styles)
class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: []
    };

    this.getRestaurants = this.getRestaurants.bind(this);
    this.getRestaurants(0);
  }

  getRestaurants(start = 0) {
    const city = 'Amsterdam';
    const url = 'https://api.pimmr.me';
    const limit = 5;

    $.ajax(url, {
      type: 'POST',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify({
        jsonrpc: '2.0',
        method: 'restaurant.getHighestRated',
        params: [city, start, limit],
        id: 0,
      })
    })
    .then(response => {
      this.setState({ restaurants: response.result });
    });
  }

  render() {
    return (
      <div>
        <div className={styles.navbar}>
          <h2>Restaurants</h2>
        </div>
        <div>
          <Restaurants restaurants={this.state.restaurants} />
        </div>
        <Pagination updateList={this.getRestaurants} />
      </div>
    );
  }
}

export default AppComponent;
