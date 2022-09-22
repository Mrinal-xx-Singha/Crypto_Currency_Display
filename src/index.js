import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  './App.css';

// root is an id which  contains the whole crypto display app
// every time you refresh the page or the webapp you will see the change in realtime and the prices will be changing realtime
ReactDOM.render(
<React.StrictMode>
    <App />
</React.StrictMode>,
document.getElementById("root")
);