import React from 'react'
import SessionContext from '../constants/context'
import Wall from '../components/Wall'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'mutationobserver-shim'

const displayText = 'Bellow are the messages'
const NOT_LOGGED_IN = {session: {isLoggedIn: false}}
const LOGGED_IN = {session: {isLoggedIn: true}}
const buttonText = 'Add new message'

describe('Wall when user NOT logged in', () => {
    const state = NOT_LOGGED_IN
    it('should render Wall component', () => {
        const tree = (
          <SessionContext.Provider value={state}>
            <Wall />
          </SessionContext.Provider>
        )

        render(tree)

        screen.debug()
    })

    it('should render Wall component with displat text when user NOT logged in', () => {
      const tree = (
          <SessionContext.Provider value={state}>
            <Wall />
          </SessionContext.Provider>
        )

      const { getByText, container } = render(tree)

      expect(getByText(displayText)).toBeInTheDocument()
      expect(container.querySelector('h2')).toBeInTheDocument()
    })

    it('should render Wall component without button to add message when user NOT logged in', () => {
        const tree = (
            <SessionContext.Provider value={state}>
              <Wall />
            </SessionContext.Provider>
          )
  
        const { container } = render(tree)
  
        expect(container.querySelector('button')).toBeNull()
      })
})

describe('Wall when user logged in', () => {
  const state = LOGGED_IN
  it('should render Wall component', () => {
      const tree = (
          <SessionContext.Provider value={state}>
            <Wall />
          </SessionContext.Provider>
        )

      render(tree)

      screen.debug()
  })

  it('should render Wall component with same display text when user logged in', () => {
        const tree = (
            <SessionContext.Provider value={state}>
            <Wall />
            </SessionContext.Provider>
        )

        const { container } = render(tree)

        expect(container.querySelector('h2')).toBeInTheDocument()
  })

  it('should render Wall component with button to add new message when user logged in', () => {
        const tree = (
            <SessionContext.Provider value={state}>
            <Wall />
            </SessionContext.Provider>
        )

        const { getByText, container } = render(tree)

        expect(getByText(buttonText)).toBeInTheDocument()    
        expect(container.querySelector('button')).toBeInTheDocument()
  })
})