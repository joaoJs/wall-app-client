import React from 'react'
import { useForm } from 'react-hook-form'
import '../styles/forms.css'

function LoginPage() {

    const { register, errors, handleSubmit } = useForm()
    const onSubmit = data => {
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

            <label htmlFor="name">Password</label>
            <input
              name="password"
              placeholder="1234"
              autoComplete="on"
              ref={register({
                required: 'this is required'
              })}
            />
            <br />
            {errors.password && errors.password.message}
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      )
}

export default LoginPage