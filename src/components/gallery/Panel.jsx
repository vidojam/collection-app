import {Col, Card, Image} from "react-bootstrap";

export default function Panel ({data: {id, name, about, cover, image, website}}) {
  
  return (
    <Col key={id} sm={10} md={6} lg={4}>
      <Card className="p-3">
        <figure>
          <Image src={image} fluid/>
        </figure>

        <div className="content">
          <h3>{name}</h3>
          <p>{about}</p>
        </div>
      </Card>
    </Col>
  )
}