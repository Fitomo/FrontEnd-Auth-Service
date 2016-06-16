import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

console.log(document.querySelector('.root'));

ReactDOM.render(<App />, document.querySelector('.root'));
