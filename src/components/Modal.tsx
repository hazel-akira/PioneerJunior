// src/components/Modal.tsx
import React from "react";

interface ModalProps {
  show: boolean;
  logoSrc: string;
  title: string;
  imageSrc: string;
  onClose: () => void;
  onConfirm?: () => void;
  enquiryUrl: string;
}

const Modal: React.FC<ModalProps> = ({
  show,
  logoSrc,
  title,
  imageSrc,
  onClose,
  enquiryUrl,
}) => {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        className="rounded-xl shadow-2xl bg-white max-w-xl w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-6 border-b border-gray-300">
          <div className="flex items-center gap-4">
            <img
              src={logoSrc}
              alt="Logo"
              className="h-12 w-auto object-contain"
            />
            <h3 className="text-2xl text-black font-semibold">{title}</h3>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-70 object-cover"
          />
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-4 bg-white px-6 py-4 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gray-900 hover:bg-gray-700 text-white rounded"
          >
            Close
          </button>
          <a
            href={enquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-[#74d1f6] hover:bg-[#df8811] text-white rounded"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
