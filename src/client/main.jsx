import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store.js';
import { updateValue } from './actions/outputElement.action';

import OutputElement from './components/OutputElement.jsx';

function Title(props) {
    return <h1>{props.label}</h1>;
}
function Header() {
    return <div className="header">
        <Title label='Hello World' />
    </div>;
}

function clickButton() {
    const i = document.getElementById('inputText');
    const inputString = i.value; 

    fetch('http://localhost:8081/serverGet/get.php?str=' + inputString)
        .then(resp => { return resp.json() })
        .then(json => {
            const jsonString = JSON.stringify(json);
            const { query, request } = json;

            const action = updateValue('Query: ' + query + ', Request: ' + request);
            store.dispatch(action);

            alert('Alles: ' + jsonString + '\r\n'
                + 'Query: ' + query + '\r\n'
                + 'Request: ' + request);
        })
        .catch(error => {
            console.error(error);
        });
}

function changeInput(component, p, v) {
    console.log(component.target);
}

class Greeter extends React.Component {
    render() {
        return (
            <div>
                Greeting:
                <input id='inputText' onChange={changeInput}></input>
                <button onClick={clickButton}>Greet</button>
            </div>
        );
    }
}

ReactDOM.render(        
            <div>
                <Header />
                <Greeter />                
                <Provider store={store}>
                    <OutputElement />
                </Provider>
            </div>
        , document.getElementById('mountPoint'));