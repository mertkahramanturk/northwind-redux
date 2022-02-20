import React from "react";
import Navi from "../navi/Navi";
import { Container } from "reactstrap";
import Dashboard from "./Dashboard";
import { Switch, Route } from "react-router-dom";
import CartDetail from "../cart/CartDetail"
import NotFound from "../common/NotFound"
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path= "/" exact component={Dashboard}></Route>
        <Route path= "/product" component={Dashboard}></Route>
        <Route path= "/cart" exact component={CartDetail}></Route>
        <Route path= "/saveproduct/:productId"  component={AddOrUpdateProduct}></Route>
        <Route path= "/saveproduct"  component={AddOrUpdateProduct}></Route>
        <Route component={NotFound}></Route>
      </Switch>
      
    </Container>
  );
}

export default App;
