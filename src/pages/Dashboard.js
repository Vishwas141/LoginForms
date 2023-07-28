import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    
    <div className='flex justify-center items-center h-[1000px] text-[30px]'>
      <Link to="/login"> 
            <div className='text-white'>HELLO</div>
        </Link>
    </div>
  
  )
}

export default Dashboard
