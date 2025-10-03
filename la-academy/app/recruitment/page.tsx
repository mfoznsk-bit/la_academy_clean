 'use client';

import React, { useState } from 'react';
import { Send, Upload, Clock, MapPin, Users, GraduationCap, DollarSign, Heart } from 'lucide-react';

export default function Recruitment() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    position: '',
    experience: '',
    message: '',
    cv: null as File | null
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, cv: file }));
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.position.trim()) errors.position = 'Position is required';
    if (!formData.experience.trim()) errors.experience = 'Experience level is required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // API integration would go here
      setFormSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        position: '',
        experience: '',
        message: '',
        cv: null
      });
      setTimeout(() => setFormSubmitted(false), 5000);
    }
  };

  const benefits = [
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Work when it suits you best'
    },
    {
      icon: MapPin,
      title: 'Remote Work',
      description: 'Work from anywhere in the world'
    },
    {
      icon: Users,
      title: 'Great Team',
      description: 'Collaborate with passionate educators'
    },
    {
      icon: GraduationCap,
      title: 'Growth Opportunities',
      description: 'Continuous learning and development'
    },
    {
      icon: DollarSign,
      title: 'Competitive Pay',
      description: 'Attractive compensation packages'
    },
    {
      icon: Heart,
      title: 'Positive Impact',
      description: 'Make a difference in students lives'
    }
  ];

  return (
    <div className="min-h-screen bg-dark-900 text-white pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Help us transform language education while enjoying incredible benefits and working with amazing people
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-effect rounded-3xl p-6 hover-lift group text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary-400 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Application Form */}
        <div className="glass-effect rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Apply Now</h2>
          
          {formSubmitted && (
            <div className="bg-green-500/20 border border-green-500/50 text-green-400 rounded-2xl p-4 mb-6 text-center">
              Thank you for your application! We'll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-white/80 mb-2 font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full bg-dark-800 border ${
                    formErrors.fullName ? 'border-red-500' : 'border-gray-600'
                  } rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors duration-200`}
                  placeholder="Enter your full name"
                />
                {formErrors.fullName && (
                  <p className="text-red-400 text-sm mt-1">{formErrors.fullName}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-white/80 mb-2 font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full bg-dark-800 border ${
                    formErrors.email ? 'border-red-500' : 'border-gray-600'
                  } rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors duration-200`}
                  placeholder="Enter your email address"
                />
                {formErrors.email && (
                  <p className="text-red-400 text-sm mt-1">{formErrors.email}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="position" className="block text-white/80 mb-2 font-medium">
                  Position *
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className={`w-full bg-dark-800 border ${
                    formErrors.position ? 'border-red-500' : 'border-gray-600'
                  } rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors duration-200`}
                >
                  <option value="">Select a position</option>
                  <option value="Language Instructor">Language Instructor</option>
                  <option value="Curriculum Developer">Curriculum Developer</option>
                  <option value="Student Support">Student Support</option>
                  <option value="Marketing Specialist">Marketing Specialist</option>
                  <option value="Other">Other</option>
                </select>
                {formErrors.position && (
                  <p className="text-red-400 text-sm mt-1">{formErrors.position}</p>
                )}
              </div>

              <div>
                <label htmlFor="experience" className="block text-white/80 mb-2 font-medium">
                  Experience Level *
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className={`w-full bg-dark-800 border ${
                    formErrors.experience ? 'border-red-500' : 'border-gray-600'
                  } rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors duration-200`}
                >
                  <option value="">Select experience level</option>
                  <option value="Beginner">Beginner (0-2 years)</option>
                  <option value="Intermediate">Intermediate (2-5 years)</option>
                  <option value="Expert">Expert (5+ years)</option>
                </select>
                {formErrors.experience && (
                  <p className="text-red-400 text-sm mt-1">{formErrors.experience}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="cv" className="block text-white/80 mb-2 font-medium">
                CV / Resume
              </label>
              <div className="flex items-center gap-4">
                <label className="flex-1 cursor-pointer">
                  <input
                    type="file"
                    id="cv"
                    name="cv"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />
                  <div className="w-full bg-dark-800 border border-gray-600 hover:border-primary-500 rounded-2xl px-4 py-3 text-white/80 transition-colors duration-200 flex items-center justify-between">
                    <span>
                      {formData.cv ? formData.cv.name : 'Choose file'}
                    </span>
                    <Upload className="w-5 h-5" />
                  </div>
                </label>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                Accepted formats: PDF, DOC, DOCX (Max 5MB)
              </p>
            </div>

            <div>
              <label htmlFor="message" className="block text-white/80 mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full bg-dark-800 border border-gray-600 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors duration-200"
                placeholder="Tell us why you're interested in joining our team..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
            >
              Submit Application
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}