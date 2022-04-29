import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Apps } from './components/Apps';
import { Login } from './components/Login';
import { Stage } from './components/Stage';
import { FetchData } from './components/FetchData';
import { Register } from './components/Register';
import { ProductAdd } from './components/ProductAdd';
import Products from "./components/Products";
import Product from "./components/Product";

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
            <Route path='/Stage' component={Stage} />
            <Route path='/ProductAdd' component={ProductAdd} />
            </Layout>
    );
  }
}
