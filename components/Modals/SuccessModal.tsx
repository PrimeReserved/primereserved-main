// components/SuccessModal.tsx

import React from 'react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string; // Message prop for success or error message
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  const isError = message.startsWith('Failed');

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-sm">
          <div className="relative bg-white rounded-lg shadow-lg p-8 w-96 max-h-96 overflow-y-auto">
            <button
              className="absolute top-0 right-0 p-2"
              onClick={onClose}
            >
              <svg
                className="w-6 h-6 text-gray-500 hover:text-gray-700"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            {isError ? (

            <h2 className="text-3xl font-bold mb-4 text-center text-red-600">Error</h2>
            ) : (
              <h2 className="text-3xl font-bold mb-4 text-center text-green-600">Success!</h2>
            )}
            <p className="text-gray-700 text-lg text-center">{message}</p>
          </div>
        </div>
      )}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
      )}
      <style jsx>{`
        .backdrop-filter {
          backdrop-filter: blur(10px);
        }
      `}</style>
    </>
  );
};

export default SuccessModal;
