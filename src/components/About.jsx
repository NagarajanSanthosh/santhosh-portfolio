import React from 'react';
import aboutImage from '../image/web-fotor.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import '../about.css';

const About = () => {
  return (
    <div id='about-section' className='fade-in bg-dark' style={{ color: '#000', padding: '2rem', minHeight: '100vh', marginTop: '2rem' }}>
      <div id="about">
        <Container fluid>
          <Row className='justify-content-center'>
            <Col xs={12} className='text-center mb-4'>
              <p className='intro-text'>Get to Know More</p>
              <h5 className='intro-heading mb-4'>About</h5>
            </Col>
          </Row>
          <Row className='align-items-center my-4'>
            <Col lg={6} xs={12} className='d-flex justify-content-center mb-4 mb-lg-0'>
              <img src={aboutImage} alt='about-image' className='rounded img-fluid' style={{maxWidth: '70%'}} />
            </Col>
            <Col lg={6} xs={12} className='mt-5 mt-lg-0'>
              <div className="about-content">
                <h5 className="section-title">Education</h5>
                <div className="education-content">
                  <p><strong>B.Tech. Bachelor's Degree - Information Technology</strong></p>
                  <p><strong>H.S.C. Higher Secondary - Computer Science</strong></p>
                </div>
                <div>
                  <p className="description">As a dedicated graduate with a Bachelor's degree in Information Technology, I am eager to apply my robust skill set to make meaningful contributions within a dynamic industry. My self-motivation and academic background have equipped me with a solid foundation to add value and drive innovation professionally.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default About;
