// src/components/Modal.tsx


interface ModalProps {
  show: boolean;
  logoSrc: string;
  title: string;
  imageSrc: string;
  onClose: () => void;
  onConfirm?: () => void;
  enquiryUrl: string; // Added enquiryUrl prop
}

const Modal: React.FC<ModalProps> = ({
  show,
  logoSrc,
  title,
  imageSrc,
  onClose,
  enquiryUrl, // Destructure enquiryUrl
}) => {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50  flex items-center justify-center  bg-opacity-60"
      onClick={onClose}
    >
      <div
        className=" rounded-xl shadow-2xl bg-[#74d1f6] opacity-80 w-3/4 max-w-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-6 border-b  border-gray-200">
          <div className="flex items-center gap-4">
            <img
              src={logoSrc}
              alt="Logo"
              className="h-12 w-auto object-contain"
            />
            <h3 className="text-2xl text-white font-semibold">{title}</h3>
          </div>
        </div>

        {/* Full-width Image */}
        <div className="w-full  object-contain ">
          <img
            src={imageSrc}
            alt="Modal Content"
            className="w-full h-[70vh] px-6 py-6  object-contain"
          />
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-4  bg-[#74d1f6]  px-6 py-4  border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded"
          >
            Close
          </button>
          <a
            href={enquiryUrl}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
          >
          Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
