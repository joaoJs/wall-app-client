import React from 'react'
import SignUpPage from '../components/SignUpPage'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'mutationobserver-shim'

global.MutationObserver = window.MutationObserver

describe('SignUpPage', () => {
    it('should render SignUpPage Component', () => {
      render(<SignUpPage />)

      screen.debug()
    })

    it('should render SignUpPage Component with "Name" in it', () => {
        const { getByText } = render(<SignUpPage />)

        expect(getByText('Name')).toBeInTheDocument()
    })

    it('should render validation error messages', async () => {
        const { getByText, findByText } = render(<SignUpPage />)
        
        fireEvent.click(getByText('Submit'))

        const errorMessage = await findByText('Must enter a name')
        expect(errorMessage).toBeInTheDocument()
    })
  })