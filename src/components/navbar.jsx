import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { TreeFill } from "react-bootstrap-icons";

function Navigation() {
  return (
    <Navbar bg="light" expand="lg" fluid className="col-md-12">
      <Container fluid>
        <Navbar.Brand href="#" className="fs-3 text-success">
          <TreeFill />
          ventorify
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", color: "white" }}
            navbarScroll
          >
            <NavLink
              to={"/warehouse"}
              className="mx-2 text-decoration-none text-secondary"
            >
              Warehouse
            </NavLink>
            <NavLink
              to={"shelf"}
              className="mx-2 text-decoration-none text-secondary"
            >
              Shelf
            </NavLink>
            <NavLink
              to={"sales"}
              className="mx-2 text-decoration-none text-secondary"
            >
              Sales
            </NavLink>
            <NavLink
              to={"create"}
              className="mx-2 text-decoration-none text-secondary"
            >
              Create record
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
