"use client";

import { useState } from 'react';

export default function OnlineApplication() {
  const [activeTab, setActiveTab] = useState<'info' | 'form'>('info');
  const [formStep, setFormStep] = useState(1);
  const totalSteps = 4;

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in-up">
      {/* Header & Main Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
            Online Application & Admissions
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Begin your journey with LifeSkills Institute today.
          </p>
        </div>
        
        <div className="inline-flex bg-white dark:bg-slate-800/80 rounded-full shadow-sm p-1.5 border border-slate-200 dark:border-slate-700 w-full md:w-auto">
          <button
            onClick={() => setActiveTab('info')}
            className={`flex-1 md:flex-none px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
              activeTab === 'info'
                ? 'bg-[var(--primary)] text-white shadow-md'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
          >
            Admissions Info
          </button>
          <button
            onClick={() => setActiveTab('form')}
            className={`flex-1 md:flex-none px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
              activeTab === 'form'
                ? 'bg-[var(--primary)] text-white shadow-md'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
          >
            Start Application
          </button>
        </div>
      </div>

      {activeTab === 'info' ? (
        <div className="grid lg:grid-cols-2 gap-10 animate-fade-in-up">
          {/* Requirements Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-slate-800 dark:text-white flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center text-sm">1</span>
              Admission Requirements
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              We welcome applications from students committed to academic excellence, skills development, and career growth.
            </p>

            <div className="space-y-4">
              {[
                { 
                  title: "VocTech High School", 
                  reqs: ["Completed Primary / Previous Grade Level", "Latest School Report / Results", "Birth Certificate (certified copy)", "Passport-size photographs", "Parent/Guardian details"] 
                },
                { 
                  title: "ReSchooling Academy (Short Courses)", 
                  reqs: ["Basic literacy (reading & writing)", "National ID / Passport (if applicable)", "No prior experience required"] 
                },
                { 
                  title: "College / Professional Programs", 
                  reqs: ["O-Level / Equivalent qualification", "Relevant subject passes", "CV (for some programs)", "Basic computer literacy"] 
                }
              ].map((prog, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[1.5rem] p-5 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-slate-800 dark:text-white mb-3 text-[15px] text-[var(--primary)]">{prog.title}</h3>
                  <ul className="space-y-2">
                    {prog.reqs.map((req, j) => (
                      <li key={j} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400 font-medium">
                        <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/30 rounded-[1.5rem] p-6 mt-6">
               <h3 className="font-bold text-orange-800 dark:text-orange-400 mb-2">Required Documents</h3>
               <p className="text-sm text-orange-700/80 dark:text-orange-300 mb-3">Applicants must be prepared to submit:</p>
               <div className="flex flex-wrap gap-2">
                 {["Birth Certificate / ID", "Academic Transcripts", "Passport Photo", "Proof of Residence"].map(doc => (
                   <span key={doc} className="px-3 py-1 bg-white dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800 rounded-full text-xs font-bold text-orange-600 dark:text-orange-400">
                     {doc}
                   </span>
                 ))}
               </div>
            </div>
          </div>

          {/* Process Timeline */}
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-slate-800 dark:text-white flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center text-sm">2</span>
              Application Process
            </h2>
            
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-8 shadow-sm">
              <div className="relative border-l-2 border-[var(--primary)]/20 dark:border-[var(--primary)]/30 ml-4 space-y-8">
                {[
                  { step: "Step 1: Choose Your Program", desc: "Select between VocTech High School, ReSchooling Academy, or College Programs." },
                  { step: "Step 2: Online Form", desc: "Fill in your details using our secure online application form." },
                  { step: "Step 3: Submit Application", desc: "Review your information and submit the application online." },
                  { step: "Step 4: Pay Fee", desc: "Complete the application fee via Online payment, Bank or Mobile Money." },
                  { step: "Step 5: Review & Assessment", desc: "Our admissions team evaluates your profile. You may be invited for an interview or portfolio assessment." },
                  { step: "Step 6: Admission Offer", desc: "Receive your enrollment acceptance notification and joining instructions." },
                  { step: "Step 7: Final Enrollment", desc: "Pay your deposit, submit original physical documents, and begin your classes!" },
                ].map((item, i) => (
                  <div key={i} className="pl-8 relative">
                    <div className="absolute w-8 h-8 bg-white dark:bg-slate-900 border-2 border-[var(--primary)] rounded-full -left-[17px] top-0 flex items-center justify-center text-[10px] font-extrabold text-[var(--primary)] shadow-sm">
                      {i + 1}
                    </div>
                    <h3 className="font-extrabold text-slate-800 dark:text-white text-[15px] pt-1">{item.step}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={() => setActiveTab('form')}
              className="w-full bg-[var(--primary)] text-white font-extrabold py-4 rounded-2xl shadow-lg shadow-[var(--primary)]/30 hover:scale-[1.02] transition-transform duration-300"
            >
              I Understand, Start Application →
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          {/* High Conversion Form Container */}
          <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
            {/* Progress Bar Section */}
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 sm:px-10 border-b border-slate-200 dark:border-slate-800">
              <div className="flex justify-between items-end mb-3">
                <h2 className="text-xl font-extrabold text-slate-800 dark:text-white">Registration Form</h2>
                <span className="text-sm font-bold text-[var(--primary)] bg-[var(--primary)]/10 px-3 py-1 rounded-full">
                  Step {formStep} of {totalSteps}
                </span>
              </div>
              <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[var(--primary)] rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${(formStep / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            {/* Form Steps */}
            <div className="p-6 sm:p-10">
              <form className="space-y-6">
                
                {formStep === 1 && (
                  <div className="space-y-6 animate-fade-in-up">
                    <h3 className="font-bold text-lg text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">Student Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600 dark:text-slate-400 tracking-wide uppercase ml-1">Full Name</label>
                        <input type="text" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] transition-all dark:text-white" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600 dark:text-slate-400 tracking-wide uppercase ml-1">Date of Birth</label>
                        <input type="date" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] transition-all dark:text-white" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600 dark:text-slate-400 tracking-wide uppercase ml-1">Gender</label>
                        <select className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] transition-all dark:text-white appearance-none">
                          <option value="">Select Gender...</option>
                          <option value="m">Male</option>
                          <option value="f">Female</option>
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600 dark:text-slate-400 tracking-wide uppercase ml-1">ID / Birth Cert Number</label>
                        <input type="text" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] transition-all dark:text-white" />
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-lg text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2 mt-8">Contact & Address</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5 sm:col-span-2">
                        <label className="text-xs font-bold text-slate-600 dark:text-slate-400 tracking-wide uppercase ml-1">Physical Address</label>
                        <input type="text" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] transition-all dark:text-white" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600 dark:text-slate-400 tracking-wide uppercase ml-1">Phone Number</label>
                        <input type="tel" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] transition-all dark:text-white" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600 dark:text-slate-400 tracking-wide uppercase ml-1">Email Address</label>
                        <input type="email" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] transition-all dark:text-white" />
                      </div>
                    </div>
                  </div>
                )}

                {formStep === 2 && (
                  <div className="space-y-6 animate-fade-in-up">
                    <h3 className="font-bold text-lg text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">Parent / Guardian Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600 dark:text-slate-400 tracking-wide uppercase ml-1">Full Name</label>
                        <input type="text" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] transition-all dark:text-white" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600 dark:text-slate-400 tracking-wide uppercase ml-1">Contact Number</label>
                        <input type="tel" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] transition-all dark:text-white" />
                      </div>
                      <div className="space-y-1.5 sm:col-span-2">
                        <label className="text-xs font-bold text-slate-600 dark:text-slate-400 tracking-wide uppercase ml-1">Occupation</label>
                        <input type="text" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] transition-all dark:text-white" />
                      </div>
                    </div>

                    <h3 className="font-bold text-lg text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2 mt-8">Academic Background</h3>
                    <div className="grid grid-cols-1 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600 dark:text-slate-400 tracking-wide uppercase ml-1">Previous School Attended</label>
                        <input type="text" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] transition-all dark:text-white" />
                      </div>
                      <div className="grid grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-600 dark:text-slate-400 tracking-wide uppercase ml-1">Last Grade</label>
                          <select className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] transition-all dark:text-white appearance-none">
                            <option value="">Select...</option>
                            <option value="o_level">O-Level</option>
                            <option value="a_level">A-Level</option>
                            <option value="primary">Primary</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-600 dark:text-slate-400 tracking-wide uppercase ml-1">Current Results</label>
                          <input type="text" placeholder="e.g. 5 passes" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] transition-all dark:text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {formStep === 3 && (
                  <div className="space-y-6 animate-fade-in-up">
                    <h3 className="font-bold text-lg text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">Program Selection</h3>
                    <div className="space-y-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600 dark:text-slate-400 tracking-wide uppercase ml-1">Application Track</label>
                        <select className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] transition-all dark:text-white appearance-none">
                          <option value="">Choose a Program Tier...</option>
                          <option value="vt">VocTech High School</option>
                          <option value="rs">ReSchooling Academy</option>
                          <option value="col">College Programs</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600 dark:text-slate-400 tracking-wide uppercase ml-1">Specific Course/Subject</label>
                        <select className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] transition-all dark:text-white appearance-none">
                          <option value="">Select course...</option>
                          <option value="sw">Software Engineering</option>
                          <option value="ag">Agriculture & Sustainability</option>
                          <option value="biz">Business & Commerce</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                         <label className="text-xs font-bold text-slate-600 dark:text-slate-400 tracking-wide uppercase ml-1">Preferred Intake Status</label>
                         <div className="flex gap-4">
                           <label className="flex-1 border border-slate-200 dark:border-slate-700 rounded-xl p-4 flex items-center justify-center gap-3 cursor-pointer hover:border-[var(--primary)] transition-colors bg-white dark:bg-slate-900">
                             <input type="radio" name="intake" className="accent-[var(--primary)] w-4 h-4" />
                             <span className="font-bold text-sm text-slate-700 dark:text-slate-200">First Term</span>
                           </label>
                           <label className="flex-1 border border-slate-200 dark:border-slate-700 rounded-xl p-4 flex items-center justify-center gap-3 cursor-pointer hover:border-[var(--primary)] transition-colors bg-white dark:bg-slate-900">
                             <input type="radio" name="intake" className="accent-[var(--primary)] w-4 h-4" />
                             <span className="font-bold text-sm text-slate-700 dark:text-slate-200">Mid-Year Transfer</span>
                           </label>
                         </div>
                      </div>
                    </div>
                  </div>
                )}

                {formStep === 4 && (
                  <div className="space-y-6 animate-fade-in-up">
                    <h3 className="font-bold text-lg text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">Documents & Final Steps</h3>
                    
                    <div className="space-y-4">
                      <div className="border border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-6 bg-slate-50 dark:bg-slate-900/50 text-center hover:border-[var(--primary)] transition-colors cursor-pointer group">
                        <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                           <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                        </div>
                        <p className="font-bold text-sm text-slate-800 dark:text-slate-200 mb-1">Upload ID / Birth Certificate</p>
                        <p className="text-xs text-slate-500">PDF, JPG, PNG up to 5MB</p>
                      </div>

                      <div className="border border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-6 bg-slate-50 dark:bg-slate-900/50 text-center hover:border-[var(--primary)] transition-colors cursor-pointer group">
                        <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                           <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                        </div>
                        <p className="font-bold text-sm text-slate-800 dark:text-slate-200 mb-1">Upload Academic Results & Transcripts</p>
                        <p className="text-xs text-slate-500">Attach recent reports</p>
                      </div>
                    </div>

                    <h3 className="font-bold text-lg text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2 mt-8">Additional Information</h3>
                    <div className="space-y-4">
                      <label className="text-xs font-bold text-slate-600 dark:text-slate-400 tracking-wide uppercase ml-1">How did you hear about us?</label>
                      <select className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] transition-all dark:text-white appearance-none">
                        <option value="">Please Select...</option>
                        <option value="social">Social Media (Facebook/Instagram)</option>
                        <option value="word">Word of Mouth / Referral</option>
                        <option value="web">Search Engine</option>
                        <option value="flyer">Flyer or Poster</option>
                      </select>
                    </div>

                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="pt-6 mt-8 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
                  <button 
                    type="button"
                    onClick={() => formStep > 1 ? setFormStep(formStep - 1) : setActiveTab('info')}
                    className="font-bold text-sm text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white px-4 py-2"
                  >
                    ← Back
                  </button>
                  
                  {formStep < totalSteps ? (
                    <button 
                      type="button"
                      onClick={() => setFormStep(formStep + 1)}
                      className="bg-[var(--primary)] text-white font-bold py-3.5 px-8 rounded-xl hover:bg-[var(--primary-hover)] transition-all shadow-md shadow-[var(--primary)]/20"
                    >
                      Next Step
                    </button>
                  ) : (
                    <button 
                      type="button"
                      className="bg-green-600 text-white font-extrabold py-3.5 px-8 rounded-xl hover:bg-green-700 transition-all shadow-lg shadow-green-600/30"
                    >
                      Submit Application
                    </button>
                  )}
                </div>

              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
