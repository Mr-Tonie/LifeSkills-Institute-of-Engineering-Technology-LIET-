import Link from 'next/link';
import Image from 'next/image';

export default function Login() {
  return (
    <main className="min-h-screen grid lg:grid-cols-2 bg-white dark:bg-slate-950 font-sans transition-colors duration-300">
      {/* Form Side */}
      <div className="flex items-center justify-center p-6 sm:p-12 relative overflow-hidden order-2 lg:order-1">
        {/* Subtle background blob */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[var(--primary)] opacity-[0.03] dark:opacity-10 rounded-full blur-[100px]" />
        
        <div className="w-full max-w-md relative z-10">
          <div className="lg:hidden mb-10 flex justify-center">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-12 h-12 bg-white rounded-lg p-1.5 border border-slate-200 dark:border-slate-800 shadow-md">
                <Image src="/logo.png" alt="Logo" width={40} height={40} className="object-contain" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white">LifeSkills</span>
            </Link>
          </div>

          <div className="mb-10 text-center lg:text-left flex flex-col justify-center animate-fade-in-up">
            <Link href="/" className="hidden lg:inline-flex items-center gap-3 mb-12 group opacity-70 hover:opacity-100 transition-opacity">
              <svg className="w-5 h-5 text-slate-800 dark:text-slate-200 transform transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-widest">Back to Home</span>
            </Link>

            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">Welcome Back</h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium">Log in to access your student portal</p>
          </div>

          <form className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
              <input type="email" placeholder="john@example.com" className="w-full px-4 py-3.5 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-slate-900 dark:text-slate-100 focus:ring-4 focus:ring-[var(--primary)]/10 focus:border-[var(--primary)] outline-none transition-all placeholder:text-slate-400" />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center ml-1 mb-1">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Password</label>
                <Link href="#" className="text-xs font-bold text-[var(--primary)] dark:text-[var(--primary-light)] hover:underline transition-all">Forgot password?</Link>
              </div>
              <input type="password" placeholder="••••••••" className="w-full px-4 py-3.5 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-slate-900 dark:text-slate-100 focus:ring-4 focus:ring-[var(--primary)]/10 focus:border-[var(--primary)] outline-none transition-all placeholder:text-slate-400" />
            </div>

            <Link href="/dashboard" className="w-full flex justify-center bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold py-4 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[var(--primary)]/30 hover:-translate-y-0.5 mt-8 tracking-wide">
              Sign In
            </Link>
            
            <div className="flex items-center my-8 before:flex-1 before:border-t before:border-slate-200 dark:before:border-slate-800 after:flex-1 after:border-t after:border-slate-200 dark:after:border-slate-800">
               <span className="px-4 text-sm text-slate-400 font-bold tracking-widest uppercase">OR</span>
            </div>
            
            <button type="button" className="w-full bg-white dark:bg-slate-800/80 border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>
          </form>

          <p className="mt-10 text-center text-sm text-slate-600 dark:text-slate-400 font-medium animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Don't have an account?{' '}
            <Link href="/register" className="text-[var(--primary)] dark:text-[var(--primary-light)] font-bold hover:underline transition-all ml-1">
              Enroll now
            </Link>
          </p>
        </div>
      </div>

      {/* Visual Side */}
      <div className="relative hidden lg:flex items-center justify-center p-12 bg-slate-900 overflow-hidden order-1 lg:order-2">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Library"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/90 to-[var(--primary)]/90 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 text-white max-w-lg">
          <div className="mb-12">
            <Link href="/" className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity group">
              <div className="w-12 h-12 bg-white rounded-lg p-1 transition-transform duration-300 group-hover:scale-105 shadow-xl">
                <Image src="/logo.png" alt="Logo" width={40} height={40} className="object-contain" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight">LifeSkills Institute</span>
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-[2.5rem] shadow-2xl transform transition-transform hover:-translate-y-2 duration-500">
            <svg className="w-10 h-10 text-[var(--primary-light)] mb-6 opacity-70" fill="currentColor" viewBox="0 0 32 32">
               <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
            </svg>
            <p className="text-xl text-slate-50 font-medium italic leading-relaxed">
              "Returning to LifeSkills Institute changed my entire career trajectory. The holistic approach here is truly one-of-a-kind."
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden relative border-2 border-[var(--primary-light)] shadow-lg">
                 <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" fill alt="Student" className="object-cover" />
              </div>
              <div>
                <div className="font-extrabold text-white">Sarah Jenkins</div>
                <div className="text-sm font-semibold text-blue-200">Software Engineering Alumnus</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
