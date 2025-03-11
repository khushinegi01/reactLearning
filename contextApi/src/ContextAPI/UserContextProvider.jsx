import React, { useState } from 'react'
import UserContext from './UserContext'
function UserContextProvider({children}) {
    const [user ,setUser] = useState(null)
    return (
        <UserContext value={{user,setUser}}>
            {children}
        </UserContext>
    )
}

export default UserContextProvider
