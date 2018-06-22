import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import My from './My';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<My />, document.getElementById('roott'));
ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
