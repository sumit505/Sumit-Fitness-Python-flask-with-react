import React from 'react'
import { useForm } from 'react-hook-form'

export const Register = () => {
    const { register, handleSubmit, reset } = useForm()

    const registerFormSubmit = data => {
        console.log(data)
        reset()
    }

    return (
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
    )
}
