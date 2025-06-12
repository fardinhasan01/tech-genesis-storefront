
import React, { useState } from 'react';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Quantum Smartphone Pro",
      price: 999,
      quantity: 1,
      image: "/placeholder.svg",
      brand: "TechCorp"
    },
    {
      id: 2,
      name: "Neural VR Headset",
      price: 799,
      quantity: 2,
      image: "/placeholder.svg",
      brand: "VirtueX"
    }
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 50;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-20">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <ShoppingBag className="w-24 h-24 text-gray-400 mx-auto mb-8" />
          <h1 className="text-4xl font-bold text-white mb-4">Your Cart is Empty</h1>
          <p className="text-xl text-gray-300 mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link to="/products">
            <Button className="btn-primary">
              Start Shopping
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">
          Shopping <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Cart</span>
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="glass-card border-0 bg-white/5 backdrop-blur-lg p-6">
                <div className="flex gap-6">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                        <p className="text-gray-400">{item.brand}</p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="glass-button border-white/20 w-8 h-8 p-0"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center text-white font-medium">{item.quantity}</span>
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="glass-button border-white/20 w-8 h-8 p-0"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                          ${(item.price * item.quantity).toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-400">
                          ${item.price} each
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="glass-card border-0 bg-white/5 backdrop-blur-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Shipping</span>
                  <span>${shipping}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <hr className="border-white/20" />
                <div className="flex justify-between text-xl font-bold">
                  <span className="text-white">Total</span>
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-6">
                <label className="block text-white font-medium mb-2">Promo Code</label>
                <div className="flex gap-2">
                  <Input 
                    placeholder="Enter code"
                    className="glass-input border-white/20 focus:border-blue-400"
                  />
                  <Button variant="outline" className="glass-button border-white/20">
                    Apply
                  </Button>
                </div>
              </div>

              <Button className="btn-primary w-full py-4 text-lg mb-4">
                Proceed to Checkout
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Link to="/products">
                <Button variant="outline" className="glass-button border-white/20 w-full">
                  Continue Shopping
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
