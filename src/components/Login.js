import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { changeLoginStatus } from '../redux/actions/utilActions'
import { useHistory } from 'react-router-dom'

export const Login = () => {
    const { register, handleSubmit, reset } = useForm()
    const isLoggedIn = useSelector(state => state.utils.isLoggedIn)
    const dispatch = useDispatch()
    const history = useHistory()

    const loginFormSubmit = data => {
        dispatch(changeLoginStatus(!isLoggedIn))
        history.push('/')
        reset()
    }

    return (
        <div className="user-form-container">
            <form className="user-form" onSubmit={handleSubmit(loginFormSubmit)}>
                <input type="email" {...register("email", { required: true, pattern: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i })} placeholder="Email Address" />
                <input type="password" {...register("password", { required: true })} placeholder="******" />
                <button type="submit" className="btn btn_dark">LOGIN</button>
            </form>
        </div>
    )
}
