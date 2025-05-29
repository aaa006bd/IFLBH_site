/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
// components/ProductCard.tsx
import { LuMousePointerClick } from "react-icons/lu";
interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  types?: {
    name: string;
    detail: string;
  }[];
  idealFor?: string;
  imageUrl: string;
  toggleModal?: () => void;
}

export default function ProductCard({
  title,
  description,
  types,
  idealFor,
  imageUrl,
  toggleModal,
}: ProductCardProps) {
  return (
    <div className="bg-white shadow-2xl hover:drop-shadow-2xl hover:scale-[102%] rounded-2xl p-1 mx-auto transition-transform duration-300 ease-in-out group">
      {/* Image on Left */}
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full rounded-xl"
        />
        <div className="absolute bottom-0 left-0 right-0 flex items-center pl-3 rounded-b-xl bg-white opacity-100 group-hover:opacity-90 transition-opacity duration-200 ease-in-out">
          <h3 className="text-xl md:text-2xl font-bold text-leather-brown text-left py-4 ">
            {title}
          </h3>
        </div>

        <div className="absolute top-0 bottom-0 left-0 right-0 rounded-xl py-4 bg-black/60 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
          {/* Content on Right */}
          <div className="h-full flex items-center justify-center">
            <button
              onClick={toggleModal}
              className="flex items-center justify-center gap-3 text-xl text-white hover:text-[#2e0707] border px-6 py-3 rounded-xl bg-[var(--accent-color)]/0 hover:bg-[var(--accent-color)]/100 transition-colors duration-200"
            >
              <span className="-rotate-y-180 text-3xl">
                <LuMousePointerClick />
              </span>
              See details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
