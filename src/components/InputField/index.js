import React from "react";

import './style.scss';

import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';





const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: 'green',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
    },
  },
})(TextField);


function CustomizedInputs(props) {




  return (
    <ValidationTextField
      className="mainInput"
      label="Putt your sum in UAH"
      required
      variant="outlined"
      // defaultValue="Success"
      id="validation-outlined-input"
      type='Number'
      onChange={props.handleChangeValue}
      value={props.mainValue==0? '': props.mainValue}
    />
  );
}
export default CustomizedInputs