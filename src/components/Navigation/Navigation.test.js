import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';

it('Navigation renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navigation />, div);
  ReactDOM.unmountComponentAtNode(div);
});
