import React from 'react';
import { render } from 'react-dom';
import './components/global/css/style.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('root'));
registerServiceWorker();
