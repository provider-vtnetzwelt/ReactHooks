import React from 'react';
import Draggable from 'react-draggable'
import { useContent } from './useContent'
import { FavoriteIcon } from '../icons'

/**
 * @desc Favorite functional component that that render the favorite drag icon 
 *  and handle the drag drop operations in useContent Hook. 
 * @param {object} dragDetails
 * @param {func}  handleStart
 * @param {func}  handleDrag
 * @param {func} handleStop
 * @param {object} deltaPosition
 * @param {bool} activeDrag
 */

const Favorite = () => {
    
   
    let { activeDrag, deltaPosition, useHandleStart, useHandleStop, useHandleDrag } = useContent()

    return(
        <>
        <div>Person Active Drag :   {activeDrag}</div>
        <Draggable
    handle=".handle"
    defaultPosition={{x: 0, y: 0}}
    position={null}
   // grid={[25, 25]}
    bounds={{top: 0, left: 0, right: 150, bottom: 150}}
    scale={1}
    onStart={useHandleStart}
    onDrag={useHandleDrag}
    onStop={useHandleStop}>
        <div className="handle"><FavoriteIcon/> <br/>(x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)})</div>

    </Draggable>
    </>
    )
}
export default Favorite
