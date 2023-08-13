'use client'
import { useState } from "react";

const Form = ({ signIn, onFormSumbit }) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onFormSumbit(username, email, password)
    }

    return (
        <div className="w-[70%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[33%] h-[400px] p-4 border">
            <div className="py-6">
                <h1 className="text-2xl font-semibold">{(signIn) ? "Sign Up" : "Sign In"}</h1>
            </div>
            <form action="#" className="flex flex-col gap-2" onSubmit={onSubmitHandler}>
                {
                    (signIn) ? (
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Username :</label>
                            <input
                                type="text"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="border p-1 outline-none" />
                        </div>
                    ) : null
                }

                <div className="flex flex-col gap-2">
                    <label htmlFor="">Email :</label>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-1 outline-none" />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="">password :</label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-1 outline-none" />
                </div>

                <div className="my-3">
                    <button className="border px-6 py-2">{(signIn) ? "Sign Up" : "Sign in"}</button>
                </div>
            </form>
        </div>
    )
}

export default Form;