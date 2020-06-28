import React from 'react'
import SessionContext from '../constants/context'
import Navbar from '../components/Navbar'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'mutationobserver-shim'
import { BrowserRouter } from 'react-router-dom'

const NOT_LOGGED_IN = {session: {isLoggedIn: false}}
const LOGGED_IN = {session: {isLoggedIn: true}}
const LOGOUT = 'Logout'
const LOGIN = 'Login'
const SIGN_UP = 'Sign Up'

describe('Navbar when user NOT logged in', () => {
    const state = NOT_LOGGED_IN
    it('should render Navbar component', () => {
        const tree = (
          <BrowserRouter>
            <SessionContext.Provider value={state}>
              <Navbar />
            </SessionContext.Provider>
          </BrowserRouter>
        )

        render(tree)

        screen.debug()
    })

    it('should render Navbar component WITH login and sign up options when user NOT logged in', () => {
      const tree = (
          <BrowserRouter>
            <SessionContext.Provider value={state}>
              <Navbar />
            </SessionContext.Provider>
          </BrowserRouter>
        )

      const { getByText } = render(tree)

      expect(getByText(LOGIN)).toBeInTheDocument()
      expect(getByText(SIGN_UP)).toBeInTheDocument()
    })

    it('should render Navbar component WITHOUT Logout option when user NOT logged in', () => {
        const tree = (
          <BrowserRouter>
            <SessionContext.Provider value={state}>
              <Navbar />
            </SessionContext.Provider>
          </BrowserRouter>
        )

        const { queryByText } = render(tree)

        const logoutText = 

        expect(queryByText(LOGOUT)).toBeNull()
    })
})

describe('Navbar when user logged in', () => {
    const state = LOGGED_IN
    it('should render Navbar component', () => {
        const tree = (
          <BrowserRouter>
            <SessionContext.Provider value={state}>
              <Navbar />
            </SessionContext.Provider>
          </BrowserRouter>
        )

        render(tree)

        screen.debug()
    })

    it('should render Navbar component WITH Logout option when user logged in', () => {
        const tree = (
          <BrowserRouter>
            <SessionContext.Provider value={state}>
              <Navbar />
            </SessionContext.Provider>
          </BrowserRouter>
        )

        const { getByText } = render(tree)

        expect(getByText(LOGOUT)).toBeInTheDocument()
    })

    it('should render Navbar component WITHOUT login and sign up options when user logged in', () => {
        const tree = (
            <BrowserRouter>
              <SessionContext.Provider value={state}>
                <Navbar />
              </SessionContext.Provider>
            </BrowserRouter>
          )
  
        const { queryByText } = render(tree)
  
        expect(queryByText(LOGIN)).toBeNull()
        expect(queryByText(SIGN_UP)).toBeNull()
      })
})