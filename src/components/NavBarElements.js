import React from 'react';
import Nav from 'react-bootstrap/Nav';


const NavBarElements = () => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/Bot">Bot</Nav.Link>
    <Nav.Link href="/Holiyday">Holiyday</Nav.Link>
    <Nav.Link href="/Motivation">Motivation</Nav.Link>
    <Nav.Link href="/Translator">Translator</Nav.Link>
    
    {/* <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link> */}
  </Nav>
  )
}

export default NavBarElements;