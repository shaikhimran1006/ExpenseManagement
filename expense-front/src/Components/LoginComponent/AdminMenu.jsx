import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AdminMenu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/LoginPage"); // Redirect to login page
  };

  return (
    <div
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1565021324587-5fd009870e68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fERhcmslMjBibHVlfGVufDB8fDB8fHww')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Navbar
        style={{ backgroundColor: "rgba(0, 31, 63, 0.9)", height: "80px" }}
        variant="dark"
        expand="lg"
        className="py-3"
      >
        <Container fluid>
          {/* Left Side - System Name */}
          <Navbar.Brand className="fw-bold fs-4 text-light">
            Expense Management System
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="admin-navbar" />
          <Navbar.Collapse id="admin-navbar">
            <Nav className="ms-auto d-flex align-items-center">
              {/* Customer List */}
              <Nav.Link href="#" className="mx-3 fs-5 text-light">
                Customer List
              </Nav.Link>

              {/* Category Dropdown */}
              <NavDropdown
                title="Category"
                id="category-dropdown"
                className="mx-3 fs-5 text-light"
                menuVariant="dark"
              >
                <NavDropdown.Item href="/category-add" className="text-light">
                  Category Addition
                </NavDropdown.Item>
                <NavDropdown.Item href="/category-list" className="text-light">
                  Category List
                </NavDropdown.Item>
              </NavDropdown>

              {/* Expense Report */}
              <Nav.Link href="#" className="mx-3 fs-5 text-light">
                Expense Report
              </Nav.Link>

              {/* Logout */}
              <Nav.Link
                onClick={handleLogout}
                className="fw-bold mx-3 fs-5 text-danger"
                style={{ cursor: "pointer" }}
              >
                Logout
              </Nav.Link>

              {/* Profile mentioning Admin */}
              <Nav.Link className="fw-bold text-warning mx-3 fs-5">
                Admin
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AdminMenu;
