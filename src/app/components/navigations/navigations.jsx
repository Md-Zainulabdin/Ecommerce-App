'use client'
import Link from "next/link";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from '../../firebase'
import { useEffect, useState } from "react";

const auth = getAuth(app);

const Nav = () => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser(null)
                console.log("Log out");
            }
        })
    }, [])

    return (
        <div className={`w-full h-[50px] flex items-center justify-between px-[30px] py-[30px] border-b`}>
            <div className="navigations">
                <ul className="flex items-center gap-4">
                    <Link href={'/'}><li>Home</li></Link>
                    <Link href={'/pages/products'}><li>Product</li></Link>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="auth">
                {(user) ? <span className="px-4 py-2 border cursor-pointer" onClick={() => signOut(auth)}>Log Out</span> : <Link href={'/login'} className="px-4 py-2 border">Login</Link> }
            </div>
        </div>
    )
}

export default Nav;