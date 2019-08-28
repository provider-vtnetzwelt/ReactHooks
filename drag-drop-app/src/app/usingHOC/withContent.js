import React from "react";
/**
 * 
 * @desc  WrappedComponent HOC to handle drag drop operations of both 
 * person and favorite component
 */
const withContent = WrappedComponent =>
  class extends React.Component {
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

     /** @desc When component will update console the values */
    componentDidUpdate = () => {
        const {deltaPosition} = this.state
        console.log('x=== ', deltaPosition.x)
        console.log('y=== ', deltaPosition.y)
    }

    /** @desc When component will unmount set default values */
    componentWillUnmount = () => {
      this.setState({deltaPosition: { x: 0, y: 0}})
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
      return <WrappedComponent dragDetails={this.state} handleStart = {this.handleStart} 
      handleDrag = {this.handleDrag} handleStop = {this.handleStop} />;
    }
  };

export default withContent;
