import { ForkLeft } from '@mui/icons-material';
import {
  Button,
  Card,
  CardContent,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  Tooltip,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { IGlobalData } from '../../common/interfaces/interfaces';
import { componentShadowSX } from '../../common/utils/SxStyles';

interface IProps {
  globalData: IGlobalData | undefined;
}

const GlobalData = (props: IProps) => {
  const { globalData } = props;

  const [radioButton, setRadioButton] = useState(false);

  const handleToggle = () => {
    if (radioButton === false) {
      setRadioButton(true);
    } else {
      setRadioButton(false);
    }
  };

  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={4} md={4} lg={4.5}>
            <h1>Global Crypto Information</h1>
          </Grid>

          <Grid item xs={4} md={4} lg={7.5}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch color='secondary' size='medium' onChange={handleToggle} />
                }
                label='Show stats'
                labelPlacement='top'
                sx={{ 
                  textAlign: 'bottom',
                  position: "absolute",
                }}
              />
            </FormGroup>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={12} lg={12}>
            <p>The global cyrptocurrencyt market cap today is xx million</p>
          </Grid>
        </Grid>
      </Container>

      {radioButton === true ? (
        <Container className='global-info-cards'>
          <Grid container spacing={3}>
            <Grid item xs={3} md={3} lg={3}>
              <Card className='global-card-grid' sx={componentShadowSX}>
                <CardContent className='global-card-grid'>
                  <Typography variant='h5' component='div'>
                    # of active crypto
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                    {globalData?.data?.active_cryptocurrencies}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3} md={3} lg={3}>
              <Card className='global-card-grid' sx={componentShadowSX}>
                <CardContent className='global-card-grid'>
                  <Typography variant='h5' component='div'>
                    # of crypto markets
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                    {globalData?.data?.markets}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3} md={3} lg={3}>
              <Card className='global-card-grid' sx={componentShadowSX}>
                <CardContent className='global-card-grid'>
                  <Typography variant='h5' component='div'>
                    upcoming ICOs
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                    {globalData?.data?.upcoming_icos}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3} md={3} lg={3}>
              <Card className='global-card-grid' sx={componentShadowSX}>
                <CardContent className='global-card-grid'>
                  <Typography variant='h5' component='div'>
                    Ongoing ICOs
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                    {globalData?.data?.ongoing_icos}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      ) : null}
    </>
  );
};

export default GlobalData;
