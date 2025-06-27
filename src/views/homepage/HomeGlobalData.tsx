import {
  Container,
  FormControlLabel,
  FormGroup,
  Paper,
  Grid2,
  Skeleton,
  Switch,
  Typography,
  styled,
  Link,
} from '@mui/material';
import { useState } from 'react';
import { IGlobalData, ITrendingCrypto } from '../../common/interfaces/interfaces';
import { useTranslation } from 'react-i18next';
import FireIcon from '@mui/icons-material/LocalFireDepartment';
import RocketIcon from '@mui/icons-material/RocketLaunch';

interface IProps {
  globalData: IGlobalData | undefined;
  trendingCrypto: ITrendingCrypto[];
  isLoading: boolean;
  hasError: boolean;
}

const GlobalData = ({ globalData, trendingCrypto, isLoading, hasError }: IProps) => {
  const [showStats, setShowStats] = useState(true);
  const { t } = useTranslation();
  console.log(trendingCrypto);

  const handleToggle = () => {
    setShowStats(!showStats);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const StyledBox = styled(Paper)(({ theme }) => ({
    textAlign: 'left',
    color: theme.palette.text.secondary,
    height: '100%',
  }));

  const StyledLogoBox = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
  }));

  if (isLoading) {
    return (
      <Container>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Typography variant="h4">{t('Homepage.global.header')}</Typography>
        </Grid2>
        <Grid2 container spacing={3}>
          {Array.from({ length: 4 }).map((_, idx) => (
            <Grid2 size={{ xs: 12, md: 6, lg: 3 }} key={idx}>
              <Skeleton variant="rectangular" height={150} />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    );
  }

  if (hasError) {
    return (
      <Container>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Typography variant="h4">{t('Homepage.global.header')}</Typography>
        </Grid2>
        <Typography variant="body1" color="text.secondary">
          {t('Homepage.global.errorDescription')}
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Grid2 container>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <Typography variant="h4">{t('Homepage.global.header')}</Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6, lg: 3 }} display="flex" justifyContent="flex-end">
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  color="secondary"
                  size="medium"
                  onChange={handleToggle}
                  checked={showStats}
                />
              }
              label={t('Homepage.global.showStats')}
              labelPlacement="start"
            />
          </FormGroup>
        </Grid2>
      </Grid2>

      {showStats && globalData && trendingCrypto?.length > 0 ? (
        <Grid2 container spacing={1}>
          <Grid2 size={{ md: 12, lg: 6 }}>
            <Grid2 container direction="row" spacing={1}>
              <Grid2 size={{ lg: 1 }}>
                <StyledLogoBox>
                  <FireIcon color="error" fontSize="large"></FireIcon>
                </StyledLogoBox>
              </Grid2>
              <Grid2 size={{ lg: 11 }}>
                <StyledBox>
                  <Typography variant="h6">Trending</Typography>
                </StyledBox>
              </Grid2>

              {trendingCrypto?.slice(0, 3).map((crypto) => (
                <>
                  <Grid2
                    size={{ lg: 1 }}
                    key={crypto?.item?.id}
                    container
                    alignItems="center"
                    spacing={1}
                    component={Link}
                    href={`/details/${crypto?.item?.id}`}
                    sx={{ cursor: 'pointer', textDecoration: 'none' }}
                  >
                    <StyledLogoBox>
                      <img
                        src={crypto?.item?.small}
                        alt={crypto?.item?.symbol}
                        width="22"
                        height="22"
                      />
                    </StyledLogoBox>
                  </Grid2>
                  <Grid2 size={{ lg: 9 }}>
                    <StyledBox>
                      <Typography variant="body1">{crypto?.item?.name}</Typography>
                    </StyledBox>
                  </Grid2>
                  <Grid2 size={{ lg: 2 }}>
                    <StyledBox>
                      <Typography variant="body1">
                        ${crypto?.item?.data?.price?.toFixed(3)}
                      </Typography>
                    </StyledBox>
                  </Grid2>
                </>
              ))}
            </Grid2>
          </Grid2>

          <Grid2 size={{ md: 12, lg: 6 }}>
            <Grid2 container direction="row" spacing={1}>
              <Grid2 size={{ lg: 1 }}>
                <StyledBox>
                  <RocketIcon color="info" fontSize="large"></RocketIcon>
                </StyledBox>
              </Grid2>
              <Grid2 size={{ lg: 11 }}>
                <StyledBox>
                  <Typography variant="h6">Spotlight</Typography>
                </StyledBox>
              </Grid2>

              {trendingCrypto?.slice(4, 7).map((crypto) => (
                <>
                  <Grid2
                    size={{ lg: 1 }}
                    key={crypto?.item?.id}
                    container
                    alignItems="center"
                    spacing={1}
                    component={Link}
                    href={`/details/${crypto?.item?.id}`}
                    sx={{ cursor: 'pointer', textDecoration: 'none' }}
                  >
                    <StyledLogoBox>
                      <img
                        src={crypto?.item?.small}
                        alt={crypto?.item?.symbol}
                        width="22"
                        height="22"
                      />
                    </StyledLogoBox>
                  </Grid2>
                  <Grid2 size={{ lg: 9 }}>
                    <StyledBox>
                      <Typography variant="body1">{crypto?.item?.name}</Typography>
                    </StyledBox>
                  </Grid2>
                  <Grid2 size={{ lg: 2 }}>
                    <StyledBox>
                      <Typography variant="body1">
                        ${crypto?.item?.data?.price?.toFixed(3)}
                      </Typography>
                    </StyledBox>
                  </Grid2>
                </>
              ))}
            </Grid2>
          </Grid2>
        </Grid2>
      ) : null}
    </Container>
  );
};

export default GlobalData;
