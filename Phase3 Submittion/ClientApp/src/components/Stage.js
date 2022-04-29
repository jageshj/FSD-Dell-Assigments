import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
export class Stage extends Component {
    static displayName = Stage.name;

    render() {
        return (
            <div>
                <h1>Welcome to Mumbai Pharma</h1>
                <p>Administration:</p>
                <ul>
                    <NavLink tag={Link} className="text-dark" to="/FetchUser">User Administration</NavLink>
                    <NavLink tag={Link} className="text-dark" to="/Apps">Product Administration</NavLink>
                </ul>
                <p>Order Process</p>
                <ul>
                    <NavLink tag={Link} className="text-dark" to="/Order">Order Page</NavLink>
                </ul>
                <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
            </div>
        );
    }
}
