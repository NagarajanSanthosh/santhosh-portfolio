import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../contact.css';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id='contact' className='bottom-style'>
      <Container>
        <Row className='justify-content-center'>
          <Col xs={12} className='text-center mb-4'>
            <p className='intro-text'>Get in Touch</p>
            <h5 className='text-center mb-4 intro-heading'>Contact</h5>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <footer className='footer-content'>
              <a className="contact-a" href='mailto:santhoshn2982@gmail.com'><MdEmail size={30} /></a>
              <a className="contact-a" href="https://www.linkedin.com/in/santhosh-nagarajan-98686923b/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
              <p>No copyright reserved. FEEL FREE TO COPY</p>
            </footer>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
