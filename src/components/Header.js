import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { changeLoginStatus } from '../redux/actions/utilActions';
import { useHistory, Redirect } from 'react-router-dom'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { saveAs } from 'file-saver'

export const Header = () => {
  const isLoggedIn = useSelector(state => state.utils.isLoggedIn)
  const dispatch = useDispatch()
  const history = useHistory()

  const logout = () => {
    sessionStorage.removeItem('token')
    dispatch(changeLoginStatus(!isLoggedIn))
    history.push('/login')
  }

  const downloadFile = async () => {
    try {
      const token = await sessionStorage.getItem('token')
      const url = `https://sumit-fitness-flask.herokuapp.com/download?token=${token}`
      const response = await fetch(url, {
        method: "GET",
        mode: 'cors'
      })

      const cloneResponse = response.clone()

      const responseData = await cloneResponse.json()
      if (response.status !== 200)
        throw new Error(responseData.message)

      const responseFile = await response.blob()

      saveAs(responseFile, 'user_list')

      return responseFile
    } catch (error) {
      NotificationManager.error('Error message', error.message);
    }
  }

  const showLinksDynamically = () => {
    if (isLoggedIn) {
      return (
        <>
          <Link to="#" onClick={logout} >Logout</Link>
          <Link to="#" onClick={downloadFile}>Download JSON</Link>
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
      <NotificationContainer />
    </header>
  )
}
