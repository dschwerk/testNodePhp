import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store.js';

import OutputElement from './components/OutputElement.jsx';
import InputElement from './components/InputElement.jsx';
import ClearanceLimiter from './components/ClearanceLimiter.jsx';

class Page extends React.Component {
    render() {
        return (
            <div>
                <InputElement />
                <OutputElement />
                <ClearanceLimiter />
            </div>
        );        
    }
}

ReactDOM.render(        
        <Provider store={store}>
            <Page />
        </Provider>
        , document.getElementById('mountPoint'));