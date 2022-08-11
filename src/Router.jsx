import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";

export default function Router() {
    return(
      <BrowserRouter>
            <Route path="/home" component={Home}/>
      </BrowserRouter>  
    )
}