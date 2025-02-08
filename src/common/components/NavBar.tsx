import { Container, Grid, Switch } from '@mui/material';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import LanguageButton from './LanguageButton';

function CustomLink({ to, children, ...props }: any) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export const NavBar = () => {
  return (
    <Container>
      <Grid container direction="row" className="nav">
        <Grid item lg={1} className="nav-icon">
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + '/goat.jpg'}
              alt="goat"
              width={100}
              height={100}
              className="center"
            ></img>
          </Link>
        </Grid>
        <Grid item lg={7} className="nav-title">
          <Link to="/">DailyCrypto</Link>
        </Grid>
        <Grid item lg={4} className="nav-options">
          <ul>
            <CustomLink to="/about">About</CustomLink>
            <LanguageButton />
          </ul>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NavBar;
