import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { changeLoginStatus } from './redux/actions/utilActions'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Contact } from './components/Contact'
import { About } from './components/About'
import { Gallery } from './components/Gallery'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { Home } from './components/Home'

function App() {
  const dispatch = useDispatch()
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token')
    return tokenString
  }

  useEffect(() => {
    if (getToken()) {
      dispatch(changeLoginStatus(true))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
