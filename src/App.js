import logo from './logo.svg';
import './App.scss';

import { Switch, Route } from 'react-router-dom'
import Header from './components/header/header.component';
import LandingPage from './pages/landing-page/landing-page.component';
import WorkPage from './pages/work-page/work-page.component'
import Taskbar from './components/taskbar/taskbar.component'

const App = (props) => {
  return (
    <div className="App">
      <Header></Header>
      <Taskbar></Taskbar>
      <Switch>
        <Route exact path='/' render={() => (<LandingPage />)}></Route>
        <Route exact path='/work' render={() => (<WorkPage />)}></Route>
      </Switch>
    </div>
  );
}

export default App;
