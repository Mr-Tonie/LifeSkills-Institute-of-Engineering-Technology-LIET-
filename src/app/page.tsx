import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import CoursesSection from '@/components/CoursesSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-[var(--primary)] selection:text-white font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-blue-100/30 -z-10" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,var(--primary-light)_0%,transparent_60%)] opacity-[0.08] -z-10 transform translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_60%)] opacity-[0.05] -z-10 transform -translate-x-1/3 translate-y-1/3" />
        
        {/* Dynamic Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-10 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            {/* Text Content */}
            <div className="max-w-2xl animate-fade-in-up relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/5 text-[var(--primary)] font-semibold text-sm mb-8 border border-[var(--primary)]/20 shadow-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
                </span>
                Admissions Open for 2026
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
                Shape Your <br/>
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)]">Future Today.</span>
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-[var(--primary)]/20 -rotate-2 -z-0 rounded-full"></div>
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                LifeSkills Institute of Engineering Technology equips you with practical skills, innovative thinking, and the technical mastery needed to lead in tomorrow's world.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="group relative bg-[var(--primary)] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[var(--primary-hover)] transition-all duration-300 hover:shadow-xl hover:shadow-[var(--primary)]/30 hover:-translate-y-1 overflow-hidden">
                  <span className="relative z-10">Explore Programs</span>
                  <div className="absolute inset-0 h-full w-0 bg-white/20 transition-[width] duration-300 ease-out group-hover:w-full"></div>
                </button>
                <button className="bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-full font-semibold text-lg hover:border-[var(--primary)] hover:text-[var(--primary)] hover:bg-slate-50 transition-all duration-300 hover:-translate-y-1 shadow-sm">
                  Virtual Tour
                </button>
              </div>
              
              {/* Stats Bar */}
              <div className="mt-16 grid grid-cols-3 gap-6 pt-8 border-t border-slate-200/60">
                <div className="group">
                  <div className="text-4xl font-extrabold text-[var(--primary)] mb-1 group-hover:scale-105 transition-transform duration-300 origin-left">98%</div>
                  <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Placement Rate</div>
                </div>
                <div className="group">
                  <div className="text-4xl font-extrabold text-[var(--primary)] mb-1 group-hover:scale-105 transition-transform duration-300 origin-left">40+</div>
                  <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Industry Labs</div>
                </div>
                <div className="group">
                  <div className="text-4xl font-extrabold text-[var(--primary)] mb-1 group-hover:scale-105 transition-transform duration-300 origin-left">5k+</div>
                  <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Alumni Network</div>
                </div>
              </div>
            </div>

            {/* Visual/Image Section */}
            <div className="relative lg:h-[650px] flex items-center justify-center animate-fade-in lg:mt-0 mt-12">
              <div className="relative w-full max-w-[500px] aspect-square group">
                {/* Decorative Background Blobs & Shapes */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)] to-blue-300 rounded-[2rem] rotate-6 opacity-20 transition-all duration-700 group-hover:rotate-12 group-hover:scale-105 blur-sm"></div>
                
                <div className="absolute inset-0 flex items-center justify-center bg-white shadow-2xl rounded-[2rem] overflow-hidden -rotate-3 transition-transform duration-700 group-hover:rotate-0 z-10 border border-slate-100">
                  {/* Logo Container */}
                  <div className="relative w-3/4 h-3/4 transition-transform duration-500 group-hover:scale-110">
                    <Image 
                      src="/logo.png" 
                      alt="LifeSkills Institute" 
                      fill 
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </div>
                </div>
                
                {/* Floating Elements (badges/cards) */}
                <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow z-20 border border-slate-100">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 shadow-inner">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 leading-tight">Accredited</div>
                    <div className="text-xs text-slate-500 font-medium">Top Tier Institute</div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex flex-col items-center gap-1 animate-bounce-slow z-20 border border-slate-100" style={{ animationDelay: '1.5s' }}>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white z-30"></div>
                    <div className="w-8 h-8 rounded-full bg-blue-200 border-2 border-white z-20"></div>
                    <div className="w-8 h-8 rounded-full bg-blue-300 border-2 border-white z-10"></div>
                  </div>
                  <div className="text-xs font-bold text-slate-900 mt-1">200+ Students</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Wave bottom decoration */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,123.6,190.27,105.57,235.63,91.88,284.18,63.4,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Courses & Lessons Section */}
      <CoursesSection />
      
      {/* Co-Curriculum Activities Section */}
      <ActivitiesSection />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
