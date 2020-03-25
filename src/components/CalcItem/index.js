import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import "./style.scss";



class CalcItem extends React.Component {
  state = {
      error: null,
      isLoaded: false,
      items: [
        // {"r030":0,"txt":"def","rate":1,"cc":"UAH","exchangedate":null}
      ],
      value: "",
    };

  componentDidMount() {
    fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Примітка: важливо обробляти помилки саме тут,
        // а не в блоці catch (), щоб не перехоплювати
        // виключення з помилок в самих компонентах.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );

  };

  handleChange(event) {
    this.setState({value: event.target.value});
    this.setState({rate: event.target.rate});
  }

  render() {
    // console.log(((this.state.value.slice(3)*100).toFixed())/100);
    // console.log((((this.props.mainValue*this.state.value).slice(3)*100).toFixed())/100);
    // console.log(typeof this.props.mainValue);
    // console.log(this.state.value);
    // console.log(parseFloat(this.state.value.slice(3)));


    return (
      <div className="CalcItem">
        <TextField
          id="outlined-number"
          label="Value"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"

          value={
            this.state.value?(((parseFloat((this.state.value.slice(3)))*100)*this.props.mainValue).toFixed())/100:0
          }

        />
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          helperText="Please select your currency"
        >
          {this.state.items.map(items => (
            <MenuItem key={items.r030} value={items.cc+items.rate}>
              {items.cc}
            </MenuItem>
          ))}
        </TextField>
        <IconButton
          aria-label="delete"
          onClick={this.props.deleteCalculator}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    )
  }



}

export default CalcItem