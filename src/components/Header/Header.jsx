import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThreeDots from 'react-bootstrap-icons/dist/icons/three-dots.js';

export const Header = () => {
  return (
    <Navbar variant='dark'>
      <Container>
        <Navbar.Brand>Freegames.db</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='my-2 my-lg-0' navbarScroll>
            <Nav.Link href='#action1'>Home</Nav.Link>
            <Nav.Link href='#action2'>Link</Nav.Link>
            <NavDropdown title={<ThreeDots />}>
              <NavDropdown.Item href='#action3'>Freetogame</NavDropdown.Item>
              <NavDropdown.Item href='#action4'>Delivery System</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action5'>mkyy space</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
