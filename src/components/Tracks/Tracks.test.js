import React from 'react';
import ReactDOM from 'react-dom';
import Tracks from './Tracks';

it('Tracks renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tracks />, div);
  ReactDOM.unmountComponentAtNode(div);
});
