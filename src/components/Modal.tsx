// src/components/Modal.tsx
import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

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

        {/* X Icon (mobile only) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:hidden p-2 bg-black hover:bg-gray-700 text-white rounded-lg"
          aria-label="Close"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>

        {/* Bottom Overlay Buttons */}
        <div className="absolute bottom-4 right-4 flex gap-3">
          {/* Text button for desktop */}
          <button
            onClick={onClose}
            className="hidden sm:block px-4 py-2 bg-gray-900/80 hover:bg-gray-700 text-white rounded-lg"
          >
            Close
          </button>

          {/* Apply Button */}
          <a
            href={enquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-black hover:bg-[#df8811] text-white rounded-lg"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
