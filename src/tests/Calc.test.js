import React from 'react';
import renderer from 'react-test-renderer';
import Calc from '../pages/Calc';

it('renders correctly', () => {
  const tree = renderer
    .create(<Calc />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
