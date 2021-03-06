import './App.css';
import './components/navBar/navBar'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//pages
import homePage from './components/home/homePage'
import Draft from './components/draft/Draft'
import NavBar from './components/navBar/navBar'
import RandomRoll from './components/randomRoll/RandomRoll'
import Random from './components/random/Random'
import {PlayBackGroundMusic} from './audio/PlayBackGroundMusic'
import wheel from './components/wheel/wheel'


function App() {

  //so that socket can be accessed anywhere
  

  return (
    
    <Router>
      <div className='test' onMouseMove={e => this.handleMouseMove(e)}></div>
      <NavBar />
      <Switch>
        <Route path='/' exact component={homePage} />
        <Route path='/draft' exact component={Draft}/>
        <Route path='/randomHelper' exact component={Random}/>
        <Route path='/randomRoll' exact component={RandomRoll}/>
        <Route path='/random' exact component={Random}/>
        <Route path='/wheel' exact component={wheel}/>
      </Switch>
      <PlayBackGroundMusic />
    </Router>
  );
}

export default App;
