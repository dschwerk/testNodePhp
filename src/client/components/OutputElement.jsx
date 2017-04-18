import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions/outputElement.action';

function mapStateToProps(state) {
    return { outputValue: state.outputValue };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

class OutputElement extends React.Component {
    render() {
        const { outputValue } = this.props;

        return <div className='output-element'>VALUE: {outputValue}</div>        
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (OutputElement);