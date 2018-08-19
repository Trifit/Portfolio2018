import { configure, shallow } from 'enzyme';
import React from 'react';

import Experience from './Experience';
import appObj from '../data.json';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('The <Experience /> component', function() {
    const wrapper = shallow(<Experience 
      company={appObj.experiences[0].company} 
      description={appObj.experiences[0].description} 
      tools={appObj.experiences[0].tools}
      />);
      
    it('has a <h3> with the company name', function() {
      expect(wrapper.find('h3').text()).toEqual(appObj.experiences[0].company);
    });
    
    it('has a description with what I did for this company', function() {
      expect(wrapper.find('p').text()).toEqual(appObj.experiences[0].description);
    });    
});