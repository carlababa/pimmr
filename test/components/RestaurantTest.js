import React from 'react';
import { shallow } from 'enzyme';
import Restaurant from 'components//Restaurant.js';

describe('<Restaurant />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<Restaurant />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "restaurant-component"', () => {
      expect(component.hasClass('restaurant-component')).to.equal(true);
    });
  });
});
