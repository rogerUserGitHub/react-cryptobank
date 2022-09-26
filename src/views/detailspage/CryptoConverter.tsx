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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.subtitle2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  paddingTop: 10,
  fontWeight: 'bold',
  fontSize: 18,
  background: '#F0FFFF',
  height: 52,
}));

interface IProps {
  exchangeData: IExchangeData;
}

const CryptoConverter = (props: IProps) => {
  const { exchangeData } = props;

  const [menuItem, setMenuItem] = useState('');
  const [number, setNumber] = useState(0);
  const [value, setValue] = useState(0);

  const arrayOfValues = Object.values(exchangeData);

  const handleValueClick = (event: any, item: any) => {
    setMenuItem(item);
  };

  const handleNumberClick = (e: any) => {
    const number = e.target.value;
    setNumber(number);
  };

  var dataArray: any[] = [];
  for (var obj in arrayOfValues[0]) {
    dataArray?.push(arrayOfValues[0][obj]);
  }

  // object with name of asset and asset price
  var mapNameAndValue = dataArray.reduce(function (map, obj) {
    map[obj.name] = obj.value;
    return map;
  }, {});

  // returns menu items with names of assets in crypto category
  var ArrayPerCrypto = dataArray.filter(function (el) {
    return el.type === 'crypto';
  });
  let result = ArrayPerCrypto?.map(a => a.name);
  const menuItemsCrypto = result?.map(item => {
    return (
      <MenuItem key={item} value={item} onClick={e => handleValueClick(e, item)}>
        {item}
      </MenuItem>
    );
  });

  // returns menu items with names of assets in fiat category
  var arrayPerFiat = dataArray.filter(function (el) {
    return el.type === 'fiat';
  });
  let result2 = arrayPerFiat?.map(a => a.name);
  const menuItemsFiat = result2?.map(item => {
    return (
      <MenuItem key={item} value={item} onClick={e => handleValueClick(e, item)}>
        {item}
      </MenuItem>
    );
  });

  // returns menu items with names of assets in commodity category
  var arrayPerCommodity = dataArray.filter(function (el) {
    return el.type === 'commodity';
  });
  let result3 = arrayPerCommodity?.map(a => a.name);
  const menuItemsCommodity = result3?.map(item => {
    return (
      <MenuItem key={item} value={item} onClick={e => handleValueClick(e, item)}>
        {item}
      </MenuItem>
    );
  });

  const calculateTotalAmount = (hashMap: any) => {
    const multiplyNumber = { number };
    const menuItemSelected = { menuItem };
    const multiplyNumber2 = Object.values(multiplyNumber)[0];
    const menuItemSelected2 = Object.values(menuItemSelected)[0];

    let assetAmount: any;

    for (const [assetName, value] of Object.entries(hashMap)) {
      if (assetName === menuItemSelected2) {
        assetAmount = value;
      }
    }

    const totalAmount = assetAmount * multiplyNumber2;
    return totalAmount;
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, paddingTop: 3 }}>
        <h1>BTC Converter</h1>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} lg={12}>
            <Item>
              <FormControl sx={{ minWidth: 750, minHeight: 40 }}>
                <InputLabel htmlFor='grouped-select'>Asset</InputLabel>
                <Select defaultValue='' id='grouped-select' label='Asset'>
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <ListSubheader>Crypto</ListSubheader>
                  {menuItemsCrypto}
                  <ListSubheader>Fiat</ListSubheader>
                  {menuItemsFiat}
                  <ListSubheader>Commodity</ListSubheader>
                  {menuItemsCommodity}
                </Select>
              </FormControl>
            </Item>
          </Grid>
          <Grid item xs={4.5} md={4.5} lg={4.5}>
            <Item>
              <TextField
                id='filled-number'
                label='Amount in Bitcoin'
                type='number'
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                variant='filled'
                defaultValue={0}
                onClick={handleNumberClick}
              />
            </Item>
          </Grid>
          <Grid item xs={7.5} md={7.5} lg={7.5}>
            <Item>{calculateTotalAmount(mapNameAndValue)}</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CryptoConverter;
