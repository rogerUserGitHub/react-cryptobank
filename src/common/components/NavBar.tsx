import { Container, Grid, Switch } from '@mui/material';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import LanguageButton from './LanguageButton';
import ToggleButtonDarkMode from './ToggleButtonDarkMode';
// import ToggleButtonDarkMode from './ToggleButtonDarkMode';

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
      <Grid >
        <nav className='nav'>
          <Link to='/' className='site-title'>
            DailyCrypto
          </Link>
          <ul>
            <CustomLink to='/pricing'>Crypto statistics</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
            <ToggleButtonDarkMode></ToggleButtonDarkMode>
            <LanguageButton></LanguageButton>
          </ul>
        </nav>
      </Grid>
    </Container>
  );
};

export default NavBar;
