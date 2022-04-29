import React, { Component } from 'react';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

export class ProductAdd extends Component {

    constructor() {
        super();

        this.state = {
            name: '',
            companyName: '',
            price: '',
            Quantity: '',
            ImageUrl: '',
            Uses: '',
            ExpireDate: '',

        }


        this.name = this.name.bind(this);
        this.companyName = this.companyName.bind(this);
        this.price = this.price.bind(this);
        this.Quantity = this.Quantity.bind(this);
        this.ImageUrl = this.ImageUrl.bind(this);
        this.Uses = this.Uses.bind(this);
        this.ExpireDate = this.ExpireDate.bind(this);
        this.Submit = this.Submit.bind(this);
    }



    name(event) {
        this.setState({ name: event.target.value })
    }

    companyName(event) {
        this.setState({ companyName: event.target.value })
    }

    price(event) {
        this.setState({ price: event.target.value })
    }

    Quantity(event) {
        this.setState({ Quantity: event.target.value })
    }
    ImageUrl(event) {
        this.setState({ ImageUrl: event.target.value })
    }
    Uses(event) {
        this.setState({ Uses: event.target.value })
    }
    ExpireDate(event) {
        this.setState({ ExpireDate: event.target.value })
    }



    Submit(event) {
        // debugger;

        fetch('http://localhost:11366/api/Products', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                productId: 0,
                name: this.state.name,
                companyName: this.state.companyName,
                price: this.state.price,
                Quantity: this.state.Quantity,
                ImageUrl: this.state.ImageUrl,
                Uses: this.state.Uses,
                ExpireDate: this.state.ExpireDate



            })
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                if (result == 'Success')
                    this.props.history.push("/Apps");
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
                                            <Input type="text" onChange={this.name} placeholder="Enter Product Name" />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <Input type="text" onChange={this.companyName} placeholder="Enter Last Name" />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <Input type="text" onChange={this.price} placeholder="Enter Price" />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <Input type="Quantity" onChange={this.Quantity} placeholder="Enter Quantity" />
                                        </InputGroup>

                                        <InputGroup className="mb-4">
                                            <Input type="date" onChange={this.ImageUrl} placeholder="Enter ImageUrl" />
                                        </InputGroup>
                                        <InputGroup className="mb-4">
                                            <Input type="tel" onChange={this.Uses} placeholder="Enter Uses" />
                                        </InputGroup>
                                        <InputGroup className="mb-4">
                                            <Input type="date" onChange={this.ExpireDate} placeholder="Enter Expire Date" />
                                        </InputGroup>

                                        <Button onClick={this.Submit} color="success" block>Create Product</Button>
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

export default ProductAdd;
