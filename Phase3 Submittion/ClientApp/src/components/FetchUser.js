import React, { Component } from 'react';

export class FetchUser extends Component {
    static displayName = FetchUser.name;

    constructor(props) {
        super(props);
        this.state = { User: [], loading: true };
    }

    componentDidMount() {
        this.populateUserData();
    }

    static renderUserTable(User) {
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
                    {User.map(User =>
                        <tr key={User.userId}>
                            <td>{User.userId}</td>
                            <td>{User.firstName}</td>
                            <td>{User.lastName}</td>
                            <td>{User.email}</td>
                            <td>{User.isAdmin}</td>
                            <td>{User.dateOfBirth}</td>
                            <td>{User.phone}</td>
                            <td>{User.address}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchUser.renderUserTable(this.state.User);

        return (
            <div>
                <h1 id="tabelLabel" >User Data </h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async populateUserData() {
        const response = await fetch('http://localhost:11366/api/Users');
        const data = await response.json();
        this.setState({ User: data, loading: false });
    }
}
