import React from "react";
// React Bootstrap Components
import { Button } from "react-bootstrap";
// React Bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default class eightButtons extends React.Component {
  handleClick = (color) => {
    document.body.style.backgroundColor = color;
  };

  render() {
    return (
      <Container>
        <Col>
          <Row className="mt-2 mb-2 w-50">
            <Button onClick={() => this.handleClick("red")}>Red</Button>
          </Row>
          <Row className="mt-2 mb-2 w-50">
            <Button onClick={() => this.handleClick("Green")}>Green</Button>
          </Row>
          <Row className="mt-2 mb-2 w-50">
            <Button onClick={() => this.handleClick("Blue")}>Blue</Button>
          </Row>
          <Row className="mt-2 mb-2 w-50">
            <Button onClick={() => this.handleClick("Yellow")}>Yellow</Button>
          </Row>
          <Row className="mt-2 mb-2 w-50">
            <Button onClick={() => this.handleClick("Grey")}>Grey</Button>
          </Row>
          <Row className="mt-2 mb-2 w-50">
            <Button onClick={() => this.handleClick("Purple")}>Purple</Button>
          </Row>
          <Row className="mt-2 mb-2 w-50">
            <Button onClick={() => this.handleClick("Brown")}>Brown</Button>
          </Row>
        </Col>
      </Container>
    );
  }
}
