import React, { useState } from 'react'
import Product from './Product'
import EditProduct from './EditProduct'

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
                        <th>Modify Product</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => <Product
                        key={product.productId}
                        product={product}
                        captureEdit={captureEdit}
                        changeEditState={changeEditState}
                    />)}
                </tbody>
            </table>
        </div>
    )
}

export default Products