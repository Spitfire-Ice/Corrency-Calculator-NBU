import React from "react";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';



import "./style.scss";


const currencies = [
  {
    value: 'UAH',
    label: '₴',
    factor: 1
  },
  {
    value: 'USD',
    label: '$',
    factor: 2
  },
  {
    value: 'EUR',
    label: '€',
    factor: 3
  },
  {
    value: 'JPY',
    label: '¥',
    factor: 0.3
  },
];

const CalcItem = ({calculators,... props}) => {
  const [currency, setCurrency] = React.useState('UAH');

  const handleChange = event => {
    setCurrency(event.target.value);
  };
  let a = 1;
  function f() {
    if (currency==='UAH'){
       a=(((props.mainValue*currencies[0].factor)*100).toFixed())/100;
      return a
    } else if (currency==='USD') {
      a=(((props.mainValue*currencies[1].factor)*100).toFixed())/100;
      return a
    }else if (currency==='EUR') {
      a=(((props.mainValue*currencies[2].factor)*100).toFixed())/100;
      return a
    }else if (currency==='JPY') {
      a=(((props.mainValue*currencies[3].factor)*100).toFixed())/100;
      return a
    }
  }
  // console.log(currency);
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
        // value={props.mainValue}
        value={
          // currency==='USD'? (props.mainValue*currencies[1].factor).toFixed(1) :props.mainValue
          f(a)===''? 0 :f(a)
        }
        // onChange={props.handleChangeValue}

      />
      <TextField
        id="standard-select-currency"
        select
        label="Select"
        value={currency}
        onChange={handleChange}
        helperText="Please select your currency"
      >
        {currencies.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <IconButton
        aria-label="delete"
        onClick={props.deleteCalculator}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  )
};

export default CalcItem