import React from 'react'
import { Button } from '../../components/ui/button'
import { SignIn } from '@clerk/clerk-react'

function SignInPage() {
  return (
    <div className='flex  justify-center my-20 items-center'>
        <SignIn />
    </div>
  )
}

export default SignInPage
