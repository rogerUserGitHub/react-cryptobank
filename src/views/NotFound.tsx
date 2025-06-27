import { Container, Grid } from '@mui/material';
import gif from '../public/notfound.gif';

export default function NotFound() {
  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={12} md={12} lg={12}>
            <img src="notfound.gif" alt="notfound" height={850} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
