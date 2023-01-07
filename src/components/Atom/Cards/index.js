import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
import { Col, Row, Container, Card, Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap'
import sam from "../../../assets/image/background/sam.jpg"
import Logo from '../Logo'
import Tilt from 'react-vanilla-tilt'

import "./style.scss"
import { useSelector } from 'react-redux';
const Cardss = () => {
    const { mode } = useSelector(state => state.global)
    const [background, setBgc] = useState("white")
    const mouseEnter = (a) => {
        setBgc(a)
    }
    const setIsHovered = (a) => {
        setBgc("white")
    }
    useEffect(() => {
        AOS.init({
            easing: 'ease-in-out',
        });
    }, []);
    return (
        <Container className={`project_card_${mode}`}  >
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>

                <Col sm={4} >
                    <Tilt options={{ scale: 2, max: 50, glare: true, reverse: false, speed: 200 }}

                        className='global' data-tilt style={{ backgroundColor: "none", width: "max-content" }} >
                        <Card style={{ width: '18rem', margin: "10px 0px" }} data-aos="fade-up-right" data-aos-offset="100" className='card_3d' >
                            <Card.Img variant="top" src={sam} style={{ padding: "10px" }} className="image_card" />
                            <Card.Body>
                                <Card.Title className="title_card" >Card Title</Card.Title>
                                <Card.Text className="text-card">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary" className="button_card" >Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Tilt>
                </Col>

                <Col sm={4} >
                    <Tilt options={{ scale: 2, max: 50, glare: true, reverse: false, speed: 200 }}

                        className='global' data-tilt style={{ backgroundColor: "none", width: "max-content" }} >
                        <Card style={{ width: '18rem', margin: "10px 0px" }} data-aos="fade-up" data-aos-offset="100" className='card_3d' >
                            <Card.Img variant="top" src={sam} style={{ padding: "10px" }} className="image_card" />
                            <Card.Body>
                                <Card.Title className="title_card" >Card Title</Card.Title>
                                <Card.Text className="text-card">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary" className="button_card" >Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Tilt>
                </Col>
                <Col sm={4} >
                    <Tilt options={{ scale: 2, max: 50, glare: true, reverse: false, speed: 200 }}

                        className='global' data-tilt style={{ backgroundColor: "none", width: "max-content" }} >
                        <Card style={{ width: '18rem', margin: "10px 0px" }} data-aos="fade-up-left" data-aos-offset="100" className='card_3d' >
                            <Card.Img variant="top" src={sam} style={{ padding: "10px" }} className="image_card" />
                            <Card.Body>
                                <Card.Title className="title_card" >Card Title</Card.Title>
                                <Card.Text className="text-card">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary" className="button_card" >Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Tilt>
                </Col>
                <Col sm={12} >
                    <ButtonToolbar aria-label="Toolbar with button groups" className='project_button' data-aos="flip-up" data-aos-offset="0" >
                        <ButtonGroup className="me-2 project_button_grup" aria-label="First group">
                            <Button>1</Button> <Button>2</Button> <Button>3</Button>{' '}
                            <Button>4</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </Col>
            </Row>
            <Row className='mt-5' >
                <Col sm={12}>
                    <div className='Header_techonology' >
                        <h3>Techonology</h3>
                        <hr></hr>
                        <div className='Container_Logo'>


                            <Logo id="orange" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbyYTkBZjgfQaQV1HGDNp4D-JTX5vikGk5Ig&usqp=CAU"} title={"javascript"} bgcc={background === "orange" ? background : "white"} border={"1px solid orange"} onMouseEnter={(a) => mouseEnter(a.target.id)} onMouseLeave={(a) => setIsHovered(a.target.id)} data-aos="flip-left" data-aos-offset="0" />
                            <Logo id="red" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLZuid5ugLcKzdRsX6FbE7M__ocSOTVGyPQ&usqp=CAU"} title={"HTML"} bgcc={background === "red" ? background : "white"} border={"1px solid red"} onMouseEnter={(a) => mouseEnter(a.target.id)} onMouseLeave={(a) => setIsHovered(a.target.id)} data-aos="flip-left" data-aos-offset="0" />
                            <Logo id="red" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLZuid5ugLcKzdRsX6FbE7M__ocSOTVGyPQ&usqp=CAU"} title={"HTML"} bgcc={background === "red" ? background : "white"} border={"1px solid red"} onMouseEnter={(a) => mouseEnter(a.target.id)} onMouseLeave={(a) => setIsHovered(a.target.id)} data-aos="flip-left" data-aos-offset="0" />
                            <Logo id="red" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLZuid5ugLcKzdRsX6FbE7M__ocSOTVGyPQ&usqp=CAU"} title={"HTML"} bgcc={background === "red" ? background : "white"} border={"1px solid red"} onMouseEnter={(a) => mouseEnter(a.target.id)} onMouseLeave={(a) => setIsHovered(a.target.id)} data-aos="flip-left" data-aos-offset="0" />
                            <Logo id="red" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLZuid5ugLcKzdRsX6FbE7M__ocSOTVGyPQ&usqp=CAU"} title={"HTML"} bgcc={background === "red" ? background : "white"} border={"1px solid red"} onMouseEnter={(a) => mouseEnter(a.target.id)} onMouseLeave={(a) => setIsHovered(a.target.id)} data-aos="flip-left" data-aos-offset="0" />
                            <Logo id="red" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLZuid5ugLcKzdRsX6FbE7M__ocSOTVGyPQ&usqp=CAU"} title={"HTML"} bgcc={background === "red" ? background : "white"} border={"1px solid red"} onMouseEnter={(a) => mouseEnter(a.target.id)} onMouseLeave={(a) => setIsHovered(a.target.id)} data-aos="flip-left" data-aos-offset="0" />
                            <Logo id="red" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLZuid5ugLcKzdRsX6FbE7M__ocSOTVGyPQ&usqp=CAU"} title={"HTML"} bgcc={background === "red" ? background : "white"} border={"1px solid red"} onMouseEnter={(a) => mouseEnter(a.target.id)} onMouseLeave={(a) => setIsHovered(a.target.id)} data-aos="flip-left" data-aos-offset="0" />
                            <Logo id="red" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLZuid5ugLcKzdRsX6FbE7M__ocSOTVGyPQ&usqp=CAU"} title={"HTML"} bgcc={background === "red" ? background : "white"} border={"1px solid red"} onMouseEnter={(a) => mouseEnter(a.target.id)} onMouseLeave={(a) => setIsHovered(a.target.id)} data-aos="flip-left" data-aos-offset="0" />

                            <Logo id="red" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLZuid5ugLcKzdRsX6FbE7M__ocSOTVGyPQ&usqp=CAU"} title={"HTML"} bgcc={background === "red" ? background : "white"} border={"1px solid red"} onMouseEnter={(a) => mouseEnter(a.target.id)} onMouseLeave={(a) => setIsHovered(a.target.id)} data-aos="flip-left" data-aos-offset="0" />
                            <Logo id="red" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLZuid5ugLcKzdRsX6FbE7M__ocSOTVGyPQ&usqp=CAU"} title={"HTML"} bgcc={background === "red" ? background : "white"} border={"1px solid red"} onMouseEnter={(a) => mouseEnter(a.target.id)} onMouseLeave={(a) => setIsHovered(a.target.id)} data-aos="flip-left" data-aos-offset="0" />
                            <Logo id="red" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLZuid5ugLcKzdRsX6FbE7M__ocSOTVGyPQ&usqp=CAU"} title={"HTML"} bgcc={background === "red" ? background : "white"} border={"1px solid red"} onMouseEnter={(a) => mouseEnter(a.target.id)} onMouseLeave={(a) => setIsHovered(a.target.id)} data-aos="flip-left" data-aos-offset="0" />
                            <Logo id="red" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLZuid5ugLcKzdRsX6FbE7M__ocSOTVGyPQ&usqp=CAU"} title={"HTML"} bgcc={background === "red" ? background : "white"} border={"1px solid red"} onMouseEnter={(a) => mouseEnter(a.target.id)} onMouseLeave={(a) => setIsHovered(a.target.id)} data-aos="flip-left" data-aos-offset="0" />
                            <Logo id="red" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLZuid5ugLcKzdRsX6FbE7M__ocSOTVGyPQ&usqp=CAU"} title={"HTML"} bgcc={background === "red" ? background : "white"} border={"1px solid red"} onMouseEnter={(a) => mouseEnter(a.target.id)} onMouseLeave={(a) => setIsHovered(a.target.id)} data-aos="flip-left" data-aos-offset="0" />
                        </div>
                    </div>
                </Col>


            </Row>
        </Container>
    )
}

export default Cardss
