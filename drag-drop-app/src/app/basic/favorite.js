import React, { Component } from 'react';
import Draggable from 'react-draggable'
import { FavoriteIcon } from '../icons'

/**
 * @desc person class component that that render the favorite drag icon 
 * and handle the drag drop operations
 */
class Favorite extends Component  {
    constructor() {
        super();
        this.state = {
            activeDrag: 0,
            deltaPosition: {
            x: 0, y: 0
            }
        };
    }

    /** @desc When component will setup */
    componentDidMount = () => {
        this.setState({deltaPosition: { x: 10, y: 10}})
    }

    /** @desc When component will unmount set default values */
    componentDidUpdate = () => {
        console.log('value updated in Favorite component')
    }

    /** @desc when we start to drag  set activeDrag to true*/
    handleStart = () => {
        let { activeDrag } = this.state
        this.setState({activeDrag: ++ activeDrag});
    }

    /**
     * @desc change the positions when we drag drop component
     */
    handleDrag = (e, ui) => {
        const {x, y} = this.state.deltaPosition;
        this.setState({
        deltaPosition: {
            x: x + ui.deltaX,
            y: y + ui.deltaY,
        }
        });
    }

    /** @desc when we stop drag  set activeDrag to false*/
    handleStop = () => {

        let { activeDrag, } = this.state
        this.setState({activeDrag: -- activeDrag});
    }

    render() {
        
        let { deltaPosition, activeDrag } = this.state
        return(
            <>
            <div >Favorite Active Drag : {activeDrag}</div>
            <Draggable
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
    // grid={[25, 25]}
        bounds={{top: 0, left: 0, right: 150, bottom: 150}}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
            <div className="handle"><FavoriteIcon/> <br/>(x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)})</div>

        </Draggable>
        </>
        )
    }
}
export default Favorite
