import React from "react";
import { Auth2} from "../components/auth2";

const Register = () => {
    return (
        <div className="bg-violet-400 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md flex items-center justify-between gap-2 w-11/12">
                <Auth2/>
                <div className="w-1/2">
                    <img src="/login-pic.jpg" alt="login" className="w-[490px] rounded-md" />
                </div>
            </div>
        </div>
    );
}

export default Register