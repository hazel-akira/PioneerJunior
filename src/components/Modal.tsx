// src/components/Modal.tsx
import React from "react";

interface ModalProps {
  show: boolean;
  imageSrc: string;
  onClose: () => void;
  enquiryUrl: string;
}

const Modal: React.FC<ModalProps> = ({ show, imageSrc, onClose, enquiryUrl }) => {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <img
          src={imageSrc}
          alt="Popup"
          className="w-full h-auto object-cover"
        />

        {/* Overlay Buttons */}
        <div className="absolute bottom-4 right-4 flex gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-900/80 hover:bg-gray-700 text-white rounded-lg"
          >
            Close
          </button>
          <a
            href={enquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[black] hover:bg-[#df8811] text-white rounded-lg"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
