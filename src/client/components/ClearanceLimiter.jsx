import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import store from '../store.js';

import Draggable from 'react-draggable';

import { dragStart, dragEnd, setImageIntro, setImageLeft, setImageRight } from '../actions/clearanceLimiter.action';

function mapStateToProps(state) {
    return { 
        defaultValues: state.default,
        value: state.value,
        imageLeft: state.imageLeft,
        imageRight: state.imageRight,
        imageIntro: state.imageIntro
    };
}

function mapDispatchToProps(dispatch) {
    const actions = {
        dragStart, dragEnd, setImageIntro, setImageLeft, setImageRight
    }
    return bindActionCreators(actions, dispatch);
}

export class ClearanceLimiter extends React.Component {
    constructor(props) {
        super(props);
        setImageIntro(props.imageIntro);
    }
    handleStart(event) {
        console.info("START " + event);
        dragStart(80);
    }
    handleStop(event) {
        console.info("END " + event);
        dragEnd(50);
    }
    handleDrag(event) {
        console.info("DRAG " + event)
    }
    render() {
        const { value, imageIntro } = this.props;

        return (            
            <div className='valuereducer'>
                <Draggable 
                    axis="x"
                    bounds={{left: 10, right: 100}}
                    defaultPosition={{x: 100, y: 50}}
                    position={null}
                    grid={[5, 5]}
                    zIndex={100}
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={this.handleStop}
                >
                    <div>X</div>
                </Draggable>
                <span className='value-div'>VALUE: { value }</span>
            </div>
        );        
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (ClearanceLimiter);