import React from 'react';
import styled from 'styled-components';
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';

const FormContainer = styled.div`
  background-color: #fff;
  padding: 0;
  width: 100%;
`;

const Form = styled.form`
`;

const Input = styled.input`
  width: 100%;
  background: ${({ valid }) => (valid && '#99ffcc') || '#fff'};
  padding: 1em;
  outline: red;
  margin: 1em 0;
  -webkit-transition: all 200ms ease-in-out;
  -moz-transition: all 200ms ease-in-out;
  -ms-transition: all 200ms ease-in-out;
  -o-transition: all 200ms ease-in-out;
  transition: all 200ms ease-in-out;
  border-color: rgba(0, 0, 0, 0.2);
  border-style: solid;

  :focus {
    background-color: ${({ valid }) => (valid && '#99ffcc') || '#99ccff'};
  }

  :-webkit-autofill,
  :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 1000px ${({ valid }) => (valid && '#99ffcc') || '#99ccff'} inset;
  }

  :autofill,
  :autofill:focus {
    background-color: ${({ valid }) => (valid && '#99ffcc') || '#99ccff'};
  }
`;

const Label = styled.label`
  font-size: 1.1em;
  padding: 0 1em;
`;

const FormSection = styled.div`
  display: ${({ showing }) => (showing || 'none') || 'block'};
`;

class Contact extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      name: '',
      message: '',
      emailValid: false,
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  onEmailChange(e) {
    const valid = this.validateEmail();
    this.setState({
      email: e.target.value,
      emailValid: valid,
    });
  }

  onMessageChange(e) {
    this.setState({ message: e.target.value });
  }

  handleSubmit(e) {
    if (!this.validate()) {
      e.preventDefault();
    }
  }

  validateEmail() {
    const { email } = this.state;
    return /\S+@\S+\.\S+/.test(email);
  }

  validate() {
    return false;
  }

  render() {
    const {
      name,
      email,
      message,
      emailValid,
    } = this.state;
    return (
      <FormContainer>
        <Form onSubmit={this.handleSubmit}>
          <FormSection showing>
            <input type="hidden" value="prayer" />
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="Fill in your name"
              onChange={this.onNameChange}
              valid={name.length > 0}
              autoComplete="name"
            />
          </FormSection>
          <FormSection showing={(name)}>
            <Label>Email Address:</Label>
            <Input
              autoComplete="disable"
              type="email"
              name="email"
              placeholder="now your email address"
              value={email}
              onChange={this.onEmailChange}
              valid={email && emailValid}
            />
          </FormSection>
          <FormSection showing={email && emailValid}>
            <Label>Message:</Label>
            <Input
              autoComplete="disable"
              type="text"
              name="message"
              placeholder="now write your message :)"
              value={message}
              onChange={this.onMessageChange}
              valid={message.length > 9}
            />
          </FormSection>
          <FormSection showing>
            <button type="submit">Send Message</button>
          </FormSection>
        </Form>
        <h2>Output (testing reasons):</h2>
        <h4 style={{ borderTop: '2px solid black' }}>{`Name: ${name}`}</h4>
        <h4>{`Email: ${email}`}</h4>
        <h4>{`Message: ${message}`}</h4>
      </FormContainer>
    );
  }
}

export default Contact;
