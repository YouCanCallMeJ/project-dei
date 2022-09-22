import {Navbar, Container , Nav} from 'react-bootstrap';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Quote from './Quote.js'


function App(){
  return (
    <div className="App">

   
      
      <Routes>
        {/* home */}
        <Route path="/" element={<MainPg />} />   

        {/* quotes section */}
        <Route path="/quotes" element={
          <>
        <NavbarDefault/>
        <Quote />
        </>}/>

        {/* translator section */}
        <Route path="/translator" element={
            <>
              <NavbarDefault />
            <div>translator 구현예정입니다</div>
          </>}/>
        {/* question bot section */}
        <Route path="/awarenessbot" element={
          <>
          <NavbarDefault />
          <div>awarenessbot bot 구현예정입니다</div>
          </>}/>
       
      </Routes>

    </div>

  );
}

// Made main-page html as a MainPg component
function MainPg(){
  return(
    <>
        {/* Navbar section */}
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">D E I</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/quotes">Relaxing quotes</Nav.Link>
            <Nav.Link href="/translator">Translator</Nav.Link>
            <Nav.Link href="/awarenessbot">Awareness questions</Nav.Link>
          </Nav>
        </Container>
        </Navbar>
      {/* Main image */}
      <div className="main-bg"></div>

      {/* Card image section(3) */}
    <CardGroup>
      <Card>
        <Link to="/quotes">
          <Card.Img variant="top" className="card1" />
        </Link>
        <Card.Body>
          <Card.Title>Relaxing quotes You Really Need</Card.Title>
        </Card.Body>
      </Card>

      <Card>
      <Link to="/translator">
        <Card.Img variant="top" className="card2" />
      </Link>  
        <Card.Body>
          <Card.Title>Inclusive Language Translator</Card.Title>
        </Card.Body>
      </Card>

      <Card>
      <Link to="/awarenessbot">
        <Card.Img variant="top" className="card3" />
      </Link>    
        <Card.Body>
          <Card.Title>Awareness Questions Bot</Card.Title>     
        </Card.Body>    
      </Card>
    </CardGroup>
  </>
  )
}

// Made Navbar html as a NavbarDefault component
function NavbarDefault(){
  return(
    <>
    {/* Navbar section */}
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">D E I</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/quotes">Relaxing quotes</Nav.Link>
        <Nav.Link href="/translator">Translator</Nav.Link>
        <Nav.Link href="/awarenessbot">Awareness questions</Nav.Link>
      </Nav>
    </Container>
    </Navbar>
    </>
  )
}

export default App;