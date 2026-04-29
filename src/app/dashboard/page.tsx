"use client";

import Image from "next/image";
import Link from "next/link";

export default function DashboardHome() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Creative Welcome Banner */}
      <div className="relative w-full rounded-[2rem] overflow-hidden bg-slate-900 shadow-xl group">
        <div className="absolute inset-0">
           <Image 
             src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
             fill 
             className="object-cover opacity-40 mix-blend-overlay transition-transform duration-1000 group-hover:scale-105"
             alt="Library" 
           />
           <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/90 via-blue-900/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 p-8 sm:p-12 h-full flex flex-col justify-center min-h-[300px]">
          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm font-bold tracking-widest uppercase mb-4 border border-white/20">
            Fall Semester 2026
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            Ready to learn, <br className="hidden sm:block"/> Sarah?
          </h1>
          <p className="text-lg text-blue-100 max-w-xl font-medium">
            You are enrolled in the Software Engineering Vocational pathway. You have 2 assignments due this week. Let's keep the momentum going!
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
             <button className="bg-white text-[var(--primary)] px-6 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg shadow-white/10">
               Resume Course
             </button>
             <button className="bg-white/10 text-white border border-white/30 px-6 py-3 rounded-full font-bold hover:bg-white/20 backdrop-blur-md transition-colors">
               View Schedule
             </button>
          </div>
        </div>
        
        {/* Decorative Floating Circle */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 border-[30px] border-white/10 rounded-full blur-[2px]"></div>
      </div>

      {/* Quick Stats / Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {[
          { label: "Overall Grade", value: "94%", color: "text-green-500", bg: "bg-green-50 dark:bg-green-900/20" },
          { label: "Classes Attended", value: "42/45", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
          { label: "Pending Assignments", value: "2", color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-900/20" },
          { label: "Upcoming Activities", value: "1", color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-900/20" },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-[1.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-2">{stat.label}</h3>
            <div className={`text-3xl font-extrabold ${stat.color}`}>{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Grid Content: Courses & News */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Left Column - Continue Learning */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-extrabold text-slate-800 dark:text-white">Continue Learning</h2>
            <Link href="/dashboard/courses" className="text-sm font-bold text-[var(--primary)] dark:text-[var(--primary-light)] hover:underline">View All</Link>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Advanced React Patterns", subject: "Software Engineering", progress: 75, img: "10" },
              { title: "Cloud Architecture AWS", subject: "Information Technology", progress: 30, img: "20" }
            ].map((course, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 rounded-[1.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm group">
                <div className="h-32 bg-slate-200 relative overflow-hidden">
                  <Image src={`https://picsum.photos/seed/${course.img}/400/200`} fill alt={course.title} className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold text-[var(--primary)] dark:text-[var(--primary-light)] mb-1 uppercase tracking-wider">{course.subject}</p>
                  <h3 className="font-bold text-slate-800 dark:text-white mb-4 line-clamp-1">{course.title}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold text-slate-500">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-[var(--primary)] rounded-full relative" style={{ width: `${course.progress}%` }}>
                        <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/20" style={{ animation: 'shimmer 2s infinite' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Notice Board */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-extrabold text-slate-800 dark:text-white">Notice Board</h2>
          </div>
          
          <div className="bg-white dark:bg-slate-900 rounded-[1.5rem] border border-slate-100 dark:border-slate-800 shadow-sm p-6 space-y-6">
            {[
              { date: "Oct 24", title: "Sports Academy Trials", desc: "Basketball trials taking place this Friday at the main court." },
              { date: "Oct 20", title: "Tech Symposium", desc: "Guest speaker from Google will be presenting virtually." },
              { date: "Oct 15", title: "Tuition Deadline", desc: "Reminder to clear outstanding balances by month end." },
            ].map((notice, i) => (
              <div key={i} className="flex gap-4 group cursor-pointer">
                <div className="flex flex-col items-center justify-center w-14 h-14 shrink-0 rounded-2xl bg-blue-50 dark:bg-slate-800 text-[var(--primary)] dark:text-[var(--primary-light)] border border-[var(--primary)]/10 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors duration-300">
                  <span className="text-xs font-bold uppercase">{notice.date.split(' ')[0]}</span>
                  <span className="text-lg font-extrabold leading-none">{notice.date.split(' ')[1]}</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white text-sm group-hover:text-[var(--primary)] dark:group-hover:text-[var(--primary-light)] transition-colors">{notice.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">{notice.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
