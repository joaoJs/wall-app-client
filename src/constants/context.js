import React from 'react'

const SessionContext = React.createContext({isLoggedIn: false})

class SessionProvider extends React.Component {
    // Context state
    state = {
      session: {},
    }
  
    // Method to update state
    setSession = session => {
      this.setState(prevState => ({ session }))
    }
  
    render() {
      const { children } = this.props
      const { session } = this.state
      const { setSession } = this
  
      return (
        <SessionContext.Provider
          value={{
            session,
            setSession,
          }}
        >
          {children}
        </SessionContext.Provider>
      )
    }
  }
  
export default SessionContext

export { SessionProvider }
