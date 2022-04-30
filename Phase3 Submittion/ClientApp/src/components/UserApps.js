import React, { useState } from 'react'
import EditUser from './EditUser'
import User from './User'
import Users from './Users'

function UserApps({ editForm, handleUserUpdate, handleChange }) {
    let { userId, firstName, lastName, email, isAdmin, dateOfBirth, phone, address } = editForm



    // PATCH request; calls handleUserUpdate to push changes to the page
    function handleEditForm(e) {
        e.preventDefault();
        fetch(`http://localhost:11366/api/Users/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editForm),
        }).then((Response) => Response.json())
            .then((result) => {
                //     console.log(result);
                if (result > 0)
                    this.props.history.pushState("/Dashboard");

                else
                    alert('Sorrrrrry !!!! Un-authenticated User !!!!!')
            })
    }



 



    return (
        <div>
            <h4>Edit User</h4>
            <form onSubmit={handleEditForm}>
                <input type="text" name="userId" value={userId} onChange={handleChange} />
                <input type="text" name="firstName" value={firstName} onChange={handleChange} />
                <input type="text" name="lastName" value={lastName} onChange={handleChange} />
                <input type="email" name="email" value={email} onChange={handleChange} />
                <input type="checkbox" name="isAdmin" value={isAdmin} onChange={handleChange} />
                <input type="date" name="dateOfBirth" value={dateOfBirth} onChange={handleChange} />
                <input type="text" name="phone" value={phone} onChange={handleChange} />
                <input type="text" name="address" value={address} onChange={handleChange} />
                <button type="submit">Submit Changes</button>
            </form>
        </div>
    )
}
export default UserApps

