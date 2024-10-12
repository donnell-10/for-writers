import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore"; // For fetching user details from Firestore
import { db } from "../config/firebase"; // Firestore reference
import "../styles.css";
import { Link, useNavigate } from "react-router-dom";

export const Auth = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [welcomeMessage, setWelcomeMessage] = useState(""); // For the welcome back message

    // Function to sign in using email and password
    const signIn = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Fetch user details (like name) from Firestore
            const userDoc = await getDoc(doc(db, "users", user.uid));
            const userData = userDoc.data();
            const userName = userData?.name || "User"; // Fallback if no name is found

            // Set welcome message
            setWelcomeMessage(`Welcome back, ${userName}!`);

            // Optionally, you can delay navigation to show the message briefly
            setTimeout(() => {
                navigate('/'); // Redirect to homepage or dashboard
            }, 2000);

        } catch (err) {
            console.error(err);
            setError("Failed to sign in. Please check your credentials.");
        }
    };

    // Function to sign in using Google
    const signInGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            // Fetch user details from Firestore
            const userDoc = await getDoc(doc(db, "users", user.uid));
            const userData = userDoc.data();
            const userName = userData?.name || user.displayName || "User";

            // Set welcome message
            setWelcomeMessage(`Welcome back, ${userName}!`);

            // Optionally delay navigation to show the message briefly
            setTimeout(() => {
                navigate('/'); // Redirect to homepage or dashboard
            }, 2000);

        } catch (err) {
            console.error(err);
            setError("Google sign-in failed.");
        }
    };

    return (
        <div className="w-1/2 p-2 shadow-md bg-white rounded-lg">
            <div className="flex">
                <button className="max-w-[300px] flex items-center" onClick={() => navigate('/')}>
                    <img src="/logo-no-background.svg" alt="logo" className="w-auto" />
                </button>
            </div>

            <div>
                <h1 className="text-black font-poppins font-bold text-[45px]">
                    Sign In
                </h1>
                <div className="flex gap-2">
                    <h2>Don't have an account?</h2>
                    <Link className="underline" to='/register'>Sign Up</Link>
                </div>
            </div>

            {error && <div className="text-red-500 text-center mb-4">{error}</div>}
            {welcomeMessage && <div className="text-green-500 text-center mb-4">{welcomeMessage}</div>}

            <div className="pt-3 px-6">
                <h1 className="text-[18px] mb-2">Email Address</h1>
                <input
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-center bg-white text-black border-black rounded-md border-[2px] h-10"
                />
            </div>
            <div className="pt-3 px-6">
                <h1 className="text-[18px] mb-2">Password</h1>
                <input
                    placeholder="password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full text-center bg-white text-black border-black rounded-md border-[2px] h-10"
                />
            </div>

            <div className="flex justify-center pt-3 mt-3">
                <button onClick={signIn} className="w-1/3 border-[2px] rounded-md border-black">
                    Sign In
                </button>
            </div>

            <div className="flex justify-center items-center pt-3">
                <hr className="flex-grow border-t border-gray-400" />
                <h2 className="mx-4">or sign in with</h2>
                <hr className="flex-grow border-t border-gray-400" />
            </div>

            <div className="pt-3 px-6 flex justify-between">
                <button onClick={signInGoogle} className="flex items-center gap-2 border-[2px] border-red-500 px-3 py-1 text-red-500 w-32 justify-center rounded-md hover:bg-red-300">
                    <img src="/google-icon.svg" alt="google" className="w-8 h-8" />
                    Google
                </button>
                <button onClick={signInGoogle} className="flex items-center gap-2 border-[2px] border-blue-500 px-3 py-1 text-blue-500 w-32 justify-center rounded-md hover:bg-blue-300">
                    <img src="/facebook-icon.svg" alt="facebook" className="w-8 h-8" />
                    Facebook
                </button>
            </div>
        </div>
    );
};
