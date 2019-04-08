import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/app/App';
import * as serviceWorker from './serviceWorker';
import Home from './pages/home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Details from './pages/details/Details';

ReactDOM.render(
<BrowserRouter>
    <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/home" component={Home} />
            <Route path="/details" component={Details} />
    </Switch>
</BrowserRouter>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();