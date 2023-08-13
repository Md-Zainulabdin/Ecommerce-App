'use client'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from './firebase'

const auth = getAuth(app);

const Home = () => {

  const signupUser = () => {
    createUserWithEmailAndPassword(auth, 'zain@test.com', '123456').then((value) => console.log(value));
  }

  return (
    <div>
      <h1>
        Home Page
      </h1>
      <button onClick={signupUser}>create user</button>
    </div>
  )
}

export default Home;