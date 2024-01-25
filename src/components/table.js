import React from "react";
// React Bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "",
    };
  }
  onTableClickHandler = (e) => {
    this.setState((prevState) => ({
      width: (prevState.width = 50),
    }));
  };
  onTableDoubleClickHandler = (e) => {
    this.setState((prevState) => ({
      width: (prevState.width = 100),
    }));
  };
  render() {
    return (
      <Container
        style={{
          width: `${this.state.width}%`,
        }}
        className="tableContainer"
        onClick={(e) => this.onTableClickHandler(e)}
        onDoubleClick={(e) => this.onTableDoubleClickHandler(e)}
      >
        <Row>
          <Col className="border" scope="col">
            1
          </Col>
          <Col className="border" scope="col">
            2
          </Col>
          <Col className="border" scope="col">
            3
          </Col>
        </Row>
        <Row>
          <Col className="border" scope="col">
            4
          </Col>
          <Col className="border" scope="col">
            5
          </Col>
          <Col className="border" scope="col">
            6
          </Col>
        </Row>
      </Container>
    );
  }
}
