import {
  Card,
  CardContent,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  Skeleton,
  Switch,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { IGlobalData } from '../../common/interfaces/interfaces';
import { componentShadowSX } from '../../common/utils/SxStyles';
import { useTranslation } from 'react-i18next';

interface IProps {
  globalData: IGlobalData | undefined;
  isLoading: boolean;
  hasError: boolean;
}

const GlobalData = ({ globalData, isLoading, hasError }: IProps) => {
  const [showStats, setShowStats] = useState(false);
  const { t } = useTranslation();

  const handleToggle = () => {
    setShowStats((prev) => !prev);
  };

  if (isLoading) {
    return (
      <Container>
        <Grid item xs={12} md={6} marginBottom={1}>
          <Typography variant="h4">{t('Homepage.global.header')}</Typography>
        </Grid>
        <Grid container spacing={3}>
          {Array.from({ length: 4 }).map((_, idx) => (
            <Grid item xs={3} md={3} lg={3} key={idx}>
              <Skeleton variant="rectangular" height={150} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }

  if (hasError) {
    return (
      <Container>
        <Grid item xs={12} md={6} marginBottom={1}>
          <Typography variant="h4">{t('Homepage.global.header')}</Typography>
        </Grid>
        <Typography variant="body1" color="text.secondary">
          {t('Homepage.global.errorDescription')}
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={6} marginBottom={1}>
          <Typography variant="h4">{t('Homepage.global.header')}</Typography>
        </Grid>
        <Grid item xs={12} md={6} display="flex" justifyContent="flex-end" >
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  color="secondary"
                  size="medium"
                  onChange={handleToggle}
                />
              }
              label={t('Homepage.global.showStats')}
              labelPlacement="start"
            />
          </FormGroup>
        </Grid>
      </Grid>

      {showStats && globalData ? (
        <Container className="global-info-cards" >
          <Grid container spacing={3} marginBottom={1}>
            <StatCard
              title={t('Homepage.global.card1Title')}
              value={globalData.data?.active_cryptocurrencies}
            />
            <StatCard
              title={t('Homepage.global.card2Title')}
              value={globalData.data?.markets}
            />
            <StatCard
              title={t('Homepage.global.card3Title')}
              value={globalData.data?.upcoming_icos}
            />
            <StatCard
              title={t('Homepage.global.card4Title')}
              value={globalData.data?.ongoing_icos}
            />
          </Grid>
        </Container>
      ) : null}
    </Container>
  );
};

const StatCard = ({
  title,
  value,
}: {
  title: string;
  value: number | undefined;
}) => (
  <Grid item xs={12} sm={6} md={3}>
    <Card className="global-card-grid" sx={componentShadowSX}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {value ?? '-'}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

export default GlobalData;
