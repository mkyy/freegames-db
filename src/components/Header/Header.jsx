import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThreeDots from 'react-bootstrap-icons/dist/icons/three-dots.js';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Navbar variant='dark'>
      <Container>
        <Navbar.Brand>
          <Link className='link' to={'/'}>
            Freegames.db
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='my-2 my-lg-0' navbarScroll>
            <Nav.Link href='/games'>Todos jogos</Nav.Link>
            <NavDropdown title={<ThreeDots />}>
              <NavDropdown.Item href='https://delivery-crud-system.vercel.app/'>
                Delivery System
              </NavDropdown.Item>
              <NavDropdown.Item href='https://www.freetogame.com/'>Freetogame</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='https://mkyyspace.vercel.app'>mkyy space</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
