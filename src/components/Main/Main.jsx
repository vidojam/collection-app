import { HashLink } from "react-router-hash-link";
import { Col, Row, Container, Button} from "react-bootstrap";

export default function Main() {

  return (
    <main>
      <Container>
        <Row>
          <Col>
          <h1>Gallery</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsa quos dolorem hic maiores obcaecati quisquam in debitis, sed quas omnis quod similique laudantium laboriosam necessitatibus possimus sit reiciendis magnam.</p>
              <HashLink to="/#gallery"><Button>See Gallery</Button></HashLink>
          </Col>
        </Row>
      </Container>
    </main>
  )
}