import React, { useState } from 'react'
import EditUser from './EditUser'
import User from './User'
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import UserApps from './UserApps'

function Users({ users, onUpdateUser }) {

    const [isEditing, setIsEditing] = useState(false);



    const [editForm, setEditForm] = useState({
        userId: "",
        firstName: "",
        lastName: "",
        email: "",
        isAdmin: false,
        dateOfBirth: "",
        phone: "",
        address: "",
    })


    


    function handleUserUpdate(updatedUser) {
        setIsEditing(false);
        onUpdateUser(updatedUser);
    }


    // capture user input in edit form inputs
    function handleChange(e) {
        setEditForm({
            ...editForm,
            [e.target.name]: e.target.value
        })
    }

    // needed logic for conditional rendering of the form - shows the User you want when you want them, and hides it when you don't
    function changeEditState(user) {
        if (user.userId === editForm.userId) {
            setIsEditing(isEditing => !isEditing) // hides the form
        } else if (isEditing === false) {
            setIsEditing(isEditing => !isEditing) // shows the form
        }
    }

    // capture the User you wish to edit, set to state
    function captureEdit(clickedUser) {
        let filtered = users.filter(user => user.userId === clickedUser.userId)
        setEditForm(filtered[0])
    }



    return (
        <div>
            {isEditing ?
                (<EditUser
                    editForm={editForm}
                    handleChange={handleChange}
                    handleUserUpdate={handleUserUpdate}
                />) : null}

            <table>
                <tbody>
                    {users.map(users => <User
                        key={users.userId}
                        user={users}
                        captureEdit={captureEdit}
                        changeEditState={changeEditState}
                    />
                    )}
                </tbody>

                <NavLink tag={Link} className="text-dark" to="/Register">Create New User</NavLink>
            </table>
        </div>
    )
}

export default Users