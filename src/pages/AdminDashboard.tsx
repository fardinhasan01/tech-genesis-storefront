
import React, { useState } from 'react';
import { BarChart3, Package, ShoppingCart, Users, Settings, Plus, Edit, Trash2, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const AdminDashboard = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Quantum Smartphone Pro",
      price: 999,
      stock: 15,
      category: "Smartphones",
      status: "Active"
    },
    {
      id: 2,
      name: "Neural VR Headset",
      price: 799,
      stock: 8,
      category: "VR",
      status: "Active"
    }
  ]);

  const stats = [
    {
      title: "Total Revenue",
      value: "$124,500",
      icon: BarChart3,
      color: "from-green-500 to-emerald-400"
    },
    {
      title: "Products",
      value: "247",
      icon: Package,
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Orders",
      value: "1,234",
      icon: ShoppingCart,
      color: "from-purple-500 to-pink-400"
    },
    {
      title: "Customers",
      value: "5,678",
      icon: Users,
      color: "from-orange-500 to-red-400"
    }
  ];

  const recentOrders = [
    {
      id: "#ORD-001",
      customer: "John Doe",
      product: "Quantum Smartphone Pro",
      amount: "$999",
      status: "Shipped",
      date: "2024-06-12"
    },
    {
      id: "#ORD-002",
      customer: "Jane Smith",
      product: "Neural VR Headset",
      amount: "$799",
      status: "Processing",
      date: "2024-06-12"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              Admin <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Dashboard</span>
            </h1>
            <p className="text-gray-300">Manage your AB GADGETS store</p>
          </div>
          <Button className="btn-primary">
            <Settings className="mr-2 h-5 w-5" />
            Settings
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card border-0 bg-white/5 backdrop-blur-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{stat.title}</p>
                  <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                </div>
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="products" className="w-full">
          <TabsList className="glass-tabs mb-8">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
          </TabsList>

          {/* Products Tab */}
          <TabsContent value="products">
            <Card className="glass-card border-0 bg-white/5 backdrop-blur-lg">
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">Products</h2>
                  <Button className="btn-primary">
                    <Plus className="mr-2 h-5 w-5" />
                    Add Product
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left text-gray-300 pb-4">Product</th>
                        <th className="text-left text-gray-300 pb-4">Price</th>
                        <th className="text-left text-gray-300 pb-4">Stock</th>
                        <th className="text-left text-gray-300 pb-4">Category</th>
                        <th className="text-left text-gray-300 pb-4">Status</th>
                        <th className="text-left text-gray-300 pb-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product.id} className="border-b border-white/5">
                          <td className="py-4 text-white font-medium">{product.name}</td>
                          <td className="py-4 text-white">${product.price}</td>
                          <td className="py-4 text-white">{product.stock}</td>
                          <td className="py-4 text-gray-300">{product.category}</td>
                          <td className="py-4">
                            <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                              {product.status}
                            </span>
                          </td>
                          <td className="py-4">
                            <div className="flex gap-2">
                              <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="ghost" className="text-yellow-400 hover:text-yellow-300">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <Card className="glass-card border-0 bg-white/5 backdrop-blur-lg">
              <div className="p-6 border-b border-white/10">
                <h2 className="text-2xl font-bold text-white">Recent Orders</h2>
              </div>
              
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left text-gray-300 pb-4">Order ID</th>
                        <th className="text-left text-gray-300 pb-4">Customer</th>
                        <th className="text-left text-gray-300 pb-4">Product</th>
                        <th className="text-left text-gray-300 pb-4">Amount</th>
                        <th className="text-left text-gray-300 pb-4">Status</th>
                        <th className="text-left text-gray-300 pb-4">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order) => (
                        <tr key={order.id} className="border-b border-white/5">
                          <td className="py-4 text-blue-400 font-mono">{order.id}</td>
                          <td className="py-4 text-white">{order.customer}</td>
                          <td className="py-4 text-white">{order.product}</td>
                          <td className="py-4 text-white font-medium">{order.amount}</td>
                          <td className="py-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              order.status === 'Shipped' 
                                ? 'bg-green-500/20 text-green-400' 
                                : 'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="py-4 text-gray-300">{order.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Customers Tab */}
          <TabsContent value="customers">
            <Card className="glass-card border-0 bg-white/5 backdrop-blur-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Customer Management</h2>
              <p className="text-gray-300">Customer management features coming soon...</p>
            </Card>
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content">
            <Card className="glass-card border-0 bg-white/5 backdrop-blur-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Content Management</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">Homepage Banner</label>
                  <Textarea 
                    placeholder="Update homepage banner content..."
                    className="glass-input border-white/20 focus:border-blue-400"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Featured Product</label>
                  <Input 
                    placeholder="Featured product ID"
                    className="glass-input border-white/20 focus:border-blue-400"
                  />
                </div>
                
                <Button className="btn-primary">
                  Update Content
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
