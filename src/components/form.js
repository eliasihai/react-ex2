import React from "react";
import Form from "react-bootstrap/Form";
export default class form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastName: "",
      firstName: "",
      score: "",
      errorObject: { lastName: false, firstName: false, score: false },
      dynamicContent: "",
    };
  }

  checkInputValue = (name) => {
    if (this.state[name] === "") {
      this.setState((prevState) => {
        return {
          ...prevState,
          errorObject: { ...prevState.errorObject, [name]: true },
        };
      });
    } else {
      if (this.state.errorObject[name] && this.state[name] !== "")
        this.setState((prevState) => {
          return {
            ...prevState,
            errorObject: { ...prevState.errorObject, [name]: false },
          };
        });
    }
  };

  mouseBlurHandler = (name) => {
    if (this.state[name] === "") {
      this.setState((prevState) => {
        return {
          ...prevState,
          errorObject: { ...prevState.errorObject, [name]: false },
        };
      });
    }
    if (name === "score") {
      if (this.state.score > 555)
        this.setState({ dynamicContent: "אתה יכול להתקבל ללימודים" });
      else if (this.state.score <= 555 && this.state.score != "")
        this.setState({ dynamicContent: "עלייך לנסות בשנה הבאה" });
      else 
        this.setState({dynamicContent: ""});

    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      this.checkInputValue(name);
    });
  };

  render() {
    return (
      <div className="container d-flex justify-content-center">
        <Form>
          {this.state.errorObject.lastName && (
            <p style={{ color: "red" }}>Please fill in the last name field.</p>
          )}
          <Form.Label htmlFor="lastName">Last Name:</Form.Label>
          <Form.Control
            type="text"
            id="lastName"
            name="lastName"
            value={this.state.lastName}
            onFocus={(e) => this.checkInputValue(e.target.name)}
            onBlur={(e) => this.mouseBlurHandler(e.target.name)}
            onChange={(e) => this.handleChange(e)}
          />
          {this.state.errorObject.firstName && (
            <p style={{ color: "red" }}>Please fill in the first name field.</p>
          )}
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            type="text"
            id="firstName"
            name="firstName"
            value={this.state.firstName}
            onFocus={(e) => this.checkInputValue(e.target.name)}
            onBlur={(e) => this.mouseBlurHandler(e.target.name)}
            onChange={(e) => this.handleChange(e)}
          />
          {this.state.errorObject.score && (
            <p style={{ color: "red" }}>Please fill in the score field.</p>
          )}
          <Form.Label>Score:</Form.Label>
          <Form.Control
            type="number"
            id="score"
            name="score"
            value={this.state.score}
            onFocus={(e) => this.checkInputValue(e.target.name)}
            onBlur={(e) => this.mouseBlurHandler(e.target.name)}
            onChange={(e) => this.handleChange(e)}
          />
          <p>{this.state.dynamicContent}</p>
        </Form>
      </div>
    );
  }
}
