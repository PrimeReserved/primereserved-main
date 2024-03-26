import React from "react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="rounded bg-white p-8 shadow-lg">
            <h2 className="mb-4 text-lg font-semibold">Success!</h2>
            <p>Your message has been successfully submitted.</p>
            <button
              onClick={onClose}
              className="mt-4 rounded bg-primary px-4 py-2 font-semibold text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SuccessModal;
