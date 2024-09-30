import { useState } from "react";
import { auth, googleProvider } from "../config/firebase"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import "../styles.css"

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

    // const logout = async () => {
    //     try{
    //         await signOut(auth)}
    //     catch(err){
    //             console.log(err)
    //         }
    // }

    return (
        <div className="w-1/3 p-2 shadow-md bg-white rounded-lg">
        
            <div className=" flex ">
                <button className=" max-w-[300px] flex items-center">
                    <img src="/logo-no-background.svg" alt="logo" className=" w-auto"/>
                </button>
  
            </div>
            <div>
                <div>
                    <h1 className=" text-black font-bold text-[45px]">
                        Sign In
                    </h1>
                </div>
                <div className="flex gap-2">
                    <h2>
                        Don't have an account? 
                    </h2>
                    <h2 className=" underline">
                        Sign Up
                    </h2>
                </div>
            </div>
            <div className="pt-3 px-6">
                <h1 className="text-[18px] mb-2">Email Address</h1>
                <input placeholder="email" onChange={(e) => setEmail(e.target.value)} className="w-full text-center bg-white text-black  border-black rounded-md border-[2px] h-10"/> 
            </div>              
            <div className="pt-3 px-6">
                <h1 className="text-[18px] mb-2">Password</h1>
                <input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} className="w-full text-center bg-white text-black  border-black rounded-md border-[2px] h-10"/>
            </div>
            <div >
                <div className="flex justify-center pt-3 mt-3">
                    <button onClick={signIn} className="w-1/3 border-[2px] rounded-md border-black ">
                        Sign In
                    </button>
                </div>

            </div>
            <div className="flex justify-center items-center pt-3 ">
                <hr className="flex-grow border-t border-gray-400" />
                <h2 className="mx-4">or sign in with</h2>
                <hr className="flex-grow border-t border-gray-400" />

            </div>
            <div className="pt-3 px-6 flex justify-between">
                <button onClick={signInGoogle} className="flex items-center gap-2 border-[2px] border-red-500 px-3 py-1 text-red-500 w-32 justify-center rounded-md hover:bg-red-300">
                    <img src="/google-icon.svg" alt="google" className="w-8 h-8"/>
                    Google
                </button>
                <button onClick={signInGoogle} className="flex items-center gap-2 border-[2px] border-blue-500 px-3 py-1 text-blue-500 w-32 justify-center rounded-md hover:bg-blue-300">
                    <img src="/facebook-icon.svg" alt="facebook" className="w-8 h-8"/>
                    Facebook
                </button>             
            </div>

            {/* <button onClick={logout}>Log Out</button> */}
        </div>
    );
};