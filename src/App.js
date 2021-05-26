import './App.css';
import './components/navBar/navBar'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//pages
import homePage from './components/home/homePage'
import Draft from './components/draft/Draft'
import NavBar from './components/navBar/navBar'
import RandomRoll from './components/randomRoll/RandomRoll'

function App() {
  return (
    <Router >
      <NavBar />
      <Switch>
        <Route path='/' exact component={homePage} />
        <Route path='/draft' exact component={Draft}/>
        <Route path='/randomRoll' exact component={RandomRoll}/>
      </Switch>
    </Router>
  );
}

export default App;
