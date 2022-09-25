import * as React from 'react';
import {
  Container,
  Grid,
  Link,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import { ICryptoData } from '../../common/interfaces/interfaces';
import { Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { fontSize } from '@mui/system';

interface Column {
  id: string;
  label: string;
  minWidth: number;
  align?: 'left';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  {
    id: 'market_cap_rank',
    label: 'market cap rank',
    minWidth: 120,
  },
  {
    id: 'symbol',
    label: 'symbol',
    minWidth: 90,
  },
  {
    id: 'name',
    label: 'name',
    minWidth: 170,
  },
  {
    id: 'current_price',
    label: 'current price',
    minWidth: 120,
  },
  {
    id: 'low_24h',
    label: '24h low',
    minWidth: 130,
  },
  {
    id: 'high_24h',
    label: '24h high',
    minWidth: 130,
  },
  {
    id: 'price_change_percentage_24h',
    label: '24h price change',
    minWidth: 120,
  },
];

interface IProps {
  cryptoData: ICryptoData[];
}

const CryptoTable = (props: IProps) => {
  const { cryptoData } = props;
  const [t, i18n] = useTranslation();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Container>
        <Grid>
          <Typography>
            <h1>
            {t('Homepage.cryptoTable.header')}
            </h1>
            <p>
            {t('Homepage.cryptoTable.paragraph')}
              </p>
          </Typography>
        </Grid>
      </Container>

      <Container >
      <TableContainer sx={{ maxHeight: 2000 }}>
        <Grid item xs={12} md={6} lg={4}>
          <Table aria-label='sticky table'>
            <TableHead>
              <TableRow 
              >
                {columns
                .map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    sx={{ 
                      fontWeight: 'bold',
                      fontSize: 18, 
                      color: 'darkblue'
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {cryptoData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any) => {
                return (
                  <TableRow
                    component={Link}
                    href={`/details/${row.id}` }
                    hover
                    tabIndex={-1}
                    id={row.id}
                  >
                    {columns.map(column => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} >
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          </Grid>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 50]}
            component='div'
            count={cryptoData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
      </Container>
    </>
  );
};

export default CryptoTable;
