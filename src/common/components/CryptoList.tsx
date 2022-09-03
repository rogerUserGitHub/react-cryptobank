import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Container, Grid, makeStyles, Typography } from '@mui/material';
import { ICryptoData } from '../interfaces/interfaces';

interface IProps {
  cryptoData: ICryptoData[]
}

const columns: GridColDef[] = [
  { field: 'market_cap_rank', headerName: 'Market cap rank', width: 150, description: 'This column has a value getter and is not sortable.',},
  { field: 'symbol', headerName: 'Symbol', width: 100 },
  { field: 'name', headerName: 'Name Crypto', width: 170 },
  { field: 'current_price', headerName: 'Current price', width: 140 },
  { field: 'low_24h', headerName: 'Low 24', width: 160 },
  { field: 'price_change_percentage_24h', headerName: '24h price change', width: 160 },
  { field: 'total_supply', headerName: 'Total supply', width: 200 },
];

const CryptoList = (props: IProps) => {

  return (
    <>
    <Container>
    <Grid>
      <Typography>
        <h1>Cryptocurrencies by Market Cap</h1>
        <p>testtest</p>
      </Typography>
    </Grid>
  </Container>
    <Container id='crypto-list-container'>
      <Grid container spacing={5}>
        <div style={{ height: 2712, width: '100%' }}>
          <DataGrid
            rows={props.cryptoData}
            columns={columns}
            pageSize={50}
            rowsPerPageOptions={[100]}
          />
        </div>
      </Grid>
    </Container>
    </>
  );
}

export default CryptoList
