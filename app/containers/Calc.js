// @flow
import React from 'react';
import InputOutput from '../components/InputOutput/InputOutput';
import Buttons from '../components/Buttons/Buttons';
import Calculator from  '../services/Calculator';

// we can supply Props type using Props
type Props={

};


// and can supply state types using State
type State={
  inputValue: string,
  outputValue: string
};


export default class Home extends React.Component<Props,State>{
  state={
    inputValue: "0", // initial value is set to 0,
    outputValue: "0" // Output value is set to 0,
  };

  onInputChangeHandler=(event: any)=>{
    const inputValue=event.target.value;

    const outputValue=Calculator.eval(inputValue);

    this.setState({inputValue,outputValue});
  };

  render(){
    return (
      <div className="h-screen" >
         <InputOutput onInputChange={this.onInputChangeHandler}
                      inputValue={this.state.inputValue}
                       outputValue={this.state.outputValue}/>
        <Buttons/>
      </div>
    );
  }
}
