import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../index.css';

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
          <footer className="bg-dark text-white p-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <p>Email: <a href='mailto:santhoshn2982@gmail.com'>santhoshn2982@gmail.com</a></p>
                  <p>LinkedIn: <a href="https://www.linkedin.com/in/santhosh-nagarajan-98686923b/">LinkedIn/Santhosh</a></p>
                </div>
              </div>
              <div className='row'>
                <div className="col-lg-12 text-center">
                  <p>Copyrights © reserved 2024</p>
                </div>

              </div>
            </div>
          </footer>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
