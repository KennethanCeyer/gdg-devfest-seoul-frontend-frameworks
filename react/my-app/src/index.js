import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MukkitList from './MukkitList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MukkitList />, document.getElementById('root'));
registerServiceWorker();
