
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-cyan-900/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMEQ0RkYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] animate-pulse"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-bounce delay-300"></div>
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-green-400 rounded-full animate-bounce delay-500"></div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8">
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 backdrop-blur-lg rounded-full text-blue-300 text-sm font-medium border border-blue-500/30 mb-6">
            ✨ Welcome to the Future of Tech
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-green-400 bg-clip-text text-transparent">
            AB GADGETS
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover cutting-edge technology and innovative gadgets that shape the future. 
          Experience the next generation of digital lifestyle.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/products">
            <Button className="btn-primary group px-8 py-4 text-lg">
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          
          <Button 
            variant="outline" 
            className="glass-button px-8 py-4 text-lg group border-blue-500/30 hover:border-blue-400"
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Watch Demo
          </Button>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-400">Products</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">50K+</div>
            <div className="text-gray-400">Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">99%</div>
            <div className="text-gray-400">Satisfaction</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;
