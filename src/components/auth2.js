import { useState } from "react";
import { auth, db, googleProvider } from "../config/firebase";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore"; // Firestore functions for document check and creation
import { useNavigate } from "react-router-dom";
import { SuccessModal } from "./SuccessModal";

export const Auth2 = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [isSucessVisible, setSuccessVisible] = useState(false)

    const signUp = async () => {
        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }
        try {
            // Create user in Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Save additional user data to Firestore
            await setDoc(doc(db, "users", user.uid), {
                name: name,
                email: email,
                createdAt: new Date(),
            });

            console.log("User data saved to Firestore");
            setSuccessVisible(true);
        } catch (err) {
            console.log(err);
            setError("Failed to sign up. Try again.");
        }
    };

    const signInGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            // Check if user already exists in Firestore
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) {
                // If the user does not exist in Firestore, save additional information
                await setDoc(doc(db, "users", user.uid), {
                    name: user.displayName, // Use the name from Google profile
                    email: user.email,
                    createdAt: new Date(),
                });
                setSuccessVisible(true);
                console.log("New Google user saved to Firestore");
            } else {
                console.log("User already exists in Firestore");
            }
        } catch (err) {
            console.log(err);
            setError("Google sign-in failed.");
        }
    };

    const handleSuccessClose = () => {
        setSuccessVisible(false);
        navigate('/')
    }

    return (
        <div className="w-2/3 p-6 shadow-md bg-white rounded-lg">
            <div className="flex">
                <button
                    className="max-w-[300px] flex items-center"
                    onClick={() => navigate('/')}
                >
                    <img
                        src="/logo-no-background.svg"
                        alt="logo"
                        className="w-auto"
                    />
                </button>
            </div>
            <div>
                <h1 className="text-black font-poppins font-bold text-[45px]">
                    Sign Up
                </h1>
                <div className="flex gap-2">
                    <h2>Already have an account?</h2>
                    <h2
                        className="underline cursor-pointer"
                        onClick={() => navigate('/login')}
                    >
                        Sign In
                    </h2>
                </div>
            </div>
            {error && (
                <div className="text-red-500 text-center mb-4">
                    {error}
                </div>
            )}
            <div className="pt-3 px-6">
                <h1 className="text-[18px] mb-2">Full Name</h1>
                <input
                    placeholder="Full name"
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-center bg-white text-black border-black rounded-md border-[2px] h-10"
                />
            </div>
            <div className="pt-3 px-6">
                <h1 className="text-[18px] mb-2">Email Address</h1>
                <input
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-center bg-white text-black border-black rounded-md border-[2px] h-10"
                />
            </div>
            <div className="pt-3 px-6">
                <h1 className="text-[18px] mb-2">Password</h1>
                <input
                    placeholder="Password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full text-center bg-white text-black border-black rounded-md border-[2px] h-10"
                />
            </div>
            <div className="pt-3 px-6">
                <h1 className="text-[18px] mb-2">Confirm Password</h1>
                <input
                    placeholder="Confirm password"
                    type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full text-center bg-white text-black border-black rounded-md border-[2px] h-10"
                />
            </div>
            <div className="flex justify-center pt-3 mt-3">
                <button
                    onClick={signUp}
                    className="w-1/2 border-[2px] rounded-md border-black py-2"
                >
                    Sign Up
                </button>
            </div>
            <div className="flex justify-center items-center pt-3">
                <hr className="flex-grow border-t border-gray-400" />
                <h2 className="mx-4">or sign up with</h2>
                <hr className="flex-grow border-t border-gray-400" />
            </div>
            <div className="pt-3 px-6 flex justify-between">
                <button
                    onClick={signInGoogle}
                    className="flex items-center gap-2 border-[2px] border-red-500 px-4 py-2 text-red-500 w-40 justify-center rounded-md hover:bg-red-300"
                >
                    <img src="/google-icon.svg" alt="google" className="w-8 h-8" />
                    Google
                </button>
                <button
                    onClick={signInGoogle}
                    className="flex items-center gap-2 border-[2px] border-blue-500 px-4 py-2 text-blue-500 w-40 justify-center rounded-md hover:bg-blue-300"
                >
                    <img src="/facebook-icon.svg" alt="facebook" className="w-8 h-8" />
                    Facebook
                </button>
            </div>
            <SuccessModal isVisible={isSucessVisible} onClose={handleSuccessClose}/>
        </div>
    );
};
