import React from 'react'
import { Link } from "react-router-dom";
import {  useDispatch, useSelector } from 'react-redux'
import { changeLoginStatus } from '../redux/actions/utilActions';
import { useHistory } from 'react-router-dom'

export const Header = () => {
  const isLoggedIn = useSelector(state => state.utils.isLoggedIn)
  const dispatch = useDispatch()
  const history = useHistory()

  const logout = () => {
    sessionStorage.removeItem('token')
    dispatch(changeLoginStatus(!isLoggedIn))
    history.push('/login')
  }
  
  const showLinksDynamically = () => {
    if(isLoggedIn){
      return (
        <>
          <Link to="#" onClick={logout} >Logout</Link>
        </>   
      )
    } else {
      return (
        <>
          <Link to="/login" >Login</Link>
          <Link to="/register" >Register</Link>
        </>
      )
    }
  }

  return (
    <header>
      <div className="top">
        <span>Put yourself first with a 5-day free trial pass today</span>
        {showLinksDynamically()}
      </div>
      <nav>
        <menu>
          <li><Link to="/" data="HOME">HOME</Link></li>
          <li><Link to="/gallery" data="GALLERY">GALLERY</Link></li>
        </menu>
        <img src="https://png.pngtree.com/template/20191025/ourmid/pngtree-gym-logo-vector-image_323395.jpg" alt="logo" title="baker" className="logo" />
        <menu>
          <li><Link to="/about" data="ABOUT">ABOUT</Link></li>
          <li><Link to="/contact" data="CONTACT">CONTACT</Link></li>
        </menu>
      </nav>
    </header>
  )
}
