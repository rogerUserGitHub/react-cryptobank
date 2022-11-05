import { Container, Grid } from '@mui/material';

export default function Footer() {
  return (
    <>
      <br></br>
      <br></br>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={4} md={4} lg={4}>
            <a href='https://www.linkedin.com/in/rogerdirkx/'>
              <img
                src={'linkedin.png'}
                alt={'Linkedin'}
                width={60}
                className='right'
              ></img>
            </a>
          </Grid>
          <Grid item xs={4} md={4} lg={4}>
            <a href='https://github.com/rogerUserGitHub'>
              <img src='github.png' alt={'Github'} width={60} className='center'></img>
            </a>
            <p className='center-p'>
              <b>All rights reserved @Roger Dirkx, 2022</b>
            </p>
          </Grid>
          <Grid item xs={4} md={4} lg={4}>
            <a href='https://reactjs.org/'>
              <img src='react.png' alt={'React'} width={60} className='left'></img>
            </a>
          </Grid>
        </Grid>
      </Container>
      <br></br>
    </>
  );
}
