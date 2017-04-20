import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store.js';

import OutputElement from './components/OutputElement.jsx';
import InputElement from './components/InputElement.jsx';

function Title(props) {
    return <h1>{props.label}</h1>;
}
function Header() {
    return <div className="header">
        <Title label='Hello World' />
    </div>;
}

class Greeter extends React.Component {
    render() {
        return (
            <div>
                <InputElement />
                <OutputElement />
            </div>
        );
    }
}

ReactDOM.render(        
            <div>
                <Header />
                <Provider store={store}>
                    <Greeter />
                </Provider>
            </div>
        , document.getElementById('mountPoint'));