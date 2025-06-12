
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "support@abgadgets.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Tech Street, Silicon Valley, CA 94000",
      description: "Our headquarters"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get in <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Have questions about our products or need support? We're here to help! 
            Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Contact Information
              </h2>
              <p className="text-gray-300 mb-8">
                We're always ready to help and answer any questions you might have.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <Card key={index} className="glass-card group hover:glass-card-hover transition-all duration-500 p-6 border-0 bg-white/5 backdrop-blur-lg">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                    <p className="text-blue-400 font-medium mb-1">{info.details}</p>
                    <p className="text-gray-400 text-sm">{info.description}</p>
                  </div>
                </div>
              </Card>
            ))}

            {/* Business Hours */}
            <Card className="glass-card border-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 backdrop-blur-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">Business Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-white">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-white">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass-card border-0 bg-white/5 backdrop-blur-lg p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Send us a Message</h2>
                <p className="text-gray-300">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="glass-input border-white/20 focus:border-blue-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="glass-input border-white/20 focus:border-blue-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="glass-input border-white/20 focus:border-blue-400"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="glass-input border-white/20 focus:border-blue-400 min-h-32"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <Button type="submit" className="btn-primary w-full py-4 text-lg group">
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-gray-300">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What's your return policy?",
                answer: "We offer a 30-day return policy for all products in original condition."
              },
              {
                question: "Do you ship internationally?",
                answer: "Yes, we ship to over 50 countries worldwide with tracking included."
              },
              {
                question: "How can I track my order?",
                answer: "You'll receive a tracking number via email once your order ships."
              },
              {
                question: "Do you offer warranty?",
                answer: "All products come with manufacturer warranty plus our extended protection."
              }
            ].map((faq, index) => (
              <Card key={index} className="glass-card border-0 bg-white/5 backdrop-blur-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
