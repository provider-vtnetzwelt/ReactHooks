import React, {useState, useEffect} from 'react';

/**
 * @desc TemperatureInput  functional component to render input box and 
 * update the props when change temperature value
 * @param {func} onChange
 * @param {string} value
 * @param {string} scale
 */
const TemperatureInput = (props) => {

  const {scale, value} = props

  /**
   *  @desc Call when we change the temperature value and 
   * call the parent onChange method to update the props
   *  @param {object}  event
  */
  const handleChange = (e) =>  {
    props.onChange(e.target.value);
  }
  return (
    <div className="container">
        <form>
          <div className= "form-group">
            <h3>Enter Temperature in {scale}: </h3>
            <input className="form-control container text-center" id="focusedInputed" type="text" value={value}
                    onChange={handleChange} />
          </div>
        </form>
      </div>
    
  );
}

/**
 * @desc Calculator functional component that will handle the calculations
 */
const Calculator = () => {

  const [ scale, setScale ] =  useState('Celsius')
  const [ value, setValue]  =  useState('')

  /** 
   * @desc useEffect hook to get the temperature value
   * @return {func} that will call when component unmount 
  */
  useEffect( () => {
    fetch("http://api.apixu.com/v1/current.json?key=478f53ca816141a79a8102217191906&q=Mohali")
    .then(res => res.json())
    .then(
      (result) => {
        setValue(result.current.temp_c)
      },
      (error) => {
        console.log('error=======', error)
      }
    )
    return () => { setScale("")  }
  },[])

  /** 
   * @desc useEffect hook that will console the values when props update 
  */
  useEffect( () => {
    setTimeout(() => {
      console.log(`Changed ${scale} value to ${value}`);
    }, 100);
  })

  /**
   *  @desc Call when we change the Celsius value 
   *  @param {string} value
  */
  const handleCelsiusChange = (value) => {
    setValue(value)
  }

  /**
   *  @desc Call when we change the Fahrenheit value 
   *  @param {string} value
  */
  const handleFahrenheitChange = (value) => {
    setScale('Fahrenheit')
    setValue(value)
  }

  /**
   *  @desc To  covert the  celsius, fahrenheit values
   *  @param {string} value
   *  @param {func} convert
  */
  const tryConvert = (value, convert) => {
    const input = parseFloat(value);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  /** @desc To convert value in celsius */
  const toCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  /** @desc To convert value in fahrenheit */
  const toFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
  }

  const celsius = scale === 'Fahrenheit' ? tryConvert(value, toCelsius) : value;
  const fahrenheit = scale === 'Celsius' ? tryConvert(value, toFahrenheit) : value;
    return (
      <div className="text-center container-fluid">
        <TemperatureInput
          scale="Celsius"
          value={celsius}
          onChange={handleCelsiusChange} />
        <TemperatureInput
          scale="Fahrenheit"
          value={fahrenheit}
          onChange={handleFahrenheitChange} />
      </div>
    );
}
export default Calculator