import React, { useState } from 'react'

import Apps from './Apps'

function EditProduct({ editForm, handleProductUpdate, handleChange }) {
    let { productId, name, companyName, price, quantity, imageUrl, uses, expireDate } = editForm



    // PATCH request; calls handleProductUpdate to push changes to the page
    function handleEditForm(e) {
        e.preventDefault();
        fetch(`http://localhost:11366/api/Products/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editForm),
        }).then((Response) => Response.json())
            .then((result) => {
           //     console.log(result);
                if (result > 0)
                   this.props.history.pushState("/Stage");
                    
                else
                    alert('Sorrrrrry !!!! Un-authenticated User !!!!!')
            })
    }







    return (
        <div>
            <h4>Edit Product</h4>
            <form onSubmit={handleEditForm}>
                <input type="text" name="productId" value={productId} onChange={handleChange} />
                <input type="text" name="name" value={name} onChange={handleChange} />
                <input type="text" name="companyName" value={companyName} onChange={handleChange} />
                <input type="number" name="price" value={price} onChange={handleChange} />
                <input type="number" name="quantity" value={quantity} onChange={handleChange} />
                <input type="text" name="imageUrl" value={imageUrl} onChange={handleChange} />
                <input type="text" name="uses" value={uses} onChange={handleChange} />
                <input type="date" name="expireDate" value={expireDate} onChange={handleChange} />
                <button type="submit">Submit Changes</button>
            </form>
        </div>
    )
}
export default EditProduct

