import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden text-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,var(--primary)_0%,transparent_50%)] opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image/Visual Side */}
          <div className="relative h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl group animate-fade-in border border-slate-700/50">
            <Image 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Students collaborating"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
            
            {/* Overlay Badge */}
            <div className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-2xl">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-[var(--primary)] flex items-center justify-center border-4 border-slate-900 shrink-0 shadow-inner">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white tracking-tight">Re-Schooling Academy</h4>
                  <p className="text-slate-300 text-sm mt-1 font-medium">Providing a second chance for success</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text/Content Side */}
          <div className="animate-fade-in-up">
            <h2 className="text-sm font-bold text-[var(--primary-light)] tracking-widest uppercase mb-4 flex items-center gap-3">
              <span className="w-10 h-px bg-[var(--primary-light)]"></span>
              About Us
            </h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold mb-10 leading-tight tracking-tight">
              A Transformative Pathway to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-light)] to-blue-200 block mt-2">Your Future.</span>
            </h3>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm relative overflow-hidden mb-12 group hover:bg-white/10 transition-colors duration-500 shadow-2xl">
              <div className="absolute top-0 left-0 w-2 h-full bg-[var(--primary)]"></div>
              
              <svg className="w-16 h-16 text-white/5 absolute -top-4 -right-4 transform -scale-x-100 rotate-180" fill="currentColor" viewBox="0 0 32 32">
                 <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
              </svg>
              
              <h4 className="text-lg font-bold text-white mb-4 tracking-wide uppercase">Our Vision</h4>
              <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed font-light italic">
                "To be a transformative pathway for individuals seeking a second chance, empowering them to rebuild their education, confidence, and future success."
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-700/50">
               <div className="flex flex-col gap-2">
                 <div className="text-4xl font-extrabold text-[var(--primary-light)]">100%</div>
                 <div className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Commitment to Growth</div>
               </div>
               <div className="flex flex-col gap-2">
                 <div className="text-4xl font-extrabold text-[var(--primary-light)]">Holistic</div>
                 <div className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Learning Approach</div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
