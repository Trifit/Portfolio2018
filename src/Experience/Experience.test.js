import React from 'react';
import Experience from './Experience';
import renderer from 'react-test-renderer';

test('It renders one experience item: ', () => {
    const tree = renderer.create( 
        <Experience />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});