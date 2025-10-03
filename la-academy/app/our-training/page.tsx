'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Users, Calendar, Star, Search, Filter } from 'lucide-react';

// Extended program data with 25+ programs
const allPrograms = [
  {
    id: 1,
    level: 'Beginner',
    language: 'English',
    title: 'English Fundamentals A1',
    description: 'Start your English journey with basic vocabulary and grammar.',
    fullDescription: 'Comprehensive beginner course covering essential English grammar, vocabulary, pronunciation, and basic conversation skills. Perfect for absolute beginners.',
    image: 'https://media.istockphoto.com/id/524055319/photo/flag-of-the-united-states.webp?a=1&b=1&s=612x612&w=0&k=20&c=StdwRZzTb1sHH8D-QApZHADr-z-m4W4HRgDFTRfSk9Y=',
    duration: '8 weeks',
    schedule: 'Mon & Wed, 6:00 PM - 7:30 PM',
    price: '$299',
    students: '2.5k+',
    rating: '4.8',
    intensity: 'Standard'
  },
  {
    id: 2,
    level: 'Intermediate',
    language: 'Spanish',
    title: 'Spanish Conversation B1',
    description: 'Build fluency with complex grammar and real-world conversation.',
    fullDescription: 'Intermediate Spanish course focusing on conversation skills, advanced grammar, and cultural immersion. Perfect for those with basic Spanish knowledge.',
    image: 'https://media.istockphoto.com/id/184138090/photo/the-national-flag-of-the-country-of-spain.webp?a=1&b=1&s=612x612&w=0&k=20&c=eKsmDvVIShQSoNWIrxckDz8Neb8VIjAm4-zjdr7jl7Q=',
    duration: '10 weeks',
    schedule: 'Tue & Thu, 7:00 PM - 8:30 PM',
    price: '$349',
    students: '1.8k+',
    rating: '4.9',
    intensity: 'Standard'
  },
  // Add 23 more programs with different languages and levels...
  {
    id: 3,
    level: 'Advanced',
    language: 'French',
    title: 'Advanced French C1',
    description: 'Master fluent communication with native-level expressions.',
    image: 'https://media.istockphoto.com/id/1798441432/photo/flag-of-france.webp?a=1&b=1&s=612x612&w=0&k=20&c=ym7URhCYyBOQ7GQNllIe63BoEYD1UIDr-axwXI2N4Pc=',
    duration: '12 weeks',
    schedule: 'Mon & Wed, 8:00 PM - 9:30 PM',
    price: '$399',
    students: '1.2k+',
    rating: '4.7',
    intensity: 'Intensive'
  },
  {
    id: 4,
    level: 'Beginner',
    language: 'German',
    title: 'German Basics A1',
    description: 'Learn German from scratch with focus on grammar.',
    image: 'https://media.istockphoto.com/id/184151928/photo/majestic-glossy-german-flag.webp?a=1&b=1&s=612x612&w=0&k=20&c=lzE2FAKP3S7xVpQ0HU_ieb2iIqem_BxNqCFIf0nOQYs=',
    duration: '8 weeks',
    schedule: 'Tue & Thu, 6:30 PM - 8:00 PM',
    price: '$299',
    students: '1.5k+',
    rating: '4.6',
    intensity: 'Standard'
  },
  {
    id: 5,
    level: 'Kids',
    language: 'English',
    title: 'English for Kids (6-12)',
    description: 'Fun and engaging English lessons for young learners.',
    image: 'https://media.istockphoto.com/id/1329915354/photo/concept-of-speaking-foreign-international-language.webp?a=1&b=1&s=612x612&w=0&k=20&c=jb0BdtMMnBDwoJaDSt4PxYgNBH2nYNYyAb3MdHdmKHc=',
    duration: '12 weeks',
    schedule: 'Sat & Sun, 10:00 AM - 11:30 AM',
    price: '$249',
    students: '3.2k+',
    rating: '4.9',
    intensity: 'Light'
  },
  {
    id: 6,
    level: 'Speaking Club',
    language: 'French',
    title: 'French Speaking Club',
    description: 'Practice conversational French in relaxed environment.',
    image: 'https://media.istockphoto.com/id/1300958022/photo/parlez-vous-francais-and-oui-two-speech-bubbles-on-wooden-shelf.webp?a=1&b=1&s=612x612&w=0&k=20&c=_Ux2ftmCuyswv8pzuyKYDZO3_hM3z7Ym8p541mGNNnI=',
    duration: 'Ongoing',
    schedule: 'Fridays, 7:00 PM - 9:00 PM',
    price: '$99/month',
    students: '800+',
    rating: '4.8',
    intensity: 'Club'
  },
  {
    id: 7,
    level: 'Intermediate',
    language: 'Japanese',
    title: 'Japanese Intermediate N4',
    description: 'Advance your Japanese with Kanji and complex grammar.',
    image: 'https://media.istockphoto.com/id/511092543/photo/close-up-of-japans-flag.webp?a=1&b=1&s=612x612&w=0&k=20&c=BbbgrHZHx3ERdaVQGlQT9TADIuBFLyOSvXWg1fwhAu4=',
    duration: '10 weeks',
    schedule: 'Mon & Wed, 7:30 PM - 9:00 PM',
    price: '$379',
    students: '900+',
    rating: '4.7',
    intensity: 'Standard'
  },
  {
    id: 8,
    level: 'Beginner',
    language: 'Korean',
    title: 'Korean Fundamentals',
    description: 'Start learning Korean with Hangul and basic expressions.',
    image: 'https://media.istockphoto.com/id/182780509/photo/south-korea-flag.webp?a=1&b=1&s=612x612&w=0&k=20&c=AMYLAdl5-bDxKOXSd0aHZ8_Dj5milW-4Mp9GAVf2o3o=',
    duration: '8 weeks',
    schedule: 'Tue & Thu, 6:00 PM - 7:30 PM',
    price: '1400DA',
    students: '1.1k+',
    rating: '4.8',
    intensity: 'Standard'
  },
  {
    id: 9,
    level: 'Business',
    language: 'English',
    title: 'Business English',
    description: 'Professional English for career advancement.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    duration: '6 weeks',
    schedule: 'Weekdays, 7:00 PM - 8:30 PM',
    price: '$449',
    students: '2.0k+',
    rating: '4.9',
    intensity: 'Intensive'
  },
  {
    id: 10,
    level: 'Advanced',
    language: 'Italian',
    title: 'Advanced Italian C1',
    description: 'Master Italian fluency with cultural immersion.',
    image: 'https://media.istockphoto.com/id/157193169/photo/flag-of-italy-with-vertical-strips-of-green-white-and-red.webp?a=1&b=1&s=612x612&w=0&k=20&c=cFH2gCk09dPjjxRQdSLRTEEuryYQ11LCatwQ-BFrJ6E=',
    duration: '12 weeks',
    schedule: 'Mon & Wed, 6:30 PM - 8:30 PM',
    price: '$399',
    students: '700+',
    rating: '4.6',
    intensity: 'Intensive'
  },
  // Continue adding more programs to reach 25+
  {
    id: 11,
    level: 'Beginner',
    language: 'Chinese',
    title: 'Mandarin Chinese A1',
    description: 'Learn basic Mandarin with pinyin and characters.',
    image: 'https://media.istockphoto.com/id/509311994/photo/flag-of-china-3d-silk-texture.webp?a=1&b=1&s=612x612&w=0&k=20&c=sbCG3sqv1TyNGUrgjHJBMMsQjEoSaxHx1RwyVglSEk8=',
    duration: '10 weeks',
    schedule: 'Tue & Thu, 7:00 PM - 8:30 PM',
    price: '$359',
    students: '1.3k+',
    rating: '4.7',
    intensity: 'Standard'
  },
  {
    id: 12,
    level: 'Intermediate',
    language: 'Portuguese',
    title: 'Portuguese Intermediate B1',
    description: 'Build conversational skills in Portuguese.',
    image: 'https://media.istockphoto.com/id/493887171/photo/flag-of-portugal.webp?a=1&b=1&s=612x612&w=0&k=20&c=kI1x3iLvaMYu4y6gFR6RziA4cF32JAsyoPrUt_4aVzo=',
    duration: '8 weeks',
    schedule: 'Mon & Wed, 6:00 PM - 7:30 PM',
    price: '$329',
    students: '600+',
    rating: '4.5',
    intensity: 'Standard'
  },
  {
    id: 13,
    level: 'Advanced',
    language: 'Russian',
    title: 'Advanced Russian C1',
    description: 'Master Russian fluency and literature.',
    image: 'https://media.istockphoto.com/id/489481953/photo/flag-of-russia.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q28fkdncM9gZ_Fz7h7HMddsxW2_svIJy7hIywUriW_o=',
    duration: '12 weeks',
    schedule: 'Tue & Thu, 7:30 PM - 9:00 PM',
    price: '$419',
    students: '400+',
    rating: '4.8',
    intensity: 'Intensive'
  },
  
  {
    id: 15,
    level: 'Intermediate',
    language: 'Dutch',
    title: 'Dutch Intermediate',
    description: 'Build Dutch conversation skills.',
    image: 'https://media.istockphoto.com/id/182789702/photo/netherland-dutch-flag.webp?a=1&b=1&s=612x612&w=0&k=20&c=bm73y6Z7apw2BTgQ2ONb8cdfszhpz6NgfxELop4VYcQ=',
    duration: '8 weeks',
    schedule: 'Mon & Wed, 7:00 PM - 8:30 PM',
    price: '$319',
    students: '300+',
    rating: '4.7',
    intensity: 'Standard'
  },
   
];

export default function OurTraining() {
  const [selectedProgram, setSelectedProgram] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLevel, setFilterLevel] = useState('All');
  const [filterLanguage, setFilterLanguage] = useState('All');

  const languages = ['All', ...new Set(allPrograms.map(p => p.language))];
  const levels = ['All', ...new Set(allPrograms.map(p => p.level))];

  const filteredPrograms = allPrograms.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = filterLevel === 'All' || program.level === filterLevel;
    const matchesLanguage = filterLanguage === 'All' || program.language === filterLanguage;
    
    return matchesSearch && matchesLevel && matchesLanguage;
  });

  if (selectedProgram) {
    return (
      <div className="min-h-screen bg-dark-900 text-white pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => setSelectedProgram(null)}
            className="flex items-center gap-2 text-primary-400 hover:text-primary-300 mb-8 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Courses
          </button>

          <div className="glass-effect rounded-3xl overflow-hidden hover-lift">
            <img 
              src={selectedProgram.image} 
              alt={selectedProgram.title}
              className="w-full h-80 object-cover"
            />
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary-500/20 text-primary-400 px-3 py-1 rounded-full text-sm">
                  {selectedProgram.level}
                </span>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                  {selectedProgram.language}
                </span>
                <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                  {selectedProgram.intensity}
                </span>
              </div>
              
              <h1 className="text-4xl font-bold mb-4 gradient-text">{selectedProgram.title}</h1>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">{selectedProgram.fullDescription}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary-400" />
                  <div>
                    <div className="text-sm text-gray-400">Duration</div>
                    <div className="font-semibold">{selectedProgram.duration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-primary-400" />
                  <div>
                    <div className="text-sm text-gray-400">Schedule</div>
                    <div className="font-semibold text-sm">{selectedProgram.schedule}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary-400" />
                  <div>
                    <div className="text-sm text-gray-400">Students</div>
                    <div className="font-semibold">{selectedProgram.students}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-yellow-400" />
                  <div>
                    <div className="text-sm text-gray-400">Rating</div>
                    <div className="font-semibold">{selectedProgram.rating}/5</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div className="text-3xl font-bold text-primary-400">{selectedProgram.price}</div>
                <button className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-glow">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900 text-white pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text text-glow">Our Language Programs</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive range of 25+ language courses designed for all levels and learning styles
          </p>
        </div>

        {/* Search and Filters */}
        <div className="glass-effect rounded-3xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search programs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-dark-800 border border-gray-600 rounded-2xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
              />
            </div>
            <div className="flex gap-4">
              <select
                value={filterLanguage}
                onChange={(e) => setFilterLanguage(e.target.value)}
                className="bg-dark-800 border border-gray-600 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
              >
                {languages.map(lang => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
              <select
                value={filterLevel}
                onChange={(e) => setFilterLevel(e.target.value)}
                className="bg-dark-800 border border-gray-600 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
              >
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
       {/* Programs Grid - FIXED */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
  {filteredPrograms.map((program, index) => (
    <div
      key={program.id}
      className="glass-effect rounded-3xl overflow-hidden hover-lift cursor-pointer group animate-fade-in card-height-fix"
      style={{animationDelay: `${index * 50}ms`}}
      onClick={() => setSelectedProgram(program)}
    >
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <img 
          src={program.image} 
          alt={program.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-primary-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
            {program.level}
          </span>
          <span className="bg-green-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
            {program.language}
          </span>
        </div>
      </div>
      
      <div className="p-6 card-content-fix">
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors line-clamp-2">
          {program.title}
        </h3>
        <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3 flex-grow">
          {program.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {program.duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {program.students}
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400" />
            {program.rating}
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div className="text-2xl font-bold text-primary-400">{program.price}</div>
          <button className="bg-primary-500/20 text-primary-400 hover:bg-primary-500/30 px-4 py-2 rounded-xl font-semibold transition-all duration-200 group-hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

        {/* No results message */}
        {filteredPrograms.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg">No programs found matching your criteria.</div>
            <button 
              onClick={() => {
                setSearchTerm('');
                setFilterLevel('All');
                setFilterLanguage('All');
              }}
              className="text-primary-400 hover:text-primary-300 mt-4"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}