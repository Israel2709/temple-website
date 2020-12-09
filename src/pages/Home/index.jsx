import React, { useState } from 'react'
import {
    Container,
    Row,
    Col,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap'

import '../Home/style.css'
import logo from '../../assets/img/Logo.png';
import students from '../../assets/img/icon-students.png'
import teachers from '../../assets/img/icon-teachers.png';
import courses from '../../assets/img/icon-courses.png';
import graph from '../../assets/img/icon-graph.png';
import roundedCheck from '../../assets/img/icon-rounded-check.png';

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar dark expand="md" className="fixed-top container">
                <NavbarBrand href="/"><img src={logo} className="w-75" alt=""/></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/pages/temple">Temple</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/pages/courses">Cursos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/pages/teachers">Docentes</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/pages/login">Login</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <Container fluid>
                <Row className="heading">
                    <Col xs="12" className="d-flex align-items-stretch">
                        <Container>
                            <Row className="h-100">
                                <Col xs="12" className="d-flex justify-content-center align-items-end flex-column">
                                    <h1 class="w-50 text-white text-right">El secreto para salir adelante es simplemente empezar</h1>
                                    <Button outline color="primary" className="rounded-pill">Cursos</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row className="about">
                    <Col xs="12" className="d-flex align-items-stretch">
                        <Container>
                            <Row>
                                <Col xs="12" md="6" className="my-5 text-white border-right border-white pr-5">
                                    <h3>Conocimiento sin fronteras</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus ipsam suscipit porro quaerat voluptatem eos fugiat sed facere qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus ipsam suscipit porro quaerat voluptatem eos fugiat sed facere qui. <br/><br/> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus aliquid quo maiores possimus ratione aperiam minus natus expedita optio neque.</p>
                                    <div className="d-flex justify-content-between">
                                        <div className="statistic-item d-flex flex-column align-items-center">
                                            <span>540</span>
                                            <img src={students} alt="" className="my-3"/>
                                            <span>Alumnos</span>
                                        </div>
                                        <div className="statistic-item d-flex flex-column align-items-center">
                                            <span>540</span>
                                            <img src={teachers} alt="" className="my-3"/>
                                            <span>Docentes</span>
                                        </div>
                                        <div className="statistic-item d-flex flex-column align-items-center">
                                            <span>540</span>
                                            <img src={courses} alt="" className="my-3"/>
                                            <span>Cursos</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs="12" md="6" className="text-white my-5 d-flex flex-column justify-content-between pl-5">
                                    <div className="mt-4">
                                        <h3>
                                            <img src={roundedCheck} alt=""/> Misión   
                                        </h3>
                                        
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non eaque delectus recusandae reprehenderit iusto quam eius. Quae corporis ipsum in harum itaque? Sapiente consequatur laudantium eligendi laboriosam dolore dolorum quae voluptate rerum expedita modi! Aliquam?</p>
                                    </div>
                                    <div>
                                        <h3>
                                            <img src={graph} alt=""/> Visión   
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor debitis suscipit natus et exercitationem possimus consequatur a aperiam dolores consequuntur sed veniam quia, architecto qui corrupti molestias repudiandae sapiente, at delectus quaerat dolorem. Vel, recusandae!</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Container>
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-center my-5">¡Nuestros Cursos!</h3>
                        <div className="courses-wrapper d-flex">
                            <div className="course-item-angular"></div>
                            <div className="course-item-react"></div>
                            <div className="course-item-git"></div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Home