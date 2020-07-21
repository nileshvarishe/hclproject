import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import {Home} from "./Home";
import Cart from "./Cart";
import {MyOrder} from "./MyOrder";

function Navbar() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <div>
            <ul className="ul-style">
            <li className="li-style"><div>Shopping Cart</div></li>
            <li className="li-style"><NavLink className="Link-style" to="/home" exact>Home   |</NavLink></li>
            <li className="li-style"><NavLink className="Link-style" to="/myorder" exact>My Order   |</NavLink></li>
            <li className="li-style"><NavLink className="Link-style" to="/cart" exact>Cart</NavLink></li>
            </ul>
          </div>
        </header>
        <div>
        <Route path="/" exact component={Home}></Route>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/myorder" exact component={MyOrder}></Route>
        <Route path="/cart" exact component={Cart}></Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Navbar;
