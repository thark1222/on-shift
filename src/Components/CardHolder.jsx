import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./CardHolder.css";
function CardHolder(props) {
  return (
    <div className="cardholder">
      <Card
        bg="light"
        text={props.active ? "dark" : "muted"}
        border={props.active ? "primary" : "muted"}
        style={props.active ? { width: "35rem" } : { width: "25rem" }}
        className={props.active ? "mb-2" : " mb-2 opacity-50"}
      >
        <Card.Header className={props.active ? "text-primary" : ""}>
          <h3>{props.shift.shift}</h3>
        </Card.Header>
        <Card.Body>
          <Card.Title>{props.person}</Card.Title>
          <Card.Text>{props.number}</Card.Text>
        </Card.Body>
        <Card.Footer className="dark">
          <Container>
            <Row>
              <Col>{props.shift.time}</Col>
              <Col xs lg="3" className={String(props.timeLeft)[0] === "0"? 'text-danger': 'text-primary'}>
                {props.active ? "Time Left: " + props.timeLeft : ""}
              </Col>
            </Row>
          </Container>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default CardHolder;
