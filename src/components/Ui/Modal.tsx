/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

interface ModalProps {
  closeModal: () => void;
  modalState: boolean;
  product: {
    id: number;
    title: string;
    description: string;
    types?: {
      name: string;
      detail: string;
    }[];
    idealFor: string;
    image: string;
  };
}

const Modal = ({ closeModal, modalState, product }: ModalProps) => {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";

    // Cleanup on unmount: restore body scroll
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-black/40 z-50 flex items-center justify-center backdrop-blur-lg ${
        modalState
          ? "animate__animated animate__fadeIn animate__faster"
          : "animate__animated animate__fadeOut"
      }`}
    >
      <div className="w-full md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto h-[80vh] overflow-auto bg-[var(--accent-secondary-color)] rounded-lg relative">
        <div className="">
          {/* Text body */}
          <div className="p-6">
            {" "}
            {/* Header & Close btn */}
            <div className="flex items-center justify-between w-full">
              <h3 className="text-2xl font-extrabold text-[#774018] border-b-2 ">
                {product.title}
              </h3>
              <button
                onClick={closeModal}
                className="text-4xl text-rose-700 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 hover:text-rose-500 active:scale-95 cursor-pointer"
              >
                <IoCloseCircleOutline />
              </button>
            </div>
            <div className="w-full">
              <p className="mt-4 mb-6 font-semibold text-[#a16941] text-lg">
                {product.description}
              </p>
              <ul className="space-y-2 mb-4 list-disc pl-5">
                {product.types?.map((type, index) => (
                  <li key={index} className=" gap-2">
                    <span className="font-semibold text-leather-brown text-xl">
                      {type.name}:
                    </span>{" "}
                    <p className="text-lg">{type.detail}</p>
                  </li>
                ))}
              </ul>

              {product?.idealFor?.length > 0 && (
                <p className="mt-2 text-gray-600">
                  <span className="font-semibold text-gray-800">
                    Ideal For :
                  </span>{" "}
                  {product.idealFor}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
