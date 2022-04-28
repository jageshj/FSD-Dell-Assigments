import React from 'react'

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
        })
            .then(resp => resp.json())
            .then(updatedProduct => {
                handleProductUpdate(updatedProduct)
            })
    }

    return (
        <div>
            <h4>Edit Product</h4>
            <form onSubmit={handleEditForm}>
                <input type="text" name="ProductId" value={productId} onChange={handleChange} />
                <input type="text" name="name" value={name} onChange={handleChange} />
                <input type="text" name="CompanyName" value={companyName} onChange={handleChange} />
                <input type="number" name="Price" value={price} onChange={handleChange} />
                <input type="number" name="Quantity" value={quantity} onChange={handleChange} />
                <input type="text" name="ImageUrl" value={imageUrl} onChange={handleChange} />
                <input type="text" name="Uses" value={uses} onChange={handleChange} />
                <input type="date" name="ExpireDate" value={expireDate} onChange={handleChange} />
                <button type="submit">Submit Changes</button>
            </form>
        </div>
    )
}
export default EditProduct

