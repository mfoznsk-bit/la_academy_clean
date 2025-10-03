'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  Globe,
  Users,
  BookOpen,
  Star,
  Clock,
  Award,
  GraduationCap,
  Languages,
  Target,
  Heart
} from 'lucide-react';

// Counter component
type CounterProps = {
  end: number;        // the target number to count up to
  duration?: number;  // optional, default 2000
  prefix?: string;    // optional string before number
  suffix?: string;    // optional string after number
};

const Counter = ({ end, duration = 2000, prefix = '', suffix = '' }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          let start = 0;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, started]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-6xl font-bold text-white mb-2">
        {prefix}{count}{suffix}
      </div>
    </div>
  );
};

export default function Home() {
  const programs = [
    {
      id: 1,
      level: 'Beginner',
      language: 'English',
      title: 'English Fundamentals',
      description: 'Start your journey with basic grammar, vocabulary, and conversation skills.',
      image: 'https://media.istockphoto.com/id/524055319/photo/flag-of-the-united-states.webp?a=1&b=1&s=612x612&w=0&k=20&c=StdwRZzTb1sHH8D-QApZHADr-z-m4W4HRgDFTRfSk9Y=',
      duration: '8 weeks',
      students: '2.5k+',
      rating: '4.8'
    },
    {
      id: 2,
      level: 'Intermediate',
      language: 'Spanish',
      title: 'Spanish Conversation',
      description: 'Build fluency with complex grammar and real-world conversation practice.',
      image: 'https://media.istockphoto.com/id/184138090/photo/the-national-flag-of-the-country-of-spain.webp?a=1&b=1&s=612x612&w=0&k=20&c=eKsmDvVIShQSoNWIrxckDz8Neb8VIjAm4-zjdr7jl7Q=',
      duration: '10 weeks',
      students: '1.8k+',
      rating: '4.9'
    },
    {
      id: 3,
      level: 'Advanced',
      language: 'French',
      title: 'Advanced French',
      description: 'Master fluent communication with native-level expressions.',
      image: 'https://media.istockphoto.com/id/1798441432/photo/flag-of-france.webp?a=1&b=1&s=612x612&w=0&k=20&c=ym7URhCYyBOQ7GQNllIe63BoEYD1UIDr-axwXI2N4Pc=',
      duration: '12 weeks',
      students: '1.2k+',
      rating: '4.7'
    },
    {
      id: 4,
      level: 'Beginner',
      language: 'German',
      title: 'German Basics',
      description: 'Learn German from scratch with focus on grammar and communication.',
      image: 'https://media.istockphoto.com/id/184151928/photo/majestic-glossy-german-flag.webp?a=1&b=1&s=612x612&w=0&k=20&c=lzE2FAKP3S7xVpQ0HU_ieb2iIqem_BxNqCFIf0nOQYs=',
      duration: '8 weeks',
      students: '1.5k+',
      rating: '4.6'
    },
    {
      id: 5,
      level: 'Kids',
      language: 'English',
      title: 'English for Kids',
      description: 'Fun and engaging English lessons for young learners.',
      image: 'https://media.istockphoto.com/id/1329915354/photo/concept-of-speaking-foreign-international-language.webp?a=1&b=1&s=612x612&w=0&k=20&c=jb0BdtMMnBDwoJaDSt4PxYgNBH2nYNYyAb3MdHdmKHc=',
      duration: '12 weeks',
      students: '3.2k+',
      rating: '4.9'
    },
    {
      id: 6,
      level: 'Speaking Club',
      language: 'French',
      title: 'French Speaking Club',
      description: 'Practice conversational French in a relaxed environment.',
      image: 'https://media.istockphoto.com/id/1300958022/photo/parlez-vous-francais-and-oui-two-speech-bubbles-on-wooden-shelf.webp?a=1&b=1&s=612x612&w=0&k=20&c=_Ux2ftmCuyswv8pzuyKYDZO3_hM3z7Ym8p541mGNNnI=',
      duration: 'Ongoing',
      students: '800+',
      rating: '4.8'
    },
    {
      id: 7,
      level: 'Intermediate',
      language: 'Japanese',
      title: 'Japanese Intermediate',
      description: 'Advance your Japanese with Kanji and complex grammar.',
      image: 'https://media.istockphoto.com/id/511092543/photo/close-up-of-japans-flag.webp?a=1&b=1&s=612x612&w=0&k=20&c=BbbgrHZHx3ERdaVQGlQT9TADIuBFLyOSvXWg1fwhAu4=',
      duration: '10 weeks',
      students: '900+',
      rating: '4.7'
    },
    {
      id: 8,
      level: 'Beginner',
      language: 'Korean',
      title: 'Korean Fundamentals',
      description: 'Start learning Korean with Hangul and basic expressions.',
      image: 'https://media.istockphoto.com/id/182780509/photo/south-korea-flag.webp?a=1&b=1&s=612x612&w=0&k=20&c=AMYLAdl5-bDxKOXSd0aHZ8_Dj5milW-4Mp9GAVf2o3o=',
      duration: '8 weeks',
      students: '1.1k+',
      rating: '4.8'
    },
    {
      id: 9,
      level: 'Business',
      language: 'English',
      title: 'Business English',
      description: 'Professional English for career advancement.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      duration: '6 weeks',
      students: '2.0k+',
      rating: '4.9'
    },
    {
      id: 10,
      level: 'Advanced',
      language: 'Italian',
      title: 'Advanced Italian',
      description: 'Master Italian fluency with cultural immersion.',
      image: 'https://media.istockphoto.com/id/157193169/photo/flag-of-italy-with-vertical-strips-of-green-white-and-red.webp?a=1&b=1&s=612x612&w=0&k=20&c=cFH2gCk09dPjjxRQdSLRTEEuryYQ11LCatwQ-BFrJ6E=',
      duration: '12 weeks',
      students: '700+',
      rating: '4.6'
    }
  ];

  return (
    <div className="min-h-screen text-white particle-bg">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left animate-slide-in-left">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 text-glow">
                Speak{' '}
                <span className="gradient-text">Fluently</span>
                ,<br />
                Connect{' '}
                <span className="gradient-text">Globally</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Master new languages through immersive experiences, expert instructors, and cutting-edge technology. 
                Start your journey to fluency today with our proven methodology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/our-training"
                  className="group bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-glow shadow-glow inline-flex items-center gap-3"
                >
                  Start Learning Now
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-200" />
                </Link>
                <Link 
                  href="/our-team"
                  className="group glass-effect hover:bg-white/5 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 border border-white/20 inline-flex items-center gap-3"
                >
                  Meet Our Experts
                  <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </Link>
              </div>
            </div>

            <div className="flex-1 flex justify-center lg:justify-end animate-slide-in-right">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Language Learning"
                  className="w-full max-w-2xl rounded-3xl shadow-2xl hover-lift animate-float"
                />
                {/* Floating elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-500/20 rounded-full blur-xl animate-pulse-slow"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent-500/20 rounded-full blur-xl animate-pulse-slow delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass-effect rounded-3xl p-8 md:p-12 hover-lift">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-6 animate-bounce-gentle">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Mission</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  At LA Academy, we're dedicated to breaking down language barriers and connecting people across cultures. 
                  We believe that language learning should be accessible, engaging, and transformative for everyone.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Through innovative teaching methods, cultural immersion, and personalized learning paths, we empower 
                  students to achieve fluency and unlock new opportunities in their personal and professional lives.
                </p>
              </div>
              <div className="flex-1">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Our Mission"
                  className="w-full rounded-2xl hover-lift"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Counters */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">Our Impact</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of successful students who have transformed their lives through language learning
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <Counter end={10000} prefix="+" />
              <div className="text-gray-400 text-lg mt-2">Happy Students</div>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '200ms'}}>
              <Counter end={15} suffix="+" />
              <div className="text-gray-400 text-lg mt-2">Languages</div>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '400ms'}}>
              <Counter end={50} prefix="+" />
              <div className="text-gray-400 text-lg mt-2">Expert Instructors</div>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '600ms'}}>
              <Counter end={98} suffix="%" />
              <div className="text-gray-400 text-lg mt-2">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">Featured Programs</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most popular language courses designed for all levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
            {programs.map((program, index) => (
              <div
                key={program.id}
                className="glass-effect rounded-3xl overflow-hidden hover-lift cursor-pointer group animate-fade-in"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="relative h-32 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-primary-500/90 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {program.level}
                    </span>
                    <span className="bg-green-500/90 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {program.language}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold mb-2 group-hover:text-primary-400 transition-colors line-clamp-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {program.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {program.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {program.students}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400" />
                      {program.rating}
                    </div>
                  </div>

                  <button className="w-full bg-primary-500/20 text-primary-400 hover:bg-primary-500/30 py-2 rounded-xl text-sm font-semibold transition-all duration-200 group-hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/our-training"
              className="group glass-effect hover:bg-white/5 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 border border-white/20 inline-flex items-center gap-3 mx-auto"
            >
              Explore All Programs
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">Why Learn With Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience language learning like never before with our unique approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Expert Native Instructors',
                description: 'Learn from certified native speakers with years of teaching experience and cultural knowledge.'
              },
              {
                icon: Globe,
                title: 'Cultural Immersion',
                description: 'Go beyond language with cultural insights, traditions, and real-world context.'
              },
              {
                icon: BookOpen,
                title: 'Structured Curriculum',
                description: 'Follow proven learning paths with clear milestones and measurable progress.'
              },
              {
                icon: Award,
                title: 'Certification',
                description: 'Earn recognized certificates that validate your language proficiency.'
              },
              {
                icon: Languages,
                title: 'Speaking Practice',
                description: 'Regular conversation practice with partners and instructors.'
              },
              {
                icon: Heart,
                title: 'Supportive Community',
                description: 'Join a global community of learners and practice together.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="glass-effect rounded-3xl p-8 hover-lift group text-center animate-fade-in"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-effect rounded-3xl p-12 hover-lift">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our community of language learners and discover the world through new languages
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/our-training"
                className="group bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-glow shadow-glow inline-flex items-center gap-3"
              >
                Browse All Courses
                <GraduationCap className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              </Link>
              <Link 
                href="/recruitment"
                className="group glass-effect hover:bg-white/5 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 border border-white/20 inline-flex items-center gap-3"
              >
                Join Our Team
                <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}