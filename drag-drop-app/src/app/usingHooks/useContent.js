import { useState, useEffect } from "react";

/**
 * 
 * @desc  useContent Hook to handle drag drop operations of both 
 * person and favorite component
 */
export const  useContent = () =>  {

  let [activeDrag, setActiveDrags] = useState(0);
  let [deltaPosition, setDeltaPosition] = useState({x: 0, y: 0});
  
  /** @desc useEffect hook that will set the initial values */
  useEffect(() => {

    setDeltaPosition({x: 10, y:10})
    },[])
  
  /** @desc useEffect hook that will console the values every time props update */
  useEffect(() => {
    
    console.log('x=== ', deltaPosition.x)
    console.log('y=== ', deltaPosition.y)
  })

  /** @desc when we start to drag  set activeDrag to true*/
  const useHandleStart = () => {

    setActiveDrags(++activeDrag);
  }

  /** @desc when we stop drag  set activeDrag to false*/
  const useHandleStop = () => {
  
    setActiveDrags(--activeDrag);
  }
  
  /**
    * @desc change the positions when we drag drop component
  */
  const useHandleDrag = (e, ui) => {
    
    setDeltaPosition({x: deltaPosition.x + ui.deltaX, y: deltaPosition.y + ui.deltaY})
  }
    
  return {activeDrag, deltaPosition, useHandleStart, useHandleStop, useHandleDrag}
}

