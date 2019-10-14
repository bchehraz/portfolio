import React from 'react';
import styled from 'styled-components';
import { AwesomeButtonProgress } from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';
import Axios from 'axios';
import { FaCheckCircle } from 'react-icons/fa';

const FormContainer = styled.div`
  background-color: #fff;
  padding: 0;
  width: 100%;
`;

const Form = styled.form`
  ${(props) => props.formHidden && 'opacity: 0;' || 'opacity: 1;'}
  ${(props) => props.formHidden && 'margin-top: -25.4rem;'}
  ${(props) => props.hideForm && 'display: none;'}
  -webkit-transition: all 500ms ease-in-out;
  -moz-transition: all 500ms ease-in-out;
  -ms-transition: all 500ms ease-in-out;
  -o-transition: all 500ms ease-in-out;
  transition: all 500ms ease-in-out;
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
  -webkit-transition: all 200ms ease-in-out;
  -moz-transition: all 200ms ease-in-out;
  -ms-transition: all 200ms ease-in-out;
  -o-transition: all 200ms ease-in-out;
  transition: all 200ms ease-in-out;
`;

const FormSection = styled.div`
  display: ${({ showing }) => (showing || 'none') || 'block'};
  -webkit-transition: all 200ms ease-in-out;
  -moz-transition: all 200ms ease-in-out;
  -ms-transition: all 200ms ease-in-out;
  -o-transition: all 200ms ease-in-out;
  transition: all 200ms ease-in-out;
`;

const FormSuccess = styled.div`
  ${(props) => props.formHidden && 'opacity: 1;' || 'opacity: 0;'}
  -webkit-transition: all 500ms ease-in-out;
  -moz-transition: all 500ms ease-in-out;
  -ms-transition: all 500ms ease-in-out;
  -o-transition: all 500ms ease-in-out;
  transition: all 500ms ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  h4 {
    padding: 0 1rem;
    margin: 0;
  }
`;

class Contact extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      name: '',
      message: '',
      emailValid: false,
      resultLabel: '',
      formSuccess: false,
      hideForm: false,
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.onMessageFocus = this.onMessageFocus.bind(this);
    this.hideForm = this.hideForm.bind(this);
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

  validateEmail() {
    const { email } = this.state;
    return /\S+@\S+\.\S+/.test(email);
  }

  // test function
  onMessageFocus() {
    const valid = this.validateEmail();
    this.setState({
      emailValid: valid,
    });
  }

  hideForm() {
    this.setState({
      formSuccess: true,
    });
    setTimeout(() => {
      this.setState({
        hideForm: true,
      })
    }, 750);
  }

  handleSubmit = async () => {
    const { name, email, message } = this.state;
    let bodyFormData = new FormData();

    if (name.length <= 0) {
      this.setState({ resultLabel: 'Error :( please enter your name' });
      return await false;
    } else if (!this.validateEmail()) {
      this.setState({ resultLabel: 'Error :( please enter a valid email!' });
      return await false;
    } else if (message.length < 10) {
      this.setState({ resultLabel: 'Error :( message length is too short' });
      return await false;
    }

    bodyFormData.set('name', name)
    bodyFormData.set('email', email);
    bodyFormData.set('message', message);

    try {
      const result = await Axios({
        method: 'post',
        url: '/send-email',
        baseURL: 'https://babak-portfolio-smtp.herokuapp.com',
        data: {
          email,
          name,
          message
        },
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (result.data.success) {
        this.setState({
          resultLabel: 'Message Sent :)',
        });
        return true;
      } else {
        throw new Error('An error occurred.');
      }
    } catch (err) {
      return false;
    }
  }

  render() {
    const {
      name,
      email,
      message,
      emailValid,
      resultLabel,
      formSuccess,
      hideForm,
    } = this.state;
    return (
      <FormContainer>
        <Form onSubmit={(e) => e.preventDefault()} method="post" formHidden={formSuccess} hideForm={hideForm}>
          <FormSection showing>
            <input type="hidden" value="prayer" />
            <Label>Name</Label>
            <Input
              type="text"
              name={`name`}
              placeholder="Fill in your name"
              onChange={this.onNameChange}
              valid={name.length > 0}
              autoComplete="name"
            />
          </FormSection>
          <FormSection showing={name !== ''}>
            <Label>Email Address:</Label>
            <Input
              type="email"
              name="email"
              placeholder="now your email address"
              value={email}
              onChange={this.onEmailChange}
              valid={email && emailValid}
              onKeyPress={this.onEmailChange}
              onKeyUp={this.onEmailChange}
            />
          </FormSection>
          <FormSection showing={emailValid}>
            <Label>Message:</Label>
            <Input
              autoComplete="disable"
              type="text"
              name="message"
              placeholder="now write your message :)"
              value={message}
              onChange={this.onMessageChange}
              valid={message.length > 9}
              onFocus={this.onMessageFocus}
            />
          </FormSection>
          <FormSection showing={true}>
            <AwesomeButtonProgress
              type="primary"
              resultLabel={resultLabel}
              releaseDelay={3000}
              style={{ width: '100%' }}
              action={async (element, next) => {
                let result = false;
                result = await this.handleSubmit();
                setTimeout(() => {
                  next(result);
                }, 200);

                setTimeout(() => {
                  if (result) this.hideForm();
                }, 2000);
              }}
            >
              Send Message
            </AwesomeButtonProgress>
          </FormSection>
        </Form>
        <FormSuccess formHidden={formSuccess}>
          <FaCheckCircle size={50} style={{ color: '#00ffcc' }} /><h4>Message Sent Successfully</h4>
        </FormSuccess>
      </FormContainer>
    );
  }
}

export default Contact;
