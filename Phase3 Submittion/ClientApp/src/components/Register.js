import React, { Component } from 'react';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

export class Register extends Component {

    constructor() {
        super();

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            isAdmin: 'false',
            password: '',
            dateOfBirth: '',
            phone: '',

        }


        this.firstName = this.firstName.bind(this);
        this.lastName = this.lastName.bind(this);
        this.email = this.email.bind(this);
        this.password = this.password.bind(this);
        this.dateOfBirth = this.dateOfBirth.bind(this);
        this.phone = this.phone.bind(this);
        this.address = this.address.bind(this);
        this.isAdmin = this.isAdmin.bind(this);
        this.register = this.register.bind(this);
    }



    firstName(event) {
        this.setState({ firstName: event.target.value })
    }

    lastName(event) {
        this.setState({ lastName: event.target.value })
    }

    email(event) {
        this.setState({ email: event.target.value })
    }

    password(event) {
        this.setState({ password: event.target.value })
    }
    dateOfBirth(event) {
        this.setState({ dateOfBirth: event.target.value })
    }
    phone(event) {
        this.setState({ phone: event.target.value })
    }
    address(event) {
        this.setState({ address: event.target.value })
    }

    isAdmin(event) {
        this.setState({ isAdmin: event.target.value })
    }

    register(event) {
        //debugger;

        fetch('http://localhost:11366/api/Users', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                userId: 0,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                isAdmin: false,
                dateOfBirth: this.state.dateOfBirth,
                phone: this.state.phone,
                address: this.state.address




            })
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                if (result == 'Success')
                    this.props.history.push("/Login");
                else
                    alert('Sorrrrrry !!!! Un-authenticated User !!!!!')
            })
    }

    render() {

        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="9" lg="7" xl="6">
                            <Card className="mx-4">
                                <CardBody className="p-4">
                                    <Form>
                                        <div class="row" className="mb-2 pageheading">
                                            <div class="col-sm-12 btn btn-primary">
                                                Sign Up
                                            </div>
                                        </div>
                                        <InputGroup className="mb-3">
                                            <Input type="text" onChange={this.firstName} placeholder="Enter First Name" />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <Input type="text" onChange={this.lastName} placeholder="Enter Last Name" />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <Input type="text" onChange={this.email} placeholder="Enter email" />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <Input type="password" onChange={this.password} placeholder="Enter password" />
                                        </InputGroup>

                                        <InputGroup className="mb-4">
                                            <Input type="date" onChange={this.dateOfBirth} placeholder="Enter dateOfBirth" />
                                        </InputGroup>
                                        <InputGroup className="mb-4">
                                            <Input type="tel" onChange={this.phone} placeholder="Enter phone" />
                                        </InputGroup>
                                        <InputGroup className="mb-4">
                                            <Input type="text" onChange={this.address} placeholder="Enter address" />
                                        </InputGroup>


                                        <Button onClick={this.register} color="success" block>Create Account</Button>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Register;
