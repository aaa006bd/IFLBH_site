"use client";
import ProductCard from "@/components/Ui/ProductCard";
import { useEffect, useState } from "react";
import Modal from "./Ui/Modal";
import Heading from "./Ui/Heading";

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
    fetch("/JSON/products.json")
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
      className="pt-32 bg-leather-ivory lg:min-h-[calc(100vh-80px)] flex items-center lg:w-[70%] mx-auto"
    >
      <div
        className="relative text-center mb-24 lg:container mx-auto px-4 md:px-6"
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
      >
        <Heading
          heading="Our Products"
          shortDescription="Explore our wide range of premium leather products, crafted with
          precision and care."
        />

        <div className="grid md:grid-cols-2 gap-8">
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
