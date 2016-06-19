import React from 'react';
import { mount } from 'enzyme';
import Restaurant from 'components/Restaurant.js';
import styles from 'components/restaurant.cssmodule.css';

describe('<Restaurant />', () => {
  let restaurant = {
    name: 'Yayang',
    photos: [{ s3URL: 'photo1.jpg' }],
    cuisines: ['Aziatisch'],
    address: { city: 'Amsterdam' }
  };

  let component;

  describe('when rendering the component', () => {
    beforeEach(() => {
      component = mount(<Restaurant restaurant={restaurant} />);
    });

    it('should render a <li>', () => {
      expect(component.find('li')).to.have.length(1);
    });

    it('should render a restaurant image', () => {
      expect(component.find('img')).to.have.length(1);
      expect(component.find('img').props().src).to.equal('photo1.jpg');
    });

    it('should have an <div> with className cuisines and render the restaurant cuisine', () => {
      expect(component.find(`div.${styles.cuisines}`).text()).to.equal('Aziatisch');
    });

    it('should a <div> with className city and render the city name', () => {
      expect(component.find(`div.${styles.city}`).text()).to.equal('Amsterdam');
    });
  });

  describe('when name has the word restaurant', () => {
    it('should wrap the word with <b>', () => {
      restaurant.name = 'Restaurant Yayang';
      component = mount(<Restaurant restaurant={restaurant} />);

      expect(component.find(`div.${styles.restaurantName} span b`)
        .text()).to.equal('Restaurant');
      expect(component.find(`div.${styles.restaurantName} span`)
        .text().replace(/ restaurant /i, '')).to.equal(' Yayang');
    });
  });

  describe('when name does not have the word restaurant', () => {
    it('should not wrap the word with <b>', () => {
      restaurant.name = 'Yayang';
      component = mount(<Restaurant restaurant={restaurant} />);

      expect(component.find(`div.${styles.restaurantName} span`)
        .text()).to.equal('Yayang');
      expect(component.contains(`div.${styles.restaurantName} span b`))
        .to.equal(false);
    });
  });
});
