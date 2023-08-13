'use client'
import Form from "@/app/components/Form/page";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {app} from '../../firebase';

const auth = getAuth(app)

const SignUpForm = () => {

    const createUser = (username, email, password) => {
        createUserWithEmailAndPassword(auth,  email, password)
    }

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <Form signIn={true} onFormSumbit={createUser}/>
        </div>
    )
}

export default SignUpForm;