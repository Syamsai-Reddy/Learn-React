/* eslint-disable no-unused-vars */
import React from 'react'
import {useParams } from 'react-router-dom'
function User() {
    const {userid} =useParams()
  return (
    <div className=" bg-gray-600 text-white text-3xl py-2 px-1">
      user:{userid}
    </div>
  )
}

export default User
