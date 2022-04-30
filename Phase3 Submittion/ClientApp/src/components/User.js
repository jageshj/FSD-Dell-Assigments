import React, { useState } from 'react'
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import EditUser from './EditUser';
import Users from './Users';
import UserApps from './UserApps'


// deconstructed props
function User({ user, user: { userId, firstName, lastName, email, isAdmin, dateOfBirth, phone, address }, captureEdit, changeEditState }) {


    return (
        <table className='table table-striped' aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>UserId</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>IsAdmin</th>
                    <th>DateOfBirth</th>
                    <th>Phone</th>
                    <th>Address</th>

                </tr>
            </thead>
            <tbody>
                <tr key={userId}>
                    <td>{userId}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{email}</td>
                    <td>{isAdmin}</td>
                    <td>{dateOfBirth}</td>
                    <td>{phone}</td>
                    <td>{address}</td>
                    <td>
                        <button
                            onClick={() => {
                                captureEdit(user);
                                changeEditState(user)
                            }}
                        >
                            Edit
                        </button>
                    </td>
                        <td>
                            <button>
                                Delete
                            </button>
                    </td>
                </tr>
                        

            </tbody>

        </table>

    );
}
export default User

