
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Quantum Smartphone Pro",
      price: 999,
      image: "/placeholder.svg",
      category: "Smartphones",
      brand: "TechCorp",
      rating: 4.8,
      description: "Revolutionary quantum processing technology"
    },
    {
      id: 2,
      name: "Neural VR Headset",
      price: 799,
      image: "/placeholder.svg",
      category: "VR",
      brand: "VirtueX",
      rating: 4.9,
      description: "Immersive virtual reality experience"
    },
    {
      id: 3,
      name: "AI Smart Watch Ultra",
      price: 599,
      image: "/placeholder.svg",
      category: "Wearables",
      brand: "SmartTech",
      rating: 4.7,
      description: "Advanced health monitoring and AI assistant"
    },
    {
      id: 4,
      name: "Holographic Display",
      price: 1299,
      image: "/placeholder.svg",
      category: "Displays",
      brand: "HoloTech",
      rating: 4.6,
      description: "3D holographic projection technology"
    }
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Featured <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Products</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Discover our handpicked selection of cutting-edge technology and innovative gadgets
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="text-center">
        <Link to="/products">
          <Button className="btn-primary group px-8 py-4">
            View All Products
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProducts;
