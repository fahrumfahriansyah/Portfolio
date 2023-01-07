import React from 'react'
import './style.scss'
import earth from "../../assets/image/earth1.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, } from 'react-bootstrap';
import Tilt from 'react-vanilla-tilt'
import { useNavigate } from 'react-router-dom';
const Open = () => {
    const history = useNavigate()
    return (
        <Container className='Open' >
            <Row>
                <Col sm={4}>
                    <Tilt options={{ scale: 2, max: 30, glare: true, reverse: false, speed: 200 }}

                        className='global' data-tilt style={{ backgroundColor: "none" }}>
                        <img src={earth} alt='earth' ></img>
                    </Tilt>
                </Col>
                <Col sm={8}>
                    <div className='container'>
                        <h1>Hello World</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <div className='button_home'>
                            {'>>>'} <Button variant="primary" onClick={() => history("/home")} >Letsgo</Button>
                        </div>
                    </div>
                </Col>

            </Row>
        </Container >

    )
}

export default Open
