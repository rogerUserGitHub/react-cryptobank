import { Switch } from "@mui/material";
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export const NavBar = () => {
  return (
    <nav className='nav'>
      <Link to='/' className='site-title'>
        Crypto Rates and News
      </Link>
      <ul>
        {/* <Switch>Darkmode</Switch>   */}
        <CustomLink to='/pricing'>Crypto statistics</CustomLink>
        <CustomLink to='/about'>About</CustomLink>
      </ul>
    </nav>
  );
};

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

export default NavBar;
