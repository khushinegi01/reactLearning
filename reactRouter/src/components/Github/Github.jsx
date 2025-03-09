import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])  

    useEffect(() => {
        
        fetch('https://api.github.com/users/khushinegi01')
            .then(res => res.json())
            .then(data => {
                setData(data)
                console.log("Data fetched successfully:", data)
            })
            .catch(error => {
                console.error("Error fetching data:", error)
            })
    }, []) 

    return (
        <>
            <div className="text-center text-2xl sm:text-4xl py-10 font-medium text-orange-700">
                <div>Github Username: {data.name}</div>
            </div>
            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src={data.avatar_url} alt="image2" /><br></br>
            </div>
        </>
        
    )
}

export default Github
