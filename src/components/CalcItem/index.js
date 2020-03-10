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
  },
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const CalcItem = ({calculators,... props}) => {
  const [currency, setCurrency] = React.useState('UAH');

  const handleChange = event => {
    setCurrency(event.target.value);
  };
  console.log(currency);
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
        value={props.mainValue}
        onChange={props.handleChangeValue}

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