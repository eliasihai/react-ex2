import { Component } from "react";
import "./App.css";
import EightButtons from "./components/eightButtons";
import FormComp from './components/form';
import TableComp from "./components/table";
// React Bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Container className="w-100">
          <Row>
            <Col>
              <EightButtons></EightButtons>
            </Col>
            <Col>
              <FormComp></FormComp>
            </Col>
            <Col className="bigContainer">
              <TableComp></TableComp>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
