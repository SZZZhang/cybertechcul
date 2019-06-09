import React, {Component} from 'react';
import Toolbar from './Toolbar/Toolbar';
import {Container, Form, Button} from 'react-bootstrap';


class FormComponent extends Component{
    render(){
        return(
            <div>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="First name Last name"/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
            
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your message</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
            </Form>
            <Button style={{backgroundColor:"Orange"}}>Send Message</Button>
            </div>
        );
    }
}
class Contact extends Component{
    render(){
        return(
            <div className="Home">
                <Toolbar fade={false} />
                
                <Container style={{marginTop:"150px"}}>
                    <h3 >Ask us a question or send us a message! </h3>
                    <FormComponent/>
                </Container>
            </div>
        );
    }
}
export default Contact;