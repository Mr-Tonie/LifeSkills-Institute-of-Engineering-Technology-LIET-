"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';

type ActivityType = 'sports' | 'academy';

interface Activity {
  name: string;
  imageSeed: string;
}

const sportsActivities: Activity[] = [
  { name: 'Football (Soccer)', imageSeed: 'soccer' },
  { name: 'Athletics (Track & Field)', imageSeed: 'athletics' },
  { name: 'Basketball', imageSeed: 'basketball' },
  { name: 'Volleyball', imageSeed: 'volleyball' },
  { name: 'Fitness & Conditioning Programs', imageSeed: 'fitness' },
];

const academyActivities: Activity[] = [
  { name: 'Structured training programs led by qualified coaches', imageSeed: 'coach' },
  { name: 'Talent identification and development pathways', imageSeed: 'talent' },
  { name: 'Participation in competitions and tournaments', imageSeed: 'tournament' },
  { name: 'Opportunities for scholarships and professional advancement', imageSeed: 'scholarship' },
];

export default function ActivitiesSection() {
  const [activeTab, setActiveTab] = useState<ActivityType>('sports');
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeActivities = activeTab === 'sports' ? sportsActivities : academyActivities;

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
    <section id="activities" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-500 opacity-[0.03] rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[var(--primary)] opacity-[0.03] rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-sm font-bold text-green-600 tracking-widest uppercase mb-3">
            Co-Curriculum Activities
          </h2>
          <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">Holistic Development</h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Our co-curricular programs are designed to support students across all divisions—the Institute, Vocational & Technical High School, and Re-Schooling Academy—ensuring holistic development that prepares them for life, work, and leadership.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 w-full overflow-x-auto pb-4">
          <div className="inline-flex bg-slate-50 dark:bg-slate-800 rounded-full shadow-sm p-1.5 border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setActiveTab('sports')}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                activeTab === 'sports'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              Sports & Physical Development
            </button>
            <button
              onClick={() => setActiveTab('academy')}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                activeTab === 'academy'
                  ? 'bg-[var(--primary)] text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              LifeSkills Sports Academy
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Scroll Buttons */}
          <button 
            onClick={scrollLeft}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={scrollRight}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrolling Area */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-12 pt-4 px-2 snap-x snap-mandatory scrollbar-hide"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none' 
            }}
          >
            {activeActivities.map((activity, index) => (
              <div 
                key={activity.name} 
                className="snap-start shrink-0 w-[280px] lg:w-[calc(20%-1.2rem)] md:w-[calc(33.333%-1rem)] sm:w-[calc(50%-1rem)] bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 group flex flex-col"
                style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s backwards` }}
              >
                {/* Image Wrapper */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10 opacity-60"></div>
                  <Image 
                    src={`https://picsum.photos/seed/${activity.imageSeed}/400/300`} 
                    alt={activity.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between relative bg-white dark:bg-slate-800">
                  {/* Decorative line */}
                  <div className={`absolute top-0 left-0 w-0 h-1 transition-all duration-500 group-hover:w-full ${activeTab === 'sports' ? 'bg-green-500' : 'bg-[var(--primary)]'}`}></div>
                  
                  <h4 className={`font-bold text-slate-800 dark:text-slate-100 text-[14px] leading-snug transition-colors line-clamp-4 ${activeTab === 'sports' ? 'group-hover:text-green-600 dark:group-hover:text-green-400' : 'group-hover:text-[var(--primary)] dark:group-hover:text-[var(--primary-light)]'}`}>
                    {activity.name}
                  </h4>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      {activeTab === 'sports' ? 'Sports' : 'Academy'}
                    </span>
                    <button className={`w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 ${activeTab === 'sports' ? 'text-green-600 dark:text-green-400 hover:bg-green-600 hover:text-white dark:hover:text-white' : 'text-[var(--primary)] dark:text-[var(--primary-light)] hover:bg-[var(--primary)] dark:hover:bg-[var(--primary-light)] hover:text-white dark:hover:text-white'}`}>
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

      </div>
    </section>
  );
}
