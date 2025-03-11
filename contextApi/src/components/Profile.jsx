import React, { useContext } from 'react'
import UserContext from '../ContextAPI/UserContext'
function Profile() {
    const {user} = useContext(UserContext)
    if(!user) return <div>no user</div>
    return <div>Hello {user.username}</div>
}

export default Profile
