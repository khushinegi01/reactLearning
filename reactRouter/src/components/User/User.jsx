import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
    return (
        <>
            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium text-orange-700">User : {id}</h1>
            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://cdn.pixabay.com/photo/2016/11/19/00/32/boy-1837466_1280.png" alt="image2" />
            </div>
        </>
    )
}

export default User
