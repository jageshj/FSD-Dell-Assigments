import React, { useState } from 'react'

// deconstructed props
function Product({ product, product: { productId, name, companyName, price, quantity, imageUrl, uses, expireDate }, captureEdit, changeEditState }) {


    return (
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
    )
}
export default Product

