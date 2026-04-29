import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-8 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] via-blue-400 to-green-500"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--primary)] opacity-[0.05] rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 border-b border-slate-800 pb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 bg-white rounded-lg overflow-hidden p-1 shrink-0">
                <Image src="/logo.png" alt="LifeSkills Institute Logo" fill className="object-contain" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight leading-tight">
                LifeSkills Institute
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 font-medium">
              Empowering individuals with a second chance to rebuild their education, confidence, and future success through holistic learning.
            </p>
            <div className="flex gap-4">
              {/* Social Icons */}
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <button key={social} className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-[var(--primary)] hover:border-[var(--primary)] text-slate-400 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current rounded-sm opacity-50 block"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Courses', 'Activities', 'News & Updates', 'Admissions'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase().split(' ')[0]}`} className="text-slate-400 hover:text-[var(--primary-light)] transition-colors text-sm flex items-center gap-3 group font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-[var(--primary-light)] transition-colors"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Programs</h4>
            <ul className="space-y-4">
              {['Re-Schooling Academy', 'Technical High School', 'Engineering Diploma', 'Sports Academy', 'Business Programs'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-slate-400 hover:text-[var(--primary-light)] transition-colors text-sm flex items-center gap-3 group font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-[var(--primary-light)] transition-colors"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
               <li className="flex gap-4 items-start">
                 <svg className="w-5 h-5 text-[var(--primary-light)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                 </svg>
                 <span className="leading-relaxed">123 Innovation Drive, Tech District, City 1001</span>
               </li>
               <li className="flex gap-4 items-center">
                 <svg className="w-5 h-5 text-[var(--primary-light)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                 </svg>
                 <span>admissions@lifeskillsinstitute.edu</span>
               </li>
               <li className="flex gap-4 items-center">
                 <svg className="w-5 h-5 text-[var(--primary-light)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                 </svg>
                 <span>+1 (555) 123-4567</span>
               </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500 font-medium">
          <p>&copy; {currentYear} LifeSkills Institute of Engineering Technology. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
