import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoDark from "../assets/macatoon.png"; 
import "boxicons/css/boxicons.min.css";

function NavbarToon() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow-sm">
      <Container fluid>
        <Navbar.Brand href="#" className="d-flex align-items-center gap-2">
          <img
            src={logoDark}
            alt="macatoon logo icon"
            width="40"
            height="40"
            className="d-inline-block align-top"
            style={{ objectFit: "contain" }}
          />
          <span className="fw-bold fs-4 text-primary">MACATOON</span>
        </Navbar.Brand>

        {/* Toggle Mobile */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          
          {/* NAV LINKS */}
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
             {/* Trend */}
  <Nav.Link href="#trend" className="d-flex align-items-center gap-1 text-primary ">
    <i className="bx bx-like fs-5 d-inline-block" style={{ lineHeight: 1 }}></i>
    Trend
  </Nav.Link>

  {/* Shop */}
  <Nav.Link href="#shop" className="d-flex align-items-center gap-1 text-primary">
    <i className="bx bx-cart fs-5 d-inline-block" style={{ lineHeight: 1 }}></i>
    Shop
  </Nav.Link>

         <NavDropdown
    title={
      <span className="d-flex align-items-center text-primary">
        <i className="bx bx-user-circle fs-5 d-inline-block" style={{ lineHeight: 1 }}></i>
        Account
      </span>
    }
    id="navbarScrollingDropdown"
  >
    <NavDropdown.Item href="#signin">Sign In</NavDropdown.Item>
    <NavDropdown.Item href="#signup">Sign Up</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item> */}
            </NavDropdown>

            {/* <Nav.Link disabled>Disabled</Nav.Link> */}
          </Nav>

          {/* SEARCH BAR */}
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search comic..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarToon;
