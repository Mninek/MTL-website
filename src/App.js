import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//pages
import homePage from './components/home/homePage'

function App() {
  return (
    <Router >
      <Switch>
        <Route path='/' exact component={homePage} />
      </Switch>
    </Router>
  );
}

export default App;
