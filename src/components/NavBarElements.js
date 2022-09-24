import React from 'react';
import Nav from 'react-bootstrap/Nav';


const NavBarElements = () => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
    <Nav.Link className ='linkColor' href="/">Home</Nav.Link>
    <Nav.Link className ='linkColor' href="/Bot">Bot</Nav.Link>
    <Nav.Link className ='linkColor' href="/Holiyday">Holiyday</Nav.Link>
    <Nav.Link className ='linkColor' href="/Motivation">Motivation</Nav.Link>
    <Nav.Link className ='linkColor' href="/Translator">Translator</Nav.Link>
    
    {/* <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link> */}
  </Nav>
  )
}

export default NavBarElements;