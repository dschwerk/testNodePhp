import React from 'react';

import store from '../store.js';
import { updateValue } from '../actions/outputElement.action';

export default class InputElement extends React.Component {

    changeInput(event) {

    }
    clickButton() {
    const i = document.getElementById('inputText');
    const inputString = i.value; 

    fetch('http://localhost/serverGet/get.php?str=' + inputString)
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

    render() {
        return (
            <div>
                Greeting:
                <input id='inputText' onChange={this.changeInput}></input>
                <button onClick={this.clickButton}>Greet</button>
            </div>
        );
    }
}
