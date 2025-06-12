
import React, { useState } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import ProductCard from '@/components/ProductCard';

const Products = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Smartphones', 'Laptops', 'Wearables', 'Audio', 'Gaming', 'Smart Home'];
  const priceRanges = ['All', 'Under $100', '$100-$500', '$500-$1000', 'Over $1000'];

  const products = [
    {
      id: 1,
      name: "Quantum Smartphone Pro",
      price: 999,
      image: "/placeholder.svg",
      category: "Smartphones",
      brand: "TechCorp",
      rating: 4.8,
      description: "Revolutionary quantum processing technology with AI-enhanced camera system"
    },
    {
      id: 2,
      name: "Neural VR Headset",
      price: 799,
      image: "/placeholder.svg",
      category: "VR",
      brand: "VirtueX",
      rating: 4.9,
      description: "Immersive virtual reality experience with neural interface technology"
    },
    {
      id: 3,
      name: "AI Smart Watch Ultra",
      price: 599,
      image: "/placeholder.svg",
      category: "Wearables",
      brand: "SmartTech",
      rating: 4.7,
      description: "Advanced health monitoring with AI-powered insights and predictions"
    },
    {
      id: 4,
      name: "Holographic Display 4K",
      price: 1299,
      image: "/placeholder.svg",
      category: "Displays",
      brand: "HoloTech",
      rating: 4.6,
      description: "Revolutionary 3D holographic projection display technology"
    },
    {
      id: 5,
      name: "Wireless Gaming Console",
      price: 499,
      image: "/placeholder.svg",
      category: "Gaming",
      brand: "GameTech",
      rating: 4.8,
      description: "Next-gen gaming console with wireless streaming capabilities"
    },
    {
      id: 6,
      name: "Smart Home Hub Pro",
      price: 299,
      image: "/placeholder.svg",
      category: "Smart Home",
      brand: "HomeTech",
      rating: 4.5,
      description: "Central control hub for all your smart home devices"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Products</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our comprehensive collection of cutting-edge technology and innovative gadgets
          </p>
        </div>

        {/* Filters and Search */}
        <Card className="glass-card border-0 bg-white/5 backdrop-blur-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 glass-input border-white/20 focus:border-blue-400"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40 glass-input border-white/20">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="glass-dropdown">
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase()}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-40 glass-input border-white/20">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent className="glass-dropdown">
                  {priceRanges.map((range) => (
                    <SelectItem key={range} value={range.toLowerCase()}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 bg-white/10 rounded-lg p-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={viewMode === 'grid' ? 'btn-primary-sm' : 'text-gray-400 hover:text-white'}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' ? 'btn-primary-sm' : 'text-gray-400 hover:text-white'}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Products Grid */}
        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1 lg:grid-cols-2'
        }`}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button className="btn-primary px-8 py-3">
            Load More Products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
