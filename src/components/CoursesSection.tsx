"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';

type CourseType = 'core' | 'career';

interface Subject {
  name: string;
  imageSeed: string;
}

const coreSubjects: Subject[] = [
  { name: 'Mathematics', imageSeed: 'math' },
  { name: 'English Language', imageSeed: 'english' },
  { name: 'Integrated Science / Physics / Chemistry / Biology', imageSeed: 'science' },
  { name: 'Geography', imageSeed: 'geography' },
  { name: 'History/Heritage Studies', imageSeed: 'history' },
  { name: 'Commerce / Business Studies', imageSeed: 'commerce' },
];

const careerSubjects: Subject[] = [
  { name: 'Engineering & Construction', imageSeed: 'engineering' },
  { name: 'Business & Entrepreneurship', imageSeed: 'entrepreneurship' },
  { name: 'ICT & Digital Skills', imageSeed: 'ict' },
  { name: 'Agriculture & Sustainability', imageSeed: 'agriculture' },
];

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState<CourseType>('core');
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeSubjects = activeTab === 'core' ? coreSubjects : careerSubjects;

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="courses" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)] opacity-[0.03] rounded-full blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--primary-light)] opacity-[0.03] rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase mb-3">
            Courses & Lessons Information
          </h2>
          <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Our Learning Model</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            We deliver a hybrid education system that combines academic excellence, technical skills, and real-world career preparation. Our programs are designed to produce employable, entrepreneurial, and future-ready graduates.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-full shadow-sm p-1.5 border border-slate-200">
            <button
              onClick={() => setActiveTab('core')}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === 'core'
                  ? 'bg-[var(--primary)] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Core Academic Subjects
            </button>
            <button
              onClick={() => setActiveTab('career')}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === 'career'
                  ? 'bg-[var(--primary)] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Career-Based Classes
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Scroll Buttons */}
          <button 
            onClick={scrollLeft}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:text-[var(--primary)] hover:scale-110 transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={scrollRight}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:text-[var(--primary)] hover:scale-110 transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrolling Area */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-8 pt-4 px-2 snap-x snap-mandatory scrollbar-hide"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none' 
            }}
          >
            {activeSubjects.map((subject, index) => (
              <div 
                key={subject.name} 
                className="snap-start shrink-0 w-[280px] lg:w-[calc(20%-1.2rem)] md:w-[calc(33.333%-1rem)] sm:w-[calc(50%-1rem)] bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col"
                style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s backwards` }}
              >
                {/* Image Wrapper */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10 opacity-60"></div>
                  <Image 
                    src={`https://picsum.photos/seed/${subject.imageSeed}/400/300`} 
                    alt={subject.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between relative bg-white">
                  {/* Decorative line */}
                  <div className="absolute top-0 left-0 w-0 h-1 bg-[var(--primary)] transition-all duration-500 group-hover:w-full"></div>
                  
                  <h4 className="font-bold text-slate-800 text-[15px] leading-snug group-hover:text-[var(--primary)] transition-colors line-clamp-3">
                    {subject.name}
                  </h4>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {activeTab === 'core' ? 'Academic' : 'Career'}
                    </span>
                    <button className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-[var(--primary)] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 hover:bg-[var(--primary)] hover:text-white">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Explore More Button */}
        <div className="text-center mt-12">
          <button className="text-[var(--primary)] font-semibold hover:text-[var(--primary-hover)] flex items-center gap-2 mx-auto transition-colors group">
            View All Program Details
            <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
