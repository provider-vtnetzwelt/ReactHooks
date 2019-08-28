import React, { Component } from 'react';

/**
 * @desc TemperatureInput  component to render input box and 
 * update the props when change temperature value
 * @param {func} onChange
 * @param {string} value
 * @param {string} scale
 */
class TemperatureInput extends Component {

  /**
   *  @desc Call when we change the temperature value and 
   * call the parent onChange method to update the props
   *  @param {object}  event
  */
  handleChange = (event) =>  {
    this.props.onChange(event.target.value);
  }

  render() {
    const { value, scale } = this.props;
    return (
      <div className="container">
          <form>
            <div className= "form-group">
              <h3>Enter Temperature in {scale}: </h3>
              <input className="form-control container text-center" id="focusedInputed" type="text" value={value}
                     onChange={this.handleChange} />
            </div>
          </form>
      </div>
    );
  }
}

/**
 * @desc Calculator component that will handle the calculations
 */
export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      scale: 'Celsius',
      value: ''
    };
  }

  /** @desc When component will setup  get the current temperature */
  componentDidMount = () => {
    fetch("http://api.apixu.com/v1/current.json?key=478f53ca816141a79a8102217191906&q=Mohali")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({value: result.current.temp_c})
        },
        (error) => {
          console.log('error=======', error)
        }
      )
  }
  /** @desc Whenever component will update console the values */
  componentDidUpdate = () => {
    const { scale, value } = this.state
    setTimeout(() => {
      console.log(`Changed ${scale} value to ${value} `);
    }, 100);
  }

  /** @desc When component will unmount empty state value */
  componentWillUnmount = () => {
    this.setState({value: ''})
  }

  /**
   *  @desc Call when we change the Celsius value 
   *  @param {string} value
  */
  handleCelsiusChange = (value) => {
    this.setState({scale: 'Celsius', value});
  }

  /**
   *  @desc Call when we change the Fahrenheit value 
   *  @param {string} value
  */
  handleFahrenheitChange = (value) => {
    this.setState({scale: 'Fahrenheit', value});
  }

  /**
   *  @desc To  covert the  celsius, fahrenheit values
   *  @param {string} value
   *  @param {func} convert
  */
  tryConvert = (value, convert) => {
    const input = parseFloat(value);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  /** @desc To convert value in celsius */
  toCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
  }

  /** @desc To convert value in fahrenheit */
  toFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
  }

  render() {
    const { scale, value } = this.state;
    const celsius = scale === 'Fahrenheit' ? this.tryConvert(value, this.toCelsius) : value;
    const fahrenheit = scale === 'Celsius' ? this.tryConvert(value, this.toFahrenheit) : value;

    return (
      <div className="text-center container-fluid">
        <TemperatureInput
          scale="Celsius"
          value={celsius}
          onChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="Fahrenheit"
          value={fahrenheit}
          onChange={this.handleFahrenheitChange} />
      </div>
    );
  }
}
