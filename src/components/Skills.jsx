import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../skills.css'

const Skills = () => {
  return (
    <div className='skill-section' style={{ color: '#000', padding: '2rem', minHeight: '100vh', marginTop: '2rem' }}>
      <div id='skills'>
        <Container fluid>
          <Row className='justify-content-center'>
            <Col xs={12} className='text-center mb-4'>
              <p className='intro-text'>Explore My</p>
              <h5 className='text-center mb-4 intro-heading'>Skills</h5>
            </Col>
          </Row>
          <Row className='align-items-center my-4'>
            <Col lg={6} md={6}>
              <div className='dfWTkB'>
                <h4>Software Developer</h4>
                <p className='descriptions'>I have always liked writing clean and maintainable code.</p>
                <p className='descriptions'>I like to code in Java, JavaScript, Node.js, C, MySQL, Python.</p>
                <h5>Tools</h5>
                <ul>
                  <li>Vs Code</li>
                  <li>IntelliJ IDEA</li>
                  <li>Eclipse</li>
                  <li>Google Colab</li>
                </ul>
              </div>
            </Col>
            <Col lg={6} md={6} className='mt-4 mt-md-0'> {/* Added mt-4 for mobile spacing */}
              <div className='dfWTkB'>
                <h4>Front-end Developer</h4>
                <p className='descriptions'>I enjoy creating visually appealing transitions and effects on the frontend and bringing new concepts to life.</p>
                <h5>Skills</h5>
                <p className='descriptions'>HTML, CSS, JavaScript, Bootstrap, React.js, Redux, Firebase, Git.</p>
                <h5>Tools</h5>
                <ul>
                  <li>Vs Code</li>
                  <li>GitHub</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Skills;
