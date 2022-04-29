import React, { useState } from 'react'
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import Apps from './Apps'

// deconstructed props
function Product({ product, product: { productId, name, companyName, price, quantity, imageUrl, uses, expireDate }, captureEdit, changeEditState }) {


    return (
        <table className='table table-striped' aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>ProductId</th>
                    <th>name</th>
                    <th>CompanyName</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>ImageUrl</th>
                    <th>Uses</th>
                    <th>ExpireDate</th>


                </tr>
            </thead>
            <tbody>
                <tr key={productId}>
                    <td>{productId}</td>
                    <td>{name}</td>
                    <td>{companyName}</td>
                    <td>{price}</td>
                    <td>{quantity}</td>
                    <td>{imageUrl}</td>
                    <td>{uses}</td>
                    <td>{expireDate}</td>
                    <td>
                        <button
                            onClick={() => {
                                captureEdit(product);
                                changeEditState(product)
                            }}
                        >
                            Edit
                        </button>
                    </td>
                </tr>

              
            </tbody>

        </table>

    );
        }
export default Product

