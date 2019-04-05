import React from 'react';
import ReactDOM from 'react-dom';
import History from './History';

it('History renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<History />, div);
  ReactDOM.unmountComponentAtNode(div);
});
