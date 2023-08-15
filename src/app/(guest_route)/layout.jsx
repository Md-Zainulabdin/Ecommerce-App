'use client'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../firebase';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation'

const auth = getAuth(app);

const GuestLayout = ({ children }) => {

    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) setIsLogin(true);
            else setIsLogin(false);
        })
    })

    if (isLogin) redirect('/')

    return (
        <>{children}</>
    )
}

export default GuestLayout;