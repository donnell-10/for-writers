import React from "react";
import { Auth } from "../components/auth";

const Login = () => {
    return (
        <div className="bg-violet-400 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md flex items-center justify-between gap-2">
                <Auth />
                <div className="w-1/2">
                    <img src="/login-pic.jpg" alt="login" className="w-[490px] rounded-md" />
                </div>
            </div>
        </div>
    );
};

export default Login;
