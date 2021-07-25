import React from 'react'
import { useForm } from 'react-hook-form'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { useHistory } from 'react-router-dom'

export const Register = () => {
    const { register, handleSubmit, reset } = useForm()
    const history = useHistory()

    const registerFormSubmit = async data => {
        try {
            const response = await fetch('https://sumit-fitness-flask.herokuapp.com/api/register/', {
                method: "POST",
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if (response.status !== 201)
                throw new Error('Registration failed')

            NotificationManager.success('Error message', 'Registration successful');
            
            setTimeout(()=>{
                history.push('/login')
            }, 1000)

            reset()
        } catch (error) {
            console.table([error.name, error.stack])
            NotificationManager.error('Error message', error.message);
        }
    }

    return (
        <>
            <div className="user-form-container">
                <form className="user-form" onSubmit={handleSubmit(registerFormSubmit)}>
                    <input type="text" {...register("name", { required: true })} placeholder="Full Name" />
                    <input type="email" {...register("email", { required: true, pattern: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i })} placeholder="Email Address" />
                    <input type="password" {...register("password", { required: true })} placeholder="******" />
                    <select {...register("gender", { required: true })}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>
                    <input type="number" {...register("age", { required: true, min: 16 })} placeholder="Your Age" />
                    <button type="submit" className="btn btn_dark">Register</button>
                </form>
            </div>
            <NotificationContainer />
        </>

    )
}
