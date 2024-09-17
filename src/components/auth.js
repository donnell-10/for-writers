import { useState } from "react";
import { auth, googleProvider } from "../config/firebase"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"

//get {auth}

export const Auth = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signIn = async() => {
        try{
        await createUserWithEmailAndPassword(auth, email, password)}

        catch(err){
            console.log(err)
        }
    };

    const signInGoogle = async () => {
        try{
            await signInWithPopup(auth, googleProvider)}
    
            catch(err){
                console.log(err)
            }
    }

    const logout = async () => {
        try{
            await signOut(auth)}
        catch(err){
                console.log(err)
            }
    }

    return (
        <div>
            <input placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={signIn}>
                Sign In
            </button>
            <button onClick={signInGoogle}>Sign in with google</button>
            <button onClick={logout}>Log Out</button>
        </div>
    );
};