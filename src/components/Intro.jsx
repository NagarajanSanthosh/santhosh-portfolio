import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import image from '../image/profile2.jpg'
import { Container, Row, Col } from 'react-bootstrap'
import '../index.css'

const Intro = () => {
    const openPDF = () => {
        window.open('https://drive.google.com/file/d/1WxZz1RwX_913dYT_Rjq85wxV4roYktmx/view?usp=drive_link', '_blank');
    }

    return (
        <div className='intro-section' style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
            <Container>
                <Row className='gx-4'>
                    <Col md={6}>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img className='image-style' src={image} alt='profile' />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='d-flex flex-column justify-content-center'>
                            <p>Hi, I'm</p>
                            <p className='fw-bold fs-3 name'>Santhosh</p>
                            <p>Frontend Developer</p>
                            <button className='btn btn-dark' onClick={openPDF}>Resume</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro
