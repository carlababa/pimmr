import React from 'react';
import Restaurant from 'components/Restaurant';
import { shallow } from 'enzyme';
import Restaurants from 'components//Restaurants.js';

describe('<Restaurants />', () => {
  const restaurants = [{
    name: 'Yayang',
    photos: [{ s3URL: 'photo1.jpg' }],
    cuisines: ['Aziatisch'],
    address: { city: 'Amsterdam' }
  }, {
    name: 'Tingis',
    photos: [{ s3URL: 'photo2.jpeg' }],
    cuisines: ['Marokkaans'],
    address: { city: 'Amsterdam' }
  }];

  let component;
  beforeEach(() => {
    component = shallow(<Restaurants restaurants={restaurants} />);
  });

  describe('when rendering the component', () => {
    it('should have a <ul>', () => {
      expect(component.find('ul')).to.have.length(1);
    });

    it('should render two <Restaurant /> components', () => {
      expect(component.find(Restaurant)).to.have.length(2);
    });
  });
});
