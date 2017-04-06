import React from 'react'; 

function mapStateToProps(state) {
    const { value } = state;

    return { value: value };
}

export default class OutputElement extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value
        }
    }

    updateValue(value) {
        this.state.value = value;
    }
    render() {
        const { value } = this.props;
        <div className='output-element'>{ value }</div>
    }
}