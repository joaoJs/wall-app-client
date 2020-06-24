import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import '../styles/forms.css'
import $ from 'jquery' 
import {encryptPassword} from '../utils/password'
import SessionContext from '../constants/context'

function LoginPage() {
    const { setSession } = useContext(SessionContext)

    const { register, errors, handleSubmit } = useForm()
    const onSubmit = data => {
      const cipher = encryptPassword(data.password, data.email)
      data.password = cipher
      $.ajax({
        type: "POST",
        url: `http://localhost:8080/api/users/login`,
        data: data,
        success: function(res) {
            const newSession = {isLoggedIn: true}
            setSession(newSession)
            console.log('====SESSION')
            console.log(newSession)
            console.log(res)
        }
      });
        alert(JSON.stringify(data))
    }

    return (
        <div className="App">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email</label>
                <input
                name="email"
                placeholder="email@tsl.com"
                autoComplete="on"
                type="text"
                ref={register({
                    required: 'this is required',
                    pattern: {
                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: 'Invalid email address',
                    },
                })}
            />
            <br />
            {errors.email && errors.email.message}
            <br />

            <label>Password</label>
            <input
                name="password"
                type="password"
                ref={register({
                required: "You must specify a password",
                minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters"
                }
                })}
            />
            <br />
            {errors.password && <p className="error">{errors.password.message}</p>}
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      )
}

export default LoginPage