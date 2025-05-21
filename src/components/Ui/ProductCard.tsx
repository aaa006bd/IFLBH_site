/* eslint-disable @next/next/no-img-element */
// components/ProductCard.tsx
interface ProductCardProps {
  title: string;
  description: string;
  types: {
    name: string;
    detail: string;
  }[];
  idealFor?: string;
  imageUrl: string;
}

export default function ProductCard({
  title,
  description,
  types,
  idealFor,
  imageUrl,
}: ProductCardProps) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 md:p-6 w-full max-w-4xl mx-auto hover:shadow-xl transition flex flex-col md:flex-row gap-4">
      {/* Image on Left */}
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full rounded-xl"
        />
      </div>

      {/* Content on Right */}
      <div className="flex flex-col justify-between w-full md:w-1/2">
        <div>
          <h3 className="text-xl font-bold mb-3 text-leather-brown">{title}</h3>
          <p className="mb-4 text-gray-700">{description}</p>

          <ul className="space-y-2 mb-4">
            {types.map((type, index) => (
              <li key={index}>
                <span className="font-medium text-leather-brown">
                  {type.name}:
                </span>{" "}
                {type.detail}
              </li>
            ))}
          </ul>
        </div>

        {idealFor && (
          <p className="text-sm text-gray-600 italic mt-auto">
            Ideal for: {idealFor}
          </p>
        )}
      </div>
    </div>
  );
}
