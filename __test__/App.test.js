import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../src/components/App';

describe('<App/> test', function() {  
  it('should render without crashing', function() {
    shallow(<App />);
  });

  it('should render without throwing an error', function() {
    expect(shallow(<App />).is(".container")).toBe(true);
  });

  it('should render an `.container`', function() {
    expect(shallow(<App />).find(".container")).toHaveLength(1);
  });
});
