import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Pagination from 'components//Pagination.js';

describe('<Pagination />', () => {
  let component;

  beforeEach(() => {
    component = mount(<Pagination />);
  });

  describe('when rendering the component', () => {
    it('should render the button next page ', () => {
      expect(component.containsMatchingElement(<button>Next</button>)).to.equal(true);
    });

    describe('when start is equal to 0', () => {
      it('should not render the back page', () => {
        expect(component.containsMatchingElement(<button>Back</button>)).to.equal(false);
      });
    });

    describe('when start is greater than 0', () => {
      it('should render the back button', () => {
        component.setState({ start: 5 });
        expect(component.containsMatchingElement(<button>Back</button>)).to.equal(true);
      });
    });
  });

  describe('when clicking the buttons', () => {
    let spy;
    beforeEach(() => {
      spy = sinon.spy();
      component.setProps({ updateList: spy });
    });

    describe('when clicking next button', () => {
      it('should set the start to +5 and call updateList once', () => {
        component.find('#nextPage').simulate('click');
        expect(spy.withArgs(5).calledOnce).to.equal(true);
        expect(component.state().start).to.equal(5);
      });
    });

    describe('when clicking back button', () => {
      it('should set the start to -5 and call updateList once', () => {
        component.setState({ start: 5 });
        component.find('#backPage').simulate('click');
        expect(spy.withArgs(0).calledOnce).to.equal(true);
        expect(component.state().start).to.equal(0);
      });
    });
  });
});
