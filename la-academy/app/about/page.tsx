'use client';

import React from 'react';
import { BookOpen, Users, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-dark-900 text-white pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About LA Academy</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming language education through innovation, passion, and cultural exchange
          </p>
        </div>

        {/* Story Section */}
        <div className="glass-effect rounded-3xl p-8 mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Our Story"
                className="w-full rounded-2xl hover-lift"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Founded in 2020, LA Academy emerged from a simple yet powerful vision: to make quality language 
                education accessible to everyone, everywhere. We believe that learning a new language opens doors 
                to new cultures, opportunities, and connections that can transform lives.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                What started as a small team of passionate language educators has grown into a global community 
                of thousands of students and instructors, united by the love of languages and cultural exchange.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="glass-effect rounded-3xl p-8 hover-lift">
            <Target className="w-12 h-12 text-primary-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To break down language barriers and connect people across cultures through innovative, 
              accessible, and effective language education that empowers personal and professional growth.
            </p>
          </div>
          <div className="glass-effect rounded-3xl p-8 hover-lift">
            <Award className="w-12 h-12 text-primary-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              A world where anyone can learn any language, where cultural understanding bridges divides, 
              and where language learning is an enjoyable, transformative journey for all.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="glass-effect rounded-3xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10,000+', label: 'Students Worldwide' },
              { number: '15+', label: 'Languages Offered' },
              { number: '50+', label: 'Expert Instructors' },
              { number: '98%', label: 'Success Rate' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* What We Offer */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'Comprehensive Courses',
                description: 'Structured learning paths from beginner to advanced levels'
              },
              {
                icon: Users,
                title: 'Speaking Clubs',
                description: 'Regular practice sessions with native speakers and peers'
              },
              {
                icon: Award,
                title: 'Certification',
                description: 'Recognized certificates upon course completion'
              }
            ].map((item, index) => (
              <div key={index} className="glass-effect rounded-3xl p-8 hover-lift">
                <item.icon className="w-12 h-12 text-primary-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}