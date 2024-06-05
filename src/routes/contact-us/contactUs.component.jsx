import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  body {
    width: 100%;
    min-height: 100vh;
    background-color: #2e2e2e;
    color: white;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 8%;
`;

const Row = styled.main`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;

  &.left {
    flex-basis: 35%;
    min-width: 320px;
    margin-right: 60px;
  }

  &.right {
    flex-basis: 60%;
  }
`;

const ContactTitle = styled.div`
  margin-bottom: 20px;

  h2 {
    position: relative;
    font-size: 28px;
    color: #ddd;
    display: inline-block;
    margin-bottom: 25px;

    &::before {
      content: '';
      position: absolute;
      width: 50%;
      height: 1px;
      background-color: #888;
      top: 120%;
      left: 0;
    }

    &::after {
      content: '';
      position: absolute;
      width: 25%;
      height: 3px;
      background-color: dodgerblue;
      top: calc(120% - 1px);
      left: 0;
    }
  }

  p {
    font-size: 17px;
    color: #ccc;
    letter-spacing: 1px;
    line-height: 1.2;
    padding-bottom: 22px;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 16px;
`;

const IconGroup = styled.div`
  display: flex;
  align-items: center;
  margin: 25px 0;

  .icon {
    width: 45px;
    height: 45px;
    border: 2px solid dodgerblue;
    border-radius: 50%;
    margin-right: 20px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    i {
      font-size: 20px;
      color: #ddd;
    }
  }

  .details span {
    display: block;
    color: #888;
    font-size: 18px;

    &:nth-child(1) {
      text-transform: uppercase;
      color: #ccc;
    }
  }
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin: 22px 0 20px;

  a {
    width: 35px;
    height: 35px;
    text-decoration: none;
    text-align: center;
    margin-right: 15px;
    border-radius: 5px;
    background-color: dodgerblue;
    transition: 0.4s;
    display: flex;
    justify-content: center;
    align-items: center;

    i {
      color: #ddd;
      font-size: 18px;
      transition-delay: 0.4s;
    }

    &:hover {
      transform: translateY(-5px);
      background-color: #2e2e2e;
      color: dodgerblue;
      border: 1px solid dodgerblue;

      i {
        color: dodgerblue;
      }
    }
  }
`;

const Form = styled.form`
  .inputGroup {
    margin: 18px 0;
    position: relative;

    input, textarea {
      width: 100%;
      font-size: 18px;
      padding: 2px 0;
      background-color: #2e2e2e;
      color: #ddd;
      border: none;
      border-bottom: 2px solid #666;
      outline: none;

      &:focus ~ label,
      &:not(:placeholder-shown) ~ label {
        transform: translateY(-30px);
        font-size: 16px;
      }
    }

    textarea {
      resize: none;
      height: 220px;
      display: block;

      &::-webkit-scrollbar {
        width: 5px;
      }

      &::-webkit-scrollbar-track {
        background-color: #1e1e1e;
        border-radius: 15px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: dodgerblue;
        border-radius: 15px;
      }
    }

    label {
      position: absolute;
      left: 0;
      bottom: 4px;
      color: #888;
      font-size: 18px;
      transition: 0.4s;
      pointer-events: none;
    }

    &:nth-child(4) label {
      top: 2px;
    }
  }

  .halfWidth {
    flex-basis: 48%;
  }

  .fullWidth {
    flex-basis: 100%;
  }

  button {
    padding: 8px 16px;
    font-size: 18px;
    background-color: dodgerblue;
    color: #ddd;
    border: 1px solid transparent;
    border-radius: 25px;
    outline: none;
    cursor: pointer;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
    transition: 0.4s;

    &:hover {
      background-color: #2e2e2e;
      color: dodgerblue;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
      border: 1px solid dodgerblue;
    }
  }
`;

const ContactUs = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Row>
          <Section className="left">
            <ContactTitle>
              <h2>Get In Touch</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
            </ContactTitle>
            <ContactInfo>
              <IconGroup>
                <div className="icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="details">
                  <span>Phone</span>
                  <span>+355 XX XX XX XXX</span>
                </div>
              </IconGroup>
              <IconGroup>
                <div className="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="details">
                  <span>Email</span>
                  <span>name@email.com</span>
                </div>
              </IconGroup>
              <IconGroup>
                <div className="icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className="details">
                  <span>Location</span>
                  <span>X Street, Y Road, Tirane</span>
                </div>
              </IconGroup>
            </ContactInfo>
            <SocialMedia>
              <a href="#facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#facebook.com"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#linkedin.com"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </SocialMedia>
          </Section>
          <Section className="right">
            <Form className="messageForm">
              <div className="inputGroup halfWidth">
                <input type="text" name="name" required placeholder=" " />
                <label>Your Name</label>
              </div>
              <div className="inputGroup halfWidth">
                <input type="email" name="email" required placeholder=" " />
                <label>Email</label>
              </div>
              <div className="inputGroup fullWidth">
                <input type="text" name="subject" required placeholder=" " />
                <label>Subject</label>
              </div>
              <div className="inputGroup fullWidth">
                <textarea name="message" required placeholder=" "></textarea>
                <label>Say Something</label>
              </div>
              <div className="inputGroup fullWidth">
                <button type="submit">Send Message</button>
              </div>
            </Form>
          </Section>
        </Row>
      </Container>
    </>
  );
};

export default ContactUs;

