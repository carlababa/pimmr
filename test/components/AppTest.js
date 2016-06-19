import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import Restaurants from 'components/Restaurants';
import sinon from 'sinon';

describe('<App />', () => {
  let component;
  let xhr;
  let requests;

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];

    xhr.onCreate = (_xhr) => {
      requests.push(_xhr);
    };
  });

  beforeEach(() => {
    component = shallow(<App />);
  });

  afterEach(() => xhr.restore());

  describe('when rendering the component', () => {
    it('should render the <Restaurants /> component', () => {
      expect(component.find(Restaurants)).to.have.length(1);
    });

    it('should render a <h2>', () => {
      expect(component.containsMatchingElement(<h2>Restaurants</h2>)).to.equal(true);
    });

    it('should get the first 5 restaurants', () => {
      expect(requests).to.have.length(1);
      expect(requests[0].url).to.equal('https://api.pimmr.me');
      expect(requests[0].method).to.equal('POST');
      expect(JSON.parse(requests[0].requestBody)).to.contain.all.keys({
        method: 'restaurant.getHighestRated',
        params: ['Amsterdam', 0, 5],
      });
    });

    it('should set restaurants on state', (done) => {
      const restaurantsJson = '{"result": [{"name": "testing"}]}';
      requests[0].respond(200, { 'Content-Type': 'application/json' }, restaurantsJson);

      setTimeout(() => {
        expect(component.state('restaurants')).to.deep.equal([{ name: 'testing' }]);
        done();
      });
    });
  });
});
