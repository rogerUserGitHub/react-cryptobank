import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface Props {
  label1?: string;
  label2?: string;
}

const RadioButton = ({label1, label2} : Props) => {

  return (
    <FormControl >
      <FormLabel id="demo-radio-buttons-group-label" >Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value={label1} control={<Radio />} label={label1} />
        <FormControlLabel value={label2} control={<Radio />} label={label2} />
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButton