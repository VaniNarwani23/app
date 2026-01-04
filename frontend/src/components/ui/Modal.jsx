
import React from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl mx-auto border border-gray-700/50">
        <div className="p-4 flex justify-end">
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <X size={20} />
          </button>
        </div>
        <div className="overflow-y-auto max-h-[80vh] p-4 md:p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
