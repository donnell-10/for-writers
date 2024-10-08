import React from 'react';

export const SuccessModal = ({ isVisible, onClose }) => {
    if (!isVisible) return null; // Don't render the modal if it's not visible

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
                <h1 className="text-2xl font-bold mb-4">Account Created Successfully!</h1>
                <p className="mb-6">Your account has been created. You can now proceed to the homepage.</p>
                <button
                    onClick={onClose}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    Continue
                </button>
            </div>
        </div>
    );
};
