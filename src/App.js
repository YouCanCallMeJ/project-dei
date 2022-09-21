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
        <Card.Img variant="top" className="card1" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" className="card2" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" className="card3" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
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