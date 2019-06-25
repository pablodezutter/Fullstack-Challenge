import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Householding from './components/Householding';
import Administrative from "./components/Administrative";
import Problems from './components/Problems';

const routing = (
    <Router>
        <div>
            <Route exact path='/' component={App}/>
            <Route path='/householding' component={Householding}/>
            <Route path='/administrative' component={Administrative}/>
            <Route path='/problems' component={Problems}/>
        </div>
    </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
