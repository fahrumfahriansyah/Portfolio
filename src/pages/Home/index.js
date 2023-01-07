import React from 'react'
import { useSelector } from 'react-redux'
import { NavbarHome } from '../../components/Molekul/index'
import { Col, Row, Container } from 'react-bootstrap'
// import { Parallax } from 'react-parallax';
import { Cardss } from '../../components';
import bunga from "../../assets/image/bunga.png"
import "./style.scss"
const Home = () => {
    const { mode } = useSelector(state => state.global)
    return (
        <div className={`home_${mode}`}>
            <NavbarHome />
            <Container>
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <Row>
                    <Col sm={8} >
                        <div className='Contain_home' >
                            <h1>Hiii</h1>
                            <h4>perkenalkan saya fahri will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable </h4>
                        </div>
                    </Col>
                    <Col sm={4} >
                        <div className='image_home'>
                            <img src={bunga} alt="bunga" height={100} style={{ marginTop: "100px", height: "400px" }} ></img>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='Contain_project' >

                <div className='project_header'>
                    <h1>Project</h1>
                </div>
                <Cardss />
            </div>
        </div >
    )
}

export default Home
