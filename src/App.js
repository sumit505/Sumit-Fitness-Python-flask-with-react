import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Contact } from './components/Contact'
import { About } from './components/About'
import { Gallery } from './components/Gallery'
import { Login } from './components/Login'
import { Register } from './components/Register'

import { Home } from './components/Home'

function App() {
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
