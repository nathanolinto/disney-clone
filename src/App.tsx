import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"

import {Initial} from "./pages/Initial";


function App() {
  return (

    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Initial} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
