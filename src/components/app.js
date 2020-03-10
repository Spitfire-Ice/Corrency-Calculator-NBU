import React, { Component } from "react";
import CalcItem from "./CalcItem";
import AddIcon from '@material-ui/icons/Add';
import IconButton from "@material-ui/core/IconButton";


import './app.scss';


class App extends Component {
  state = {
    calculators: [
      { id: 0, }
    ],
    mainValue: 7
  };

  addCalculator = () => {
    this.setState( state => {
      state.calculators.push({
        id: state.calculators.length !== 0 ? state.calculators.length : 0,
        value: "UAH",
      });
      return state
    })
  };
  deleteCalculator = id => {
    const index = this.state.calculators.map( calc => calc.id).indexOf(id);
    this.setState(state => {
      delete state.calculators[index];
      return state
    });
  };
  handleChange = (event) => {
    this.setState({mainValue: event.target.value});
  };

  render() {
    const {calculators} = this.state;
    let {mainValue} =this.state;

    return (
      <div className="app--container">
        <h1>Currency Calculator</h1>
        {/*<input type="text" value={this.state.mainValue} onChange={this.handleChange}/>*/}
        {calculators.map(calculator =>(
          <CalcItem
            key={calculator.id}
            calculator={calculator}
            deleteCalculator={()=>this.deleteCalculator(calculator.id)}
            mainValue={mainValue}
            handleChangeValue={this.handleChange}
          />
        ))}
        <div className="addButton">
          <IconButton aria-label="add"  onClick={this.addCalculator}>
            <AddIcon />
          </IconButton>
        </div>
      </div>
    )
  }
}

export default App;
