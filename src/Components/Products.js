import React, { Component } from 'react';
import Toolbar from './Toolbar/Toolbar';
import "./Products.css";
import { Container, Row, Col, Carousel } from 'react-bootstrap';

import SpaceIgloo3d from '../Assets/Products/3d space igloo.svg';
import illust1 from '../Assets/Products/illust1.svg';
import illust2 from '../Assets/Products/illust2.svg';
import illust3 from '../Assets/Products/illust3.svg';
import illust4 from '../Assets/Products/illust4.svg';
import BookIllust from '../Assets/Products/book.svg';
import Blue from '../Assets/Products/green.svg';
import Green from '../Assets/Products/blue.svg';
import Orange from '../Assets/Products/orange.svg';
import Card from '../Assets/Products/card.svg';
import Top from '../Assets/Products/top.svg';
import Bottom from '../Assets/Products/bottom.svg';


class CarouSel extends Component {
    render() {
        return (
            <div>
                <Carousel style={{border:"3px solid"}}>
                    <Carousel.Item>
                        <img
                            className="d-block b-100"
                            src={Bottom}
                            alt="First slide" s
                        />
                        <Carousel.Caption>
                            <h3 id="label">Bottom Level</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block b-100"
                            src={Top}
                        />

                        <Carousel.Caption>
                            <h3 id="label">Top Level</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}


class Products extends Component {
    render() {
        return (
            <div className="Products">
                <h2 id="spaceIglooTitle">SPACE IGLOOS</h2>
                <Toolbar fade={false} />
                <Container id="igloo3d">
                    <img src={SpaceIgloo3d}  />
                </Container>
                <img src={illust1} id="illust1" />
                <img src={illust2} id="illust2" />
                <img src={illust3} id="illust3" />
                <img src={illust4} id="illust4" />
                

                <Container id="cardsContainer">
                    <Row>
                        <Col>
                            <div className="card" id="gradient">
                                <h3>OBJECTIVES</h3>
                                <p>Our objective when creating the Space Igloo was to provide astronauts with a safe and comfortable space to retreat to after a long day. Our range of Space Igloos are built to withstand many extreme climates. Not only is it practical, it’s interior also creates a pleasant atmosphere.</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="card" id="gradient">
                                <h3>TECHNOLOGY</h3>
                                <p>Our leading team of engineers have pioneered many new techniques that have transformed the space colonization industry. The manipulation of durable materials with these techniques have allowed for us to create Space Igloos that are lightweight and compact, as well as impregnable.</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="card" id="gradient">
                                <h3>DESIGN</h3>
                                <p>When creating the Space Igloo, our design team set out to create an experience. From the moment you set foot in the space, you felt as if you were at home. This experience is essential for astronauts on missions far away from home. </p>
                            </div>
                        </Col>
                    </Row>

                </Container>
                <Container id="interiorGraphic">
                    <Row>
                        <Col sm={6}>
                            <h2 style={{paddingBottom:"10px", paddingTop:"50px"}}>
                                {"IT'S WHAT'S ON THE INSIDE THAT COUNTS."}
                            </h2>
                            <p>Live in comfort with our Space Igloos.</p>
                        </Col>
                        <Col sm={6}>
                            <img src={BookIllust} id="bookIllust" />
                        </Col>
                    </Row>
                </Container>

                <h1 id="layoutTitle">LAYOUT</h1>
                <Container>
                    <CarouSel />
                </Container>

                <Container style={{marginTop:"150px"}}>
                    <Row>
                        <Col>
                        <h3 style={{textAlign:"center", paddingBottom:"50px"}}>SPACE IGLOO VARIATIONS</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src={Blue} />
                            <p>The Blue Igloo is made for extreme cold environments. It is covered by a thick layer of insulation to protect colonizers from the freezing temperatures.</p>
                        </Col>
                        <Col>
                            <img src={Green} />
                            <p>The Green Igloo is made for Earth-like climates. It can regulate pressure and temperature within a certain range.</p>
                        </Col>
                        <Col>
                            <img src={Orange} />
                            <p>The Orange Igloo is made for scorching hot climates. It is made from materials with very high melting points. It also has a sophisticated cooling system, regulating the temperature inside the igloo.</p>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}
export default Products;