import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div className='flex justify-center pt-6'>
        {children}
    </div>
  )
}

export default AuthLayout