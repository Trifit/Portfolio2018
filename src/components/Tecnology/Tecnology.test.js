import { configure, shallow } from 'enzyme';
import React from 'react';

import Tecnology from './Tecnology';
import appObj from '../data.json';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('The <Tecnology /> component', function() {
    const wrapper = shallow(<Tecnology 
        name={appObj.experiences[0].tools[0]}
      />);
      
    it('has the name of the tecnology', function() {
      expect(wrapper.find('p').text()).toEqual(appObj.experiences[0].tools[0]);
    });
});