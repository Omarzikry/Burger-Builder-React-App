import React, { Component } from 'react';

import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Orders from './containers/Orders/Orders';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
                <Switch>
                <Route path="/Checkout" component={Checkout}/>
                <Route path="/Orders" component={Orders}/>
                <Route path="/" exact component={BurgerBuilder}/>
                </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
