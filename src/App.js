import React, { useEffect } from 'react';
import './App.scss';

import { connect } from 'react-redux';

import { setLoaded } from './redux/load-trigger/load-trigger.actions';

import { Switch, Route } from 'react-router-dom'
import Header from './components/header/header.component';
import LandingPage from './pages/landing-page/landing-page.component';
import WorkPage from './pages/work-page/work-page.component'
import Taskbar from './components/taskbar/taskbar.component'
import Preloader from './pages/preloader/preloader.component';

import slideEase from './assets/anim/anim-ease';

const App = ({loaded, setLoaded}) => {

  useEffect(() => {
    // Load all dependencies the web needs
    slideEase()
  })

  useEffect(() => {
    setTimeout(() => {
      setLoaded()
    }, 2000)
  }, [loaded, setLoaded])

  return (
    <div className="App">
      <Preloader />
      <Header />
      <Taskbar />
      <Switch>
        <Route exact path='/' render={() => (<LandingPage />)}></Route>
        <Route exact path='/work' render={() => (<WorkPage />)}></Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = ({loaded}) => ({
  loaded: loaded.loaded
})

const mapDispatchToProps = (dispatch) => ({
  setLoaded: () => {dispatch(setLoaded())}
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
