
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ProductCard from '@/components/ProductCard';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: "Latest Tech",
      description: "Cutting-edge gadgets and innovations"
    },
    {
      icon: Shield,
      title: "Secure Shopping",
      description: "Your data is protected with advanced encryption"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable shipping worldwide"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card group hover:glass-card-hover transition-all duration-500 p-8 text-center border-0 bg-white/5 backdrop-blur-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <FeaturedProducts />

      {/* CTA Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto text-center">
        <div className="glass-card p-12 border-0 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 backdrop-blur-lg">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Upgrade Your Tech?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover the latest gadgets and innovations that will transform your digital lifestyle.
          </p>
          <Link to="/products">
            <Button className="btn-primary group">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
