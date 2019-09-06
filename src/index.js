import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Form from './Form';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Form />, document.getElementById('form'));

serviceWorker.unregister();
