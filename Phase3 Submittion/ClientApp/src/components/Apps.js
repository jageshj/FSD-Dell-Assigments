import React, { Component, useState, useEffect } from 'react';
import Products from "./Products";
import Product from "./Product";

import '../custom.css'

export function Apps() {
    // set state

    const [products, setProducts] = useState([]);

    // first data grab
    useEffect(() => {
        fetch("http://localhost:11366/api/Products")
            .then((resp) => resp.json())
            .then((data) => {
                setProducts(data)
            });
    }, []);

    function onUpdateProduct(updatedProduct) {
        const updatedProducts = products.map(
            product => {
                if (product.Productid === updatedProduct.Productid) {
                    return updatedProduct
                } else { return Product }
            }
        )
        setProducts(updatedProducts)
    }

    // update customers on page after edit


    return (
        <div>
            <Products
                products={products}
                onUpdateProduct={onUpdateProduct}
            />
        </div>
    );
}
export default Apps;