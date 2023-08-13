'use client'
import Form from "@/app/components/Form/page";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../../firebase'

const auth = getAuth(app);

const SignInForm = () => {

    const verifyUser = (username, email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(value => alert("Sucess"))
        .catch(err => console.log(err))
    }

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <Form signIn={false} onFormSumbit={verifyUser} />
        </div>
    )
}

export default SignInForm;