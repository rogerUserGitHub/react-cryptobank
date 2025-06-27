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

interface Column {
  id: string;
  label: string;
  minWidth: number;
  align?: 'left';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  {
    id: 'logo',
    label: '',
    minWidth: 30,
  },
  {
    id: 'market_cap_rank',
    label: 'market cap rank',
    minWidth: 30,
  },
  {
    id: 'symbol',
    label: 'symbol',
    minWidth: 50,
  },
  {
    id: 'name',
    label: 'name',
    minWidth: 150,
  },
  {
    id: 'current_price',
    label: 'current price',
    minWidth: 110,
  },
  {
    id: 'low_24h',
    label: '24h low',
    minWidth: 110,
  },
  {
    id: 'high_24h',
    label: '24h high',
    minWidth: 110,
  },
  {
    id: 'price_change_percentage_24h',
    label: '24h price change',
    minWidth: 110,
  },
  {
    id: 'sparkline',
    label: 'sparkline',
    minWidth: 110,
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

  const extractCoinId = (url: string): string => {
    const match = url?.match(/images\/(\d+)\/large/);
    return match ? parseInt(match[1], 10).toString() : '';
  };

  cryptoData?.map((data) => {
    const coinId = extractCoinId(data?.image);
    data.sparkline = `https://www.coingecko.com/coins/${coinId}/sparkline.svg`;
  });

  return (
    <>
      <Container>
        <Grid>
          <Typography>
            <h1>{t('Homepage.cryptoTable.header')}</h1>
            <p>{t('Homepage.cryptoTable.paragraph')}</p>
          </Typography>
        </Grid>
      </Container>

      <Container>
        <TableContainer sx={{ maxHeight: 2000 }}>
          <Grid item xs={12} md={6} lg={4}>
            <Table aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                      sx={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        color: 'darkgreen',
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {cryptoData
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row: any) => {
                    return (
                      <TableRow
                        component={Link}
                        href={`/details/${row.id}`}
                        hover
                        tabIndex={-1}
                        key={row.id}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];

                          return (
                            <TableCell
                              key={column.id}
                              sx={{
                                fontWeight: 'semi-bold',
                                fontSize: 19,
                              }}
                            >
                              {column.id === 'logo' ? (
                                <img
                                  src={row.image}
                                  alt={row.name}
                                  width="30"
                                  height="30"
                                  style={{ borderRadius: '50%' }}
                                />
                              ) : column.id === 'sparkline' ? (
                                <img
                                  src={row.sparkline}
                                  alt={`${row.name} sparkline`}
                                  width="100"
                                  height="30"
                                />
                              ) : column.format && typeof value === 'number' ? (
                                column.format(value)
                              ) : (
                                value
                              )}
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
          component="div"
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
