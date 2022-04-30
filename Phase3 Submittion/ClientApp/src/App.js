import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Apps } from './components/Apps';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { FetchData } from './components/FetchData';
import { Register } from './components/Register';
import { ProductAdd } from './components/ProductAdd';
import { FetchUser } from './components/FetchUser';
import Products from "./components/Products";
import Product from "./components/Product";
import EditProduct from "./components/EditProduct";
import EditUser from "./components/EditUser";
import User from "./components/User";
import Users from "./components/Users";
import UserApps from "./components/UserApps";

import './custom.css'

export default class App extends Component {
    static displayName = App.name;



  render () {
    return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/Apps' component={Apps} />
            <Route path='/fetch-data' component={FetchData} />
            <Route path='/Login' component={Login} />
            <Route path='/Register' component={Register} />
            <Route path='/Dashboard' component={Dashboard} />
            <Route path='/ProductAdd' component={ProductAdd} />
            <Route path='/FetchUser' component={FetchUser} />
            <Route path='/EditUser' component={EditUser} />
            <Route path='/Users' component={Users} />
            <Route path='/User' component={User} />
            <Route path='/EditProduct' component={EditProduct} />
            <Route path='/Products' component={Products} />
            <Route path='/Product' component={Product} />
            </Layout>
    );
  }
}
