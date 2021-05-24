import './App.css';
import './components/navBar/navBar'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//pages
import homePage from './components/home/homePage'
import Draft from './components/draft/Draft'
import NavBar from './components/navBar/navBar'

function App() {
  return (
    <Router >
      <NavBar />
      <Switch>
        <Route path='/' exact component={homePage} />
        <Route path='/draft' exact component={Draft}/>
      </Switch>
    </Router>
  );
}

export default App;
