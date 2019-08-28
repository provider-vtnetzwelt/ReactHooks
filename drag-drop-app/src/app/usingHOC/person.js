import React, { Component } from 'react';
import Draggable from 'react-draggable'
import withContent from "./withContent";
import { PersonIcon }  from '../icons'

/**
 * @desc Person class component that that render the person drag icon 
 *  and handle the drag drop operations in withContent HOC
 * @param {object} dragDetails
 * @param {func}  handleStart
 * @param {func}  handleDrag
 * @param {func} handleStop
 * @param {object} deltaPosition
 * @param {bool} activeDrag
 */
class Person extends Component  {
 
    render() {
    
        const { dragDetails, handleStart, handleDrag, handleStop } = this.props
        const { deltaPosition, activeDrag } = dragDetails

        return(
            <>
            <div>Person Active Drag: {activeDrag}</div>
            <Draggable
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
    // grid={[25, 25]}
        bounds={{top: 0, left: 0, right: 150, bottom: 150}}
        scale={1}
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}>
            <div className="handle"><PersonIcon /> <br/>(x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)})</div>

        </Draggable>
        <br/>
        <br/>
        </>
        )
    }
}
export default withContent(Person)
