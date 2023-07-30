import React from 'react'
import {Link} from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        Welcome
        <Link to={'/register'}>Register</Link>
    </div>
  )
}

export default Dashboard
