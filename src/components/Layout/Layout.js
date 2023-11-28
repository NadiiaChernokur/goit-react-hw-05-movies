import { Container, Nav } from 'components/Layout/Layout.styled';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Container>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </Nav>
      <Outlet />
    </Container>
  );
};

export default Layout;
