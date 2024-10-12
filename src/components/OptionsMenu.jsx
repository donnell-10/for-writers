import React, { useState } from "react";
import { MoreVertical } from "lucide-react";

export default function OptionMenu({ options }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="relative">
            <div 
                tabIndex={0} 
                role="button" 
                
                onClick={toggleMenu} 
            >
                <MoreVertical size={20} className="text-gray-600" />
            </div>
            {isOpen && (
                <ul 
                    className="absolute right-0 bg-base-100 rounded-box z-10 w-52 p-2 shadow"
                >
                    {options.map((option, index) => (
                        <li key={index}>
                            <button 
                                onClick={() => {
                                    option.action();
                                    setIsOpen(false); 
                                }} 
                                className="text-left w-full"
                            >
                                {option.label}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
