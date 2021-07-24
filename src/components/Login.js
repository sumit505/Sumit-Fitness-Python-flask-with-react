import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { changeLoginStatus } from '../redux/actions/utilActions'
import { useHistory } from 'react-router-dom'
import { NotificationContainer, NotificationManager } from 'react-notifications'

import 'react-notifications/lib/notifications.css'

export const Login = () => {
    const { register, handleSubmit, reset } = useForm()
    const isLoggedIn = useSelector(state => state.utils.isLoggedIn)
    const dispatch = useDispatch()
    const history = useHistory()

    const loginFormSubmit = async data => {
        const response = await fetch('http://127.0.0.1:105/api/login/', {
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (response.status === 200) {
            sessionStorage.setItem('token', JSON.stringify('1234'))
            dispatch(changeLoginStatus(!isLoggedIn))
            history.push('/')
        } else {
            NotificationManager.error('Error message', 'Login failed');
        }

        reset()
    }

    return (
        <>
            <div className="user-form-container">
                <form className="user-form" onSubmit={handleSubmit(loginFormSubmit)}>
                    <input type="email" {...register("email", { required: true, pattern: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i })} placeholder="Email Address" />
                    <input type="password" {...register("password", { required: true })} placeholder="******" />
                    <button type="submit" className="btn btn_dark">LOGIN</button>
                </form>
            </div>
            <NotificationContainer />
        </>

    )
}
