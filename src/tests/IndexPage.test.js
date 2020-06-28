import React from 'react'
import SessionContext from '../constants/context'
import IndexPage from '../components/IndexPage'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'mutationobserver-shim'

const welcomeText = 'Welcome to Wall App'

describe('IndexPage when user NOT logged in', () => {
    const state = {session: {isLoggedIn: false}}
    const displayText = welcomeText
    it('should render IndexPage component', () => {
        const tree = (
          <SessionContext.Provider value={state}>
            <IndexPage />
          </SessionContext.Provider>
        )

        render(tree)

        screen.debug()
    })

    it('should render IndexPage component with welcome text when user NOT logged in', () => {
      const tree = (
          <SessionContext.Provider value={state}>
            <IndexPage />
          </SessionContext.Provider>
        )

      const { getByText, container } = render(tree)

      expect(getByText(displayText)).toBeInTheDocument()
      expect(container.querySelector('h1')).toBeInTheDocument()
  })
})

describe('IndexPage when user logged in', () => {
  const state = {session: {isLoggedIn: true}}
  it('should render IndexPage component', () => {
      const tree = (
          <SessionContext.Provider value={state}>
            <IndexPage />
          </SessionContext.Provider>
        )

      render(tree)

      screen.debug()
  })

  it('should render IndexPage component without welcome text Header when user logged in', () => {
    const tree = (
        <SessionContext.Provider value={state}>
          <IndexPage />
        </SessionContext.Provider>
      )

    const { container } = render(tree)

    expect(container.querySelector('h1')).toBeNull()
  })
})