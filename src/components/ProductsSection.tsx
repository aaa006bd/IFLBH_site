/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Full Grain Leather",
    description: "The highest quality leather with all natural grain intact.",
    image:
      "https://images.unsplash.com/photo-1561455732-c92d53af40d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Raw Materials",
  },
  {
    id: 2,
    name: "Top Grain Leather",
    description: "Sanded to remove imperfections, durable and consistent.",
    image:
      "https://images.unsplash.com/photo-1606577924006-27d39b132ae2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Raw Materials",
  },
  {
    id: 3,
    name: "Genuine Leather Hides",
    description: "Split leather with applied surface treatment.",
    image:
      "https://images.unsplash.com/photo-1565193566173-7a0d3e8259f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Raw Materials",
  },
  {
    id: 4,
    name: "Nubuck Leather",
    description:
      "Top-grain cattle leather that has been sanded or buffed on the grain side.",
    image:
      "https://images.unsplash.com/photo-1531911120215-9f628dc6e9fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Specialty",
  },
  {
    id: 5,
    name: "Suede Leather",
    description:
      "Softer, less durable type from the underside of the animal hide.",
    image:
      "https://images.unsplash.com/photo-1531911120215-9f628dc6e9fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Specialty",
  },
  {
    id: 6,
    name: "Aniline Leather",
    description:
      "Premium leather dyed exclusively with soluble dyes to show natural surface.",
    image:
      "https://images.unsplash.com/photo-1598225176511-c27f92296de9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Specialty",
  },
];

const categories = [
  "All",
  ...Array.from(new Set(products.map((p) => p.category))),
];

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-20 md:py-32 bg-leather-charcoal">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-leather-ivory mb-4">
            Our Leather Products
          </h2>
          <div className="w-20 h-1 bg-leather-tan mx-auto"></div>
          <p className="mt-6 text-leather-tan/80 text-lg max-w-2xl mx-auto">
            Explore our range of high-quality leather products, ethically
            sourced and expertly processed for your specific needs.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-leather-tan text-leather-brown"
                  : "bg-transparent text-leather-ivory border border-leather-tan/30 hover:border-leather-tan"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="relative overflow-hidden rounded-lg shadow-lg bg-leather-brown/20 hover-scale"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-leather-brown/90 to-transparent transition-opacity duration-300 ${
                    hoveredId === product.id ? "opacity-100" : "opacity-70"
                  }`}
                ></div>
              </div>
              <div className="p-6 relative">
                <h3 className="text-xl font-semibold text-leather-ivory mb-2">
                  {product.name}
                </h3>
                <p className="text-leather-ivory/80">{product.description}</p>
                <span className="absolute top-6 right-6 text-xs px-3 py-1 bg-leather-tan text-leather-brown rounded-full">
                  {product.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
