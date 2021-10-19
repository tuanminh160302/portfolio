import React, { useState, useEffect, useRef } from 'react';
import './App.scss';

import { connect } from 'react-redux';

import { useLocation } from 'react-router';

import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { setLoaded } from './redux/load-trigger/load-trigger.actions';
import { getLocation } from './redux/location/location.actions';

import { Switch, Route, withRouter } from 'react-router-dom'
import Header from './components/header/header.component';
import LandingPage from './pages/landing-page/landing-page.component';
import WorkPage from './pages/work-page/work-page.component'
import Taskbar from './components/taskbar/taskbar.component'
import Preloader from './pages/preloader/preloader.component';
import ChangeCurtain from './components/change-curtain/change-curtain.component';

import { gsap } from 'gsap'
import slideEase from './assets/anim/anim-ease';

const App = ({loaded, setLoaded, getLocation, location, history}) => {

  const transitionLocation = useLocation()

  location = history.location.pathname
  
  const curtain = useRef()

  const isInitRun = useRef(true)

  const changeCurtain = () => {
    let changeCurtainTl = gsap.timeline()
    changeCurtainTl.to(curtain.current, { duration: 1.2, scaleX: 1, ease: 'slide' })
      .to(curtain.current, { duration: 1.5, background: '#D79922' }, .7)
      .to(curtain.current, { transformOrigin: 'right'}, 1.2)
      .to(curtain.current, { duration: 1.2, scaleX: 0, ease: 'slide' }, 1.2)
      .to(curtain.current, { transformOrigin: 'left', background: '#E73F7F'}, 2.5)
  }

  useEffect(() => {
    if (isInitRun.current === true) {
      isInitRun.current = false
    } else if (isInitRun.current === false) {
      changeCurtain()
      setTimeout(() => {
        window.scrollTo(0,0)
      }, 1200)
    }
  }, [location, isInitRun])

  useEffect(() => {
    // Load all dependencies the web needs
    slideEase()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoaded()
    }, 2000)
  })

  return (
    <div className="App">
      <ChangeCurtain ref={curtain}/>
      <Preloader />
      <Header />
      <Taskbar />
      <TransitionGroup>
        <CSSTransition key={transitionLocation.key} classNames='route-transition' timeout={1200}>
          <Switch location={transitionLocation}>
            <Route exact path='/' render={() => (<LandingPage />)}></Route>
            <Route exact path='/work' render={() => (<WorkPage />)}></Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

const mapStateToProps = ({loaded, location}) => ({
  loaded: loaded.loaded,
  location: location.location
})

const mapDispatchToProps = (dispatch) => ({
  setLoaded: () => {dispatch(setLoaded())},
  getLocation: (path) => {dispatch(getLocation(path))}
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
