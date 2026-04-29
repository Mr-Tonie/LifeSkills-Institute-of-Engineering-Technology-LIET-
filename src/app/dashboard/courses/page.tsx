"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function DashboardCourses() {
  const [activeTab, setActiveTab] = useState<'core' | 'career'>('core');

  const subjects = {
    core: [
      { name: "Mathematics", img: "111" },
      { name: "English Language", img: "112" },
      { name: "Integrated Science", img: "113" },
      { name: "Geography", img: "114" },
      { name: "History/Heritage Studies", img: "115" },
      { name: "Commerce / Business Studies", img: "116" },
    ],
    career: [
      { name: "Engineering & Construction", img: "121" },
      { name: "Business & Entrepreneurship", img: "122" },
      { name: "ICT & Digital Skills", img: "123" },
      { name: "Agriculture & Sustainability", img: "124" },
    ]
  };

  const activeSubjects = subjects[activeTab];

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in-up">
      {/* Page Header and Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
            Courses & Lessons
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Browse through your enrolled curriculum and find your study materials.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="inline-flex bg-white dark:bg-slate-800/80 rounded-full shadow-sm p-1.5 border border-slate-200 dark:border-slate-700 w-full md:w-auto overflow-x-auto">
          <button
            onClick={() => setActiveTab('core')}
            className={`flex-1 md:flex-none px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap ${
              activeTab === 'core'
                ? 'bg-[var(--primary)] text-white shadow-md'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
          >
            Core Academic Subjects
          </button>
          <button
            onClick={() => setActiveTab('career')}
            className={`flex-1 md:flex-none px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap ${
              activeTab === 'career'
                ? 'bg-[var(--primary)] text-white shadow-md'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
          >
            Career-Based Classes
          </button>
        </div>
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {activeSubjects.map((subject, i) => (
          <div 
            key={subject.name} 
            className="group block bg-white dark:bg-slate-900 rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 dark:border-slate-800"
            style={{ animation: `fadeInUp 0.5s ease-out ${i * 0.05}s backwards` }}
          >
            {/* Image Section */}
            <div className="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10 opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
              <Image 
                src={`https://picsum.photos/seed/${subject.img}/400/300`} 
                alt={subject.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                unoptimized
              />
              <div className="absolute top-4 right-4 z-20">
                <div className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-lg opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 duration-300">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="p-5 relative flex flex-col h-[150px]">
              {/* Accent Line */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-[var(--primary)] transition-all duration-500 group-hover:w-full"></div>
              
              <h3 className="font-extrabold text-lg text-slate-800 dark:text-white leading-tight group-hover:text-[var(--primary)] dark:group-hover:text-[var(--primary-light)] transition-colors line-clamp-2">
                {subject.name}
              </h3>
              
              <div className="mt-auto flex items-center justify-between text-sm pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="font-bold text-slate-400 dark:text-slate-500 py-1 px-2.5 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  12 Lessons
                </span>
                <button className="text-[var(--primary)] dark:text-[var(--primary-light)] font-bold hover:underline transition-all">
                  Start
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
