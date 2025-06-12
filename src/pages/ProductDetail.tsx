
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Heart, Share2, ShoppingCart, Minus, Plus, Shield, Truck, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data
  const product = {
    id: 1,
    name: "Quantum Smartphone Pro",
    price: 999,
    originalPrice: 1299,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    category: "Smartphones",
    brand: "TechCorp",
    rating: 4.8,
    reviews: 256,
    description: "Revolutionary quantum processing technology with AI-enhanced camera system and neural interface capabilities.",
    specifications: {
      "Processor": "Quantum Core X1",
      "Memory": "16GB LPDDR5",
      "Storage": "512GB UFS 4.0",
      "Display": "6.8\" OLED 120Hz",
      "Camera": "108MP Triple AI",
      "Battery": "5000mAh Fast Charge"
    },
    features: [
      "Quantum processing technology",
      "AI-enhanced camera system",
      "Neural interface compatibility",
      "Holographic display support",
      "Wireless charging",
      "5G connectivity"
    ],
    inStock: true,
    stock: 15
  };

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, Math.min(product.stock, quantity + change)));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <Card className="glass-card border-0 bg-white/5 backdrop-blur-lg overflow-hidden">
              <div className="aspect-square relative group">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <Button size="sm" className="w-10 h-10 p-0 glass-button border-white/20">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="sm" className="w-10 h-10 p-0 glass-button border-white/20">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
            
            {/* Thumbnail Images */}
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <Card 
                  key={index}
                  className={`glass-card border-0 backdrop-blur-lg cursor-pointer overflow-hidden transition-all duration-300 ${
                    selectedImage === index 
                      ? 'border-blue-500 bg-blue-500/20' 
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-20 h-20 object-cover"
                  />
                </Card>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-gradient-to-r from-blue-500/80 to-cyan-400/80 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                  {product.category}
                </span>
                <span className="text-gray-400">{product.brand}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-gray-400'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-white font-medium">{product.rating}</span>
                  <span className="text-gray-400">({product.reviews} reviews)</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                ${product.price}
              </span>
              <span className="text-2xl text-gray-400 line-through">
                ${product.originalPrice}
              </span>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Quantity and Add to Cart */}
            <Card className="glass-card border-0 bg-white/5 backdrop-blur-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-white font-medium">Quantity:</span>
                  <div className="flex items-center gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="glass-button border-white/20"
                      onClick={() => handleQuantityChange(-1)}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center text-white font-medium">{quantity}</span>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="glass-button border-white/20"
                      onClick={() => handleQuantityChange(1)}
                      disabled={quantity >= product.stock}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <span className="text-sm text-gray-400">
                  {product.stock} items in stock
                </span>
              </div>
              
              <Button className="btn-primary w-full py-4 text-lg">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart - ${(product.price * quantity).toLocaleString()}
              </Button>
            </Card>

            {/* Features */}
            <Card className="glass-card border-0 bg-white/5 backdrop-blur-lg p-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-blue-400" />
                  <span className="text-white text-sm">2 Year Warranty</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-green-400" />
                  <span className="text-white text-sm">Free Shipping</span>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw className="h-5 w-5 text-yellow-400" />
                  <span className="text-white text-sm">30 Day Returns</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="glass-tabs mb-8">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="specifications">
              <Card className="glass-card border-0 bg-white/5 backdrop-blur-lg p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-3 border-b border-white/10">
                      <span className="text-gray-300 font-medium">{key}</span>
                      <span className="text-white">{value}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="features">
              <Card className="glass-card border-0 bg-white/5 backdrop-blur-lg p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews">
              <Card className="glass-card border-0 bg-white/5 backdrop-blur-lg p-8">
                <div className="text-center text-gray-400">
                  <p>Reviews functionality coming soon...</p>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
