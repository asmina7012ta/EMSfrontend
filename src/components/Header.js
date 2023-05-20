import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
        <Navbar   bg="light" variant="white">
        <Container>
          <Navbar.Brand href="#home">
          <i class="fa-solid fa-people-roof fa-2x" ></i>
            <Link to={''}><strong style={{textDecoration:'none',color:'white'}} className='ms-4 fs-3 me-5'>EmpHub</strong></Link></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home"><strong>Home</strong></Nav.Link>
            <Nav.Link href="#features"><strong>Features</strong></Nav.Link>
            <Nav.Link href="#pricing"><strong>Pricing</strong></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header