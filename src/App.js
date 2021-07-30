import logo from './logo.svg';
import './App.scss';

import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/header/header.component';
import LandingPage from './pages/landing-page/landing-page.component';

const App = (props) => {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path='/' render={() => (<LandingPage />)}></Route>
      </Switch>
    </div>
  );
}

export default App;
