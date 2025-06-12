
import React from 'react';
import { Zap, Users, Globe, Award, Target, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Zap,
      title: "Innovation First",
      description: "We constantly push the boundaries of technology to bring you the latest innovations."
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "Your satisfaction and success are at the heart of everything we do."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving customers worldwide with reliable shipping and support."
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Every product undergoes rigorous testing to meet our high standards."
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "500+", label: "Products" },
    { number: "50+", label: "Countries" },
    { number: "99%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">AB GADGETS</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            We're passionate about bringing cutting-edge technology to everyone. Founded with a vision to make 
            the latest gadgets accessible, we've been at the forefront of the tech revolution since day one.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To democratize access to cutting-edge technology and empower individuals and businesses 
                to thrive in the digital age. We believe that everyone should have access to the tools 
                that can transform their lives and work.
              </p>
              <div className="flex items-center gap-4">
                <Target className="h-8 w-8 text-blue-400" />
                <span className="text-white font-medium">Empowering through technology</span>
              </div>
            </div>
            <Card className="glass-card border-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 backdrop-blur-lg p-8">
              <div className="text-center">
                <Heart className="h-16 w-16 text-red-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Built with Passion</h3>
                <p className="text-gray-300">
                  Every product we offer is carefully selected and tested by our team of tech enthusiasts 
                  who understand what makes technology truly exceptional.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide us in everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="glass-card group hover:glass-card-hover transition-all duration-500 p-8 text-center border-0 bg-white/5 backdrop-blur-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Card className="glass-card border-0 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 backdrop-blur-lg p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Meet Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            The passionate individuals behind AB GADGETS who work tirelessly to bring you the best in technology.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <Card key={index} className="glass-card group hover:glass-card-hover transition-all duration-500 border-0 bg-white/5 backdrop-blur-lg overflow-hidden">
                <div className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">AB</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Team Member {index + 1}</h3>
                  <p className="text-blue-400 mb-4">Tech Specialist</p>
                  <p className="text-gray-300 text-sm">
                    Passionate about bringing the latest technology innovations to our customers.
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
