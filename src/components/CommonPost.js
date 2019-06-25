import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import "./CommonPost.css";

class CommonPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "",
      title: "",
      message: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const data = this.state;
    console.log(data);
  };

  handleSubjectChange = event => {
    event.preventDefault();
    // console.log(event);
    this.setState({
      subject: event.target.value
    });
  };
  handleTitleChange = event => {
    event.preventDefault();
    // console.log(event);
    this.setState({
      title: event.target.value
    });
  };

  handleMessageChange = event => {
    event.preventDefault();
    // console.log(event);
    this.setState({
      message: event.target.value
    });
  };

  render() {
    return (
      // const {subjectMessage} = this.state
      // const {title} = this.state
      // const {message} = this.state
      <div>
        <Container>
          <Form onSubmit={this.handleSubmit} onChange={this.handleInputChange}>
            <Row>
              <Col>
                <Form.Group controlId="Form.ControlSelect1">
                  <Form.Label className="title" name="subject">
                    Subject
                  </Form.Label>
                  <br />
                  <Form.Control
                    as="select"
                    className="dropMenu"
                    name="dropMenu"
                    value={this.state.subject}
                    onChange={this.handleSubjectChange}
                  >
                    <option>Administrative</option>
                    <option>Householding</option>
                    <option>Problems</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label className="title" name="titleMessage">
                    Title
                  </Form.Label>
                  <Form.Label />
                  <Form.Control
                    type="text"
                    placeholder="Here goes the title of your post"
                    required
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                    name="title"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="title" name="message">
                    Message
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    value={this.state.message}
                    onChange={this.handleMessageChange}
                    required
                  />
                </Form.Group>
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    );
  }
}

export default CommonPost;
