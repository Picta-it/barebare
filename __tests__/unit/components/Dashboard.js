import React from 'react';
import Dashboard from '../../../app/components/Dashboard.js';
import { shallow } from 'enzyme';

test('Link changes the class when hovered', () => {
  const component = shallow(
    <Dashboard>Test</Dashboard>
  );

  expect(component.hasClass('pouet')).toEqual(false);
});
