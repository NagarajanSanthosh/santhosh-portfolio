import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import phishingImage from '../image/phishing.jpeg';
import todoImage from '../image/todo.png';

const Projects = () => {
    const openProject1 = () => {
        window.open('https://github.com/NagarajanSanthosh/URL-based-phishing.git', '_blank');
    };

    const openProject2 = () => {
        window.open('https://github.com/NagarajanSanthosh/todo-react.git', '_blank');
    };

    return (
        <div id='project' style={{ paddingTop: '20px' }}>
            <Container>
                <Row className='justify-content-center'>
                    <Col xs={12} className='text-center mb-4'>
                        <p className='intro-text'>My Recent</p>
                        <h5 className='text-center mb-4 intro-heading'>Project</h5>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col lg={6} md={12} className="mb-4 d-flex justify-content-center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={phishingImage} alt="phishing-image" style={{ maxHeight: '200px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title>URL Based Phishing Detection</Card.Title>
                                <Button variant="dark" onClick={openProject1}>GitHub</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6} className="mb-4 d-flex justify-content-center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={todoImage} alt="todo-image" style={{ maxHeight: '200px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title>Todo List</Card.Title>
                                <Button variant="dark" onClick={openProject2}>GitHub</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Projects;
