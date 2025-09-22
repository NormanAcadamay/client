// rafce
import React from 'react'
import { SignOutButton } from '@clerk/clerk-react'
import { Toaster } from "@/components/ui/sonner"
import { toast } from 'sonner'


const SignOutLink = () => {
    

    const handleLogout = () => {
        // code body
        toast ( 'Logout Successfully!!!' )
    }
   
  return (
    <SignOutButton redirectUrl='/'>
        <button onClick={handleLogout}>
            Logout
        </button>
    </SignOutButton>
  )
}

export default SignOutLink