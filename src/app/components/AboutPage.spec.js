import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import AboutPage from './AboutPage';


describe('Title', () => {
    // Make sure it has an h1 tag with the title of the app
    it('should contain <h1>About Caliper</h1>', () => {
        const wrapper = shallow(<AboutPage />);
        const actual = wrapper.find('h1').text();
        const expected = 'About Caliper';

        expect(actual).to.equal(expected);
    });
});
