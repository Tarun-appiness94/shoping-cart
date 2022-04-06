import { BrowserRouter, Route , Switch } from 'react-router-dom';
import React from 'react';
import Header from './Header';
// import ProductComponent from './ProductComponent';
import ProductDetail from './ProductDetail';
import ProductListing from './ProductListing';

const App = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Switch>
        <Route path='/' exact component={ProductListing}/>
        <Route path="/:productId" exact component={ProductDetail}/>
        <Route>404 Not found</Route>
        </Switch>
    </BrowserRouter>
  )
}

export default App;