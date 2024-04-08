import React from 'react'
import { Navigate } from 'react-router-dom' // Import Navigate from react-router-dom
import { UserAuth } from '../context/AuthContext'

const ProtectedRoute = ({ children }) => {
    const { user } = UserAuth()

    if (!user) {
        return <Navigate to='/' /> // Use Navigate to redirect to the home page if user is not authenticated
    } else {
        return children
    }
}

export default ProtectedRoute
