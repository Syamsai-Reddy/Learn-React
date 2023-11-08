/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data =useLoaderData()
    // const [data ,setData] =useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Syamsai-Reddy')
    //     .then(response => response.json())
    //     .then(data =>{
    //         //console.log(data)
    //         setData(data)
    //     })
    //   }
    // , [])
    
  return (
    <div className="text-center text-3xl text-white bg-gray-600 m-4 p-4">
      Github Fallowers :{data.followers}
      <img src={data.avatar_url} alt='Git profail' width={300} />
    </div>
  )
}

export default Github

export const githubloaders = async() =>{
   const response = await fetch('https://api.github.com/users/Syamsai-Reddy')
   return response.json()
}