import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const navItems = [
    { name: 'About Us', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'News and Updates', href: '#news' },
    { name: 'Co-Curriculum Activities', href: '#activities' },
  ];

  return (
    <nav className="fixed w-full z-10 transition-all duration-300 backdrop-blur-md bg-white/80 border-b border-gray-100/20 shadow-sm top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-105">
                <Image src="/logo.png" alt="LifeSkills Institute Logo" fill className="object-contain" />
              </div>
              <span className="font-extrabold text-xl lg:text-2xl text-[var(--primary)] hidden md:block tracking-tight">
                LifeSkills Institute
              </span>
            </Link>
          </div>
          
          <div className="hidden lg:flex space-x-6 items-center">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="text-gray-600 hover:text-[var(--primary)] font-medium text-sm transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-[var(--primary)] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[var(--primary-hover)] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ml-4">
              Apply Now
            </button>
          </div>
          
          {/* Mobile menu button (visual only for now) */}
          <div className="lg:hidden flex items-center">
            <button className="text-gray-600 hover:text-gray-900 focus:outline-none p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
