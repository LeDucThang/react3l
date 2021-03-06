import {MemoryRouter} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import CheckboxGroup from './CheckboxGroup';

describe('CheckboxGroup', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
      <CheckboxGroup/>
      </MemoryRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

