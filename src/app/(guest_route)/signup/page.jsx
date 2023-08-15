'use client'
import Form from "@/app/components/Form/page";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../firebase';
import { useRouter } from "next/navigation";

const auth = getAuth(app)

const SignUpForm = () => {

    const router = useRouter();

    const createUser = (username, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((data) => router.replace('/login'))
            .catch(err => console.log(err))
    }

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <Form signIn={true} onFormSumbit={createUser} />
        </div>
    )
}

export default SignUpForm;