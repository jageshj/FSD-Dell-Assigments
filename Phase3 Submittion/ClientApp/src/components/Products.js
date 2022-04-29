import React, { useState } from 'react'
import Apps from './Apps'
import Product from './Product'
import EditProduct from './EditProduct'
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

function Products({ products, onUpdateProduct }) {

    const [isEditing, setIsEditing] = useState(false);



    const [editForm, setEditForm] = useState({
        productId: "",
        name: "",
        companyName: "",
        price: 0,
        quantity: 0,
        imageUrl: "",
        uses: "",
        expireDate: "",
    })


    function handleProductUpdate(updatedProduct) {
        setIsEditing(false);
        onUpdateProduct(updatedProduct);
    }


    // capture user input in edit form inputs
    function handleChange(e) {
        setEditForm({
            ...editForm,
            [e.target.name]: e.target.value
        })
    }

    // needed logic for conditional rendering of the form - shows the Product you want when you want them, and hides it when you don't
    function changeEditState(product) {
        if (product.productId === editForm.productId) {
            setIsEditing(isEditing => !isEditing) // hides the form
        } else if (isEditing === false) {
            setIsEditing(isEditing => !isEditing) // shows the form
        }
    }

    // capture the Product you wish to edit, set to state
    function captureEdit(clickedProduct) {
        let filtered = products.filter(product => product.productId === clickedProduct.productId)
        setEditForm(filtered[0])
    }



    return (
        <div>
            {isEditing ?
                (<EditProduct
                    editForm={editForm}
                    handleChange={handleChange}
                    handleProductUpdate={handleProductUpdate}
                />) : null}

            <table>
                <tbody>
                    {products.map(products => <Product
                        key={products.productId}
                        product={products}
                        captureEdit={captureEdit}
                        changeEditState={changeEditState}
                    />
                    )}
                </tbody>

                <NavLink tag={Link} className="text-dark" to="/ProductAdd">Create New Product</NavLink>
            </table>
        </div>
    )
}

export default Products