'use client'
import Form from "@/app/components/Form/page";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../../firebase'
import { useRouter } from "next/navigation"

const auth = getAuth(app);

const SignInForm = () => {

    const router = useRouter();

    const verifyUser = (username, email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(value => router.replace('/'))
            .catch(err => console.log(err))
    }

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <Form signIn={false} onFormSumbit={verifyUser} />
        </div>
    )
}

export default SignInForm;