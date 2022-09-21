import {Navbar, Container , Nav} from 'react-bootstrap';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function App(){
  return (
    <div className="App">

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
      <div className="main-bg"></div>

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



      
      <Routes>
        <Route path="/" element={<div>(지울예정)홈입니다</div>} />      
       
        <Route path="/quotes" element={<div>격려문 페이지 입니다</div>}/>
        <Route path="/translator" element={<div>translator 구현예정입니다</div>}/>
        <Route path="/awarenessbot" element={<div>awarenessbot bot 구현예정입니다</div>}/>
      </Routes>

    </div>

  );
}
export default App;