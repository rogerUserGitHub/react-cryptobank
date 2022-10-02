import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Autocomplete, Container, Grid } from '@mui/material';
import { ForkRight } from '@mui/icons-material';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataList } from './../utils/Datalist';

const SearchBar = (props: any) =>  {

  const { dataList } = props
 
  let navigate = useNavigate();

  const onClickHandler = (event: any, value: any) => {
    navigate(`/details/${value.label}`)
  }

  return (
    <Container>
      <Grid item xs={12} md={12} lg={12}>
        <Autocomplete
          disablePortal
          id='combo-box-demo'
          options={dataList}
          onChange={onClickHandler}
          sx={{ 
            width: 500,
            paddingTop: 4, 
            }}
          renderInput={params => 
          <TextField 
          {...params} 
          label='Search for crypto' 
          />}
        />
      </Grid>
    </Container>
  );
}

export default SearchBar
