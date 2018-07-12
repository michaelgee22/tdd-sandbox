import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Counter from "./Routes/Counter";
import Header from "./Header";

import "../styles/App.css";

const App = () => {
  return (
    <Router data-test="browser-router">
      <div data-test="app-container">
        <Header />

        <main>
          <Switch>
            <Route exact path="/" component={Counter} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
