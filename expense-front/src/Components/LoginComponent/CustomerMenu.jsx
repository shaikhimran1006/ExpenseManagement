import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CustomerMenu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/LoginPage"); // Redirect to login page
  };

  return (
    <div style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1565021324587-5fd009870e68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fERhcmslMjBibHVlfGVufDB8fDB8fHww')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}>
    <Navbar style={{ backgroundColor: "#001F3F" ,height: "80px"}} variant="dark" expand="lg" className="py-3" >
      <Container fluid>
        {/* Left Side - System Name */}
        <Navbar.Brand className="fw-bold fs-4">Expense Management System</Navbar.Brand>

        <Navbar.Toggle aria-controls="customer-navbar" />
        <Navbar.Collapse id="customer-navbar">
          <Nav className="ms-auto d-flex align-items-center">
            {/* Customer Dropdown */}
            <NavDropdown title="Customer" id="customer-dropdown" className="mx-3 fs-5">
              <NavDropdown.Item href="#">Customer Registration</NavDropdown.Item>
              <NavDropdown.Item href="#">Customer Details</NavDropdown.Item>
            </NavDropdown>

            {/* Expense Dropdown */}
            <NavDropdown title="Expense" id="expense-dropdown" className="mx-3 fs-5">
              <NavDropdown.Item href="#">Expense Entry</NavDropdown.Item>
              <NavDropdown.Item href="#">Category List</NavDropdown.Item>
              <NavDropdown.Item href="#">Expense Report</NavDropdown.Item>
            </NavDropdown>

            {/* Logout */}
            <Nav.Link onClick={handleLogout} className="text-danger fw-bold mx-3 fs-5" style={{ cursor: "pointer" }}>
              Logout
            </Nav.Link>

            {/* Profile mentioning Customer */}
            <Nav.Link className="fw-bold text-warning mx-3 fs-5">Customer</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default CustomerMenu;
