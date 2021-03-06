import React, {useRef} from 'react'
import { useForm } from 'react-hook-form'
import '../styles/forms.css'
import $ from 'jquery'
import {encryptPassword} from '../utils/password'

function SignUpPage() {

    const { register, errors, handleSubmit, watch } = useForm()
    const password = useRef({});
    password.current = watch("password", "");
    const onSubmit = data => {
      // encrypton using CryptoJS library
      const cipher = encryptPassword(data.password, data.email)
      data.password = cipher
      data.password_repeat = null
      $.ajax({
          type: "POST",
          url: "https://wall-app-joao.herokuapp.com/api/users/",
          data: data,
          success: function(res) {
              console.log(res)
          }
        });
    }

    return (
        <div className="App">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name</label>
            <input
              name="name"
              placeholder="what is your name?"
              autoComplete="on"
              ref={register({
                required: true
              })}
            />
            <br />
            {errors.name && <p className="error">Must enter a name</p>}
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

            <label>Repeat password</label>
            <input
                name="password_repeat"
                type="password"
                ref={register({
                validate: value =>
                    value === password.current || "The passwords do not match"
                })}
            />
            <br />
            {errors.password_repeat && <p className="error">{errors.password_repeat.message}</p>}
            <br />
             
            <label htmlFor="email">Email</label>
            <input
              name="email"
              placeholder="email@tsl.com"
              autoComplete="on"
              ref={register({
                required: 'this is required',
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'Invalid email address',
                },
              })}
            />
            <br />
            {errors.email && <p className="error">{errors.email.message}</p>}
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      )
}

export default SignUpPage