import React from 'react'
import LoginPage from '../components/LoginPage'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'mutationobserver-shim'

global.MutationObserver = window.MutationObserver

describe('LoginPage', () => {
    it('should render LoginPage Component', () => {
        render(<LoginPage />)

        screen.debug()
    })

    it('should render LoginPage Component with "Email" in it', () => {
        const { getByText } = render(<LoginPage />)

        expect(getByText('Email')).toBeInTheDocument()
    })

    it('should render validation error messages', async () => {
        const { getByText, findByText } = render(<LoginPage />)
        
        fireEvent.click(getByText('Submit'))

        const errorMessage = await findByText('You must specify a password')
        expect(errorMessage).toBeInTheDocument()
    })
})