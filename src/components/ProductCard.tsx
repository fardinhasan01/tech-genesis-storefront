
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  brand: string;
  rating: number;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="group glass-card border-0 bg-white/5 backdrop-blur-lg overflow-hidden hover:glass-card-hover transition-all duration-500 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Floating Action Buttons */}
        <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
          <Button size="sm" className="w-10 h-10 p-0 glass-button border-white/20">
            <Eye className="h-4 w-4" />
          </Button>
          <Button size="sm" className="w-10 h-10 p-0 glass-button border-white/20">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-gradient-to-r from-blue-500/80 to-cyan-400/80 backdrop-blur-sm rounded-full text-xs font-medium text-white">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm text-gray-400">{product.brand}</span>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-300">{product.rating}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            ${product.price}
          </span>
          
          <Link to={`/product/${product.id}`}>
            <Button className="btn-primary-sm group">
              View Details
              <Eye className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
