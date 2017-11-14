import React from 'react';
import ReactDOM from 'react-dom';
import App from './MukkitList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MukkitList />, div);
});
