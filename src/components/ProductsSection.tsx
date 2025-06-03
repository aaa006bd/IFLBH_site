"use client";
import ProductCard from "@/components/Ui/ProductCard";
import { useEffect, useState } from "react";
import Modal from "./Ui/Modal";

interface Product {
  id: number;
  title: string;
  description: string;
  types: [];
  idealFor: string;
  image: string;
}

export default function ProductsSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [modal, setModal] = useState<boolean | undefined>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleToggleModal = (product: Product) => {
    setSelectedProduct(product);
    setModal(true);
  };

  return (
    <section
      id="products"
      className="lg:pt-32 bg-leather-ivory min-h-[calc(100vh-80px)] flex items-center lg:w-[70%] mx-auto"
    >
      <div
        className="relative text-center mb-24 container mx-auto px-4 md:px-6"
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-stone-800 relative inline-block underline">
          Our Products
        </h2>
        <p className="text-center text-md md:text-xl text-stone-600 mb-8 md:mb-16 mt-5 md:mt-10">
          Explore our wide range of premium leather products, crafted with
          precision and care.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {products?.map((product, index) => (
            <ProductCard
              key={index}
              id={product.id}
              title={product.title}
              description={product.description}
              idealFor={product.idealFor}
              imageUrl={product.image}
              toggleModal={() => handleToggleModal(product)}
            />
          ))}
        </div>
      </div>
      {modal && selectedProduct && (
        <Modal
          closeModal={() => setModal(false)}
          modalState={modal}
          product={selectedProduct}
        />
      )}
    </section>
  );
}
