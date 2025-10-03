'use client';

import React from 'react';
import { Linkedin, Mail, Globe } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    bio: 'Passionate about language education and cultural exchange, Sarah founded LA Academy to make quality language learning accessible to everyone.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    languages: ['English', 'French', 'Spanish']
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'English Instructor',
    bio: 'With over 8 years of teaching experience, Marcus specializes in making English learning engaging and effective for students of all levels.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    languages: ['English', 'Mandarin']
  },
  {
    id: 3,
    name: 'Isabella Rossi',
    role: 'Italian & Spanish Instructor',
    bio: 'Native Italian speaker with a passion for teaching, Isabella brings authentic language and cultural insights to her classes.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    languages: ['Italian', 'Spanish', 'English']
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Korean & Japanese Instructor',
    bio: 'David combines K-pop culture with language learning to create engaging and modern Korean and Japanese lessons.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    languages: ['Korean', 'Japanese', 'English']
  },
  {
    id: 5,
    name: 'Sophie Martin',
    role: 'French Instructor',
    bio: 'French language expert with a background in linguistics, Sophie creates immersive learning experiences for her students.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    languages: ['French', 'English']
  },
  {
    id: 6,
    name: 'Carlos Rodriguez',
    role: 'Spanish Instructor',
    bio: 'Carlos combines his love for Spanish culture with modern teaching methods to create dynamic and effective lessons.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    languages: ['Spanish', 'English', 'Portuguese']
  }
];

export default function OurTeam() {
  return (
    <div className="min-h-screen bg-dark-900 text-white pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Meet Our Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our passionate team of language experts and educators is dedicated to helping you achieve fluency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="glass-effect rounded-3xl p-6 hover-lift group text-center"
            >
              <div className="relative mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-primary-500/20 group-hover:border-primary-500/40 transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/10 group-hover:to-primary-500/20 transition-all duration-300"></div>
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-primary-400 transition-colors">
                {member.name}
              </h3>
              <div className="text-primary-400 font-semibold mb-4">{member.role}</div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {member.bio}
              </p>
              
              <div className="mb-6">
                <div className="text-sm text-gray-400 mb-3">Languages:</div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.languages.map((lang, index) => (
                    <span 
                      key={index}
                      className="bg-primary-500/20 text-primary-400 px-3 py-1 rounded-full text-sm"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <button className="p-2 bg-primary-500/20 text-primary-400 hover:bg-primary-500/30 rounded-xl transition-all duration-200 hover:scale-110">
                  <Mail className="w-5 h-5" />
                </button>
                <button className="p-2 bg-primary-500/20 text-primary-400 hover:bg-primary-500/30 rounded-xl transition-all duration-200 hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mt-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We strive for the highest quality in every lesson and interaction'
              },
              {
                title: 'Innovation',
                description: 'Constantly evolving our teaching methods with the latest technology'
              },
              {
                title: 'Community',
                description: 'Building a supportive global community of language learners'
              }
            ].map((value, index) => (
              <div key={index} className="glass-effect rounded-3xl p-8 hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}