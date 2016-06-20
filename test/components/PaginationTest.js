import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Pagination from 'components//Pagination.js';

describe('<Pagination />', () => {
  let component;
  let spy;

  beforeEach(() => {
    spy = sinon.spy();
    component = mount(<Pagination updateList={spy} />);
  });

  describe('when rendering the component', () => {
    it('should render the button with id nextPage ', () => {
      expect(component.find('#nextPage')).to.have.length(1);
    });

    describe('when start is equal to 0', () => {
      it('should not render the button with id backPage', () => {
        expect(component.find('#backPage')).to.have.length(0);
      });
    });

    describe('when start is greater than 0', () => {
      it('should render the back button', () => {
        component.setState({ start: 5 });
        expect(component.find('#backPage')).to.have.length(1);
      });
    });
  });

  describe('when clicking the buttons', () => {
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
