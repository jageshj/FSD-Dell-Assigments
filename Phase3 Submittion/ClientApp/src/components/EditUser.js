import React, { Component, useState, useEffect } from 'react';
import Users from "./Users";
import User from "./User";

import '../custom.css'

export function EditUser() {
    // set state

    const [users, setUsers] = useState([]);

    // first data grab
    useEffect(() => {
        fetch("http://localhost:11366/api/Users")
            .then((resp) => resp.json())
            .then((data) => {
                setUsers(data)
            });
    }, []);

    function onUpdateUser(updatedUser) {
        const updatedUsers = users.map(
            user => {
                if (user.userId === updatedUser.userId) {
                    return updatedUser
                } else { return User }
            }
        )
        setUsers(updatedUsers)
    }

    // update customers on page after edit


    return (
        <div>
            <Users
                users={users}
                onUpdateUser={onUpdateUser}
            />
        </div>
    );
}
export default EditUser;