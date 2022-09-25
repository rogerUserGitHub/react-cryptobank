// import { Grid } from "@mui/material";
// import { Tooltip } from "recharts";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  ListSubheader,
  MenuItem,
  Paper,
  Select,
  styled,
  TextField,
} from '@mui/material';
import { IExchangeData } from '../../common/interfaces/interfaces';
import { useState } from 'react';
import { csCZ } from '@mui/material/locale';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.subtitle2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  paddingTop: 10,
  fontWeight: 'bold',
  fontSize: 18,
  background: 'darkgrey',
  height: 52,
}));

interface IProps {
  exchangeData: IExchangeData;
}

const CryptoConverter = (props: IProps) => {
  const { exchangeData } = props;

  const arrayOfValues = Object.values(exchangeData);
  const [menuItem, setMenuItem] = useState('');

  const handleClick = (event: any, item: any) => {
    setMenuItem(item)
    console.log(menuItem)
  };

//   const handleChange = (event: any) => {
//     const { myValue } = event.currentTarget.value;
//     console.log(myValue);
//   };

  var dataArray = [];
  for (var obj in arrayOfValues[0]) {
    dataArray.push(arrayOfValues[0][obj]);
  }

  var ArrayPerCrypto = dataArray.filter(function (el) {
    return el.type === 'crypto';
  });
  console.log(ArrayPerCrypto)
  let result = ArrayPerCrypto?.map(a => a.name);
  const menuItemsCrypto = result?.map(item => {
    return (
      <MenuItem key={item} value={item} 
        onClick={(e) => handleClick(e, item)}>
        {item}
      </MenuItem>
    );
  });

  var arrayPerFiat = dataArray.filter(function (el) {
    return el.type === 'fiat';
  });
  let result2 = arrayPerFiat?.map(a => a.name);
  const menuItemsFiat = result2?.map(item => {
    return (
      <MenuItem key={item} value={item}>
        {item}
      </MenuItem>
    );
  });

  var arrayPerCommodity = dataArray.filter(function (el) {
    return el.type === 'commodity';
  });
  let result3 = arrayPerCommodity?.map(a => a.name);
  const menuItemsCommodity = result3?.map(item => {
    return (
      <MenuItem key={item} value={item}>
        {item}
      </MenuItem>
    );
  });

  return (
    <>
      <Box sx={{ flexGrow: 1, paddingTop: 3 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} lg={12}>
            <Item>BTC Converter</Item>
          </Grid>
          <Grid item xs={2}>
            <Item>BTC</Item>
          </Grid>
          <Grid item xs={10}>
            <Item>
              <TextField
                id='filled-number'
                label='Number'
                type='number'
                InputLabelProps={{
                  shrink: true,
                }}
                variant='filled'
              />
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item>
              <FormControl sx={{ minWidth: 107, minHeight: 40 }}>
                <InputLabel htmlFor='grouped-select'>Grouping</InputLabel>
                <Select
                  defaultValue=''
                  id='grouped-select'
                  label='Grouping'
                  value='wewfef'
                >
                  <>
                    <MenuItem value=''>
                      <em>None</em>
                    </MenuItem>
                    <ListSubheader>Crypto</ListSubheader>
                    {menuItemsCrypto}
                    <ListSubheader>Fiat</ListSubheader>
                    {menuItemsFiat}
                    <ListSubheader>Commodity</ListSubheader>
                    {menuItemsCommodity}
                  </>
                </Select>
              </FormControl>
            </Item>
          </Grid>
          <Grid item xs={10}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Item>1 BTC = </Item>
            <Item>{menuItem}</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CryptoConverter;
