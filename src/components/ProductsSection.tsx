"use client";
import ProductCard from "@/components/Ui/ProductCard";
import { useEffect, useState } from "react";

interface Product {
  title: string;
  description: string;
  types: [];
  idealFor: string;
  image: string;
}

export default function ProductsSection() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <section
      id="products"
      className="py-32 bg-leather-ivory min-h-[calc(100vh-80px)] flex items-center"
    >
      <div className="relative text-center mb-24 container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-color)] relative inline-block">
          Our Products
          {/* Green underline */}
          <span className="absolute left-1/2 -translate-x-32 bottom-1 bg-green-400 w-72 h-4 -z-10 rounded-xs" />
        </h2>
        <p className="text-center text-lg mb-16 mt-10 text-leather-charcoal">
          Explore our wide range of premium leather products, crafted with
          precision and care.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {products?.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              types={product.types}
              idealFor={product.idealFor}
              imageUrl={product.image} // optional: only if your ProductCard handles images
            />
          ))}
        </div>
      </div>
    </section>
  );
}
