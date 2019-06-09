import React, {Component} from 'react';
import "./Home.css";
import {Container, Row, Col} from "react-bootstrap";
import Toolbar from './Toolbar/Toolbar';

import {ReactComponent as MainIllustration} from "../Assets/Homepage/HomepageMain.svg";
import MainSpaceIgloo from "../Assets/Homepage/OurSpaceIgloos.svg"; 
import ComfortableIllust from "../Assets/Homepage/comfortable.svg";
import SafeIllust from "../Assets/Homepage/safe.svg";
import CompactIllust from"../Assets/Homepage/compact.svg";

class Home extends Component{
    render(){
        return(
            <div className="HomeClass">
                <Toolbar fade={true}/>
                <Container>
                    <MainIllustration id="mainIllust" viewBox={"0 125 739 560"}/>
                    <h1 style={{paddingTop:"400px", fontFamily:"Arial Rounded MT BOLD", fontSize:"40pt", color:"#4a396e"}}>Explore the universe.</h1>
               </Container>
    
                <Container id="iglooAttributes">
                    <Row>
                        <Col>
                            <img src={MainSpaceIgloo} id="spaceIgloo"/>
                         </Col>
                    </Row>
                    <Row id="attributeIllustrations">
                        <Col><img src={SafeIllust}/></Col>
                        <Col><img style={{marginTop:"20px"}} src={ComfortableIllust}/></Col> 
                        <Col><img style={{marginTop:"40px"}} src={CompactIllust}/></Col>
                    </Row>

                    <Row>
                        <Col><h4>SAFE</h4></Col>
                        <Col><h4>COMFORTABLE</h4></Col>
                        <Col><h4>COMPACT</h4></Col>
                    </Row>
                    <Row>
                        <Col>
                        <p>Space Igloos are made using durable materials to protect the shelter from all kinds of extreme climates.</p>
                        </Col>
                        <Col>
                        <p>Colonization is hard work. Which is why we created a space that astronauts could retreat to after a long day.</p>
                        </Col>
                        <Col>
                        <p>The compact nature of the space igloos allows them to easily transported in space crafts.</p>
                        </Col> 
                    </Row>
                </Container>
            </div>
        );
    }
}


export default Home;