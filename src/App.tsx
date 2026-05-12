/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  Mail, 
  Phone, 
  GraduationCap, 
  Briefcase, 
  ChevronRight,
  TrendingUp,
  Layout,
  Cpu,
  TvMinimalPlay,
  X,
  Target,
  Trophy,
  Activity,
  QrCode
} from 'lucide-react';
import { PROFILE, CAPABILITIES, PROJECTS } from './constants';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter uppercase font-serif italic text-brand-violet">
            {PROFILE.enName}
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
            <a href="#about" className="hover:text-brand-violet transition-colors">关于我</a>
            <a href="#experience" className="hover:text-brand-violet transition-colors">履历背景</a>
            <a href="#portfolio" className="hover:text-brand-violet transition-colors">案例深潜</a>
            <a href="#contact" className="hover:text-brand-violet transition-colors">期待交流</a>
          </div>
          <a 
            href={`mailto:${PROFILE.contact.email}`}
            className="px-4 py-2 bg-zinc-900 text-white text-xs font-bold rounded-full hover:bg-brand-violet transition-all duration-300"
          >
            GET IN TOUCH
          </a>
        </div>
      </nav>

      <main>
        {/* Section 1: Hero */}
        <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
          {/* Animated Background Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-linear-to-tr from-brand-violet/10 via-brand-pink/5 to-white rounded-full blur-[120px] -z-10 animate-pulse" />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-[12vw] md:text-[8vw] font-bold leading-[0.9] tracking-tighter uppercase text-zinc-900">
              PORTFOLIO
            </h1>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-zinc-500 font-medium tracking-widest text-xs uppercase">
              {PROFILE.titles.map((title, i) => (
                <span key={title} className="flex items-center">
                  {i !== 0 && <span className="mx-4 opacity-30">•</span>}
                  {title}
                </span>
              ))}
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 text-xl font-serif italic text-zinc-600"
            >
              {PROFILE.name}
            </motion.div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="w-[1px] h-12 bg-linear-to-b from-brand-violet to-transparent" />
          </motion.div>
        </section>

        {/* Section 2: About & Stats */}
        <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Photo Column */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-4 lg:col-span-5"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-brand-violet/10 rounded-[40px] blur-2xl group-hover:bg-brand-violet/20 transition-colors duration-500" />
                <img 
                      src="/images/regenerated_image_1777882474553.jpg" 
                      alt={PROFILE.name} 
                      className="relative w-full aspect-[3/4] object-cover rounded-[32px] shadow-2xl transition-all duration-700"
                    />
              </div>
            </motion.div>

            {/* Text Content Column */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-8 lg:col-span-7 space-y-10"
            >
              <div className="flex items-center space-x-2 text-brand-violet font-bold tracking-tighter">
                <span className="w-8 h-[2px] bg-brand-violet" />
                <span>ABOUT ME</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                覃安琪 <br />
                <span className="text-zinc-400 italic font-serif text-3xl">专业背景 × 3年跨领域实战</span>
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed font-light">
                {PROFILE.summary}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {PROFILE.tags.map(tag => (
                  <span key={tag} className="px-4 py-2 bg-zinc-100 text-zinc-700 text-xs font-bold rounded-lg hover:bg-brand-violet hover:text-white transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6">
                {PROFILE.stats.map((stat, i) => (
                  <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-2xl bg-zinc-900 text-white flex flex-col justify-center items-center text-center space-y-1 group hover:bg-brand-violet transition-colors duration-500"
                  >
                    <span className="text-2xl font-bold tracking-tighter">{stat.value}</span>
                    <span className="text-[8px] uppercase tracking-widest text-zinc-400 group-hover:text-white/80">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Experience & Education */}
        <section id="experience" className="py-32 bg-zinc-900 text-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-32">
            <div className="space-y-16">
              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-brand-violet font-bold tracking-tighter">
                  <span className="w-8 h-[2px] bg-brand-violet" />
                  <span>WORK HISTORY</span>
                </div>
                <h2 className="text-4xl font-bold tracking-tight">实战经历</h2>
              </div>
              <div className="space-y-12">
                {PROFILE.experience.slice(0, 2).map((exp, i) => (
                  <motion.div 
                    key={exp.company}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col md:flex-row gap-8 group"
                  >
                    <div className="text-xs font-mono text-zinc-500 pt-1 w-24 shrink-0 tracking-tighter">
                      {exp.period}
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xl font-bold tracking-tight group-hover:text-brand-violet transition-colors">{exp.company}</h4>
                      <p className="text-brand-violet font-semibold text-sm -mt-2">{exp.role}</p>
                      <ul className="space-y-2 pt-2">
                        {(exp as any).details?.map((detail: string, idx: number) => (
                          <li key={idx} className="text-zinc-400 text-xs font-light leading-relaxed flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-violet/40 mt-1 shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-20">
              <div className="space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 text-brand-violet font-bold tracking-tighter">
                    <span className="w-8 h-[2px] bg-brand-violet" />
                    <span>EDUCATION</span>
                  </div>
                  <h2 className="text-4xl font-bold tracking-tight">教育背景</h2>
                </div>
                <div className="space-y-12">
                  {PROFILE.education.map((edu, i) => (
                    <motion.div 
                      key={edu.school}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-8 group"
                    >
                      <div className="text-xs font-mono text-zinc-500 pt-1 w-24 shrink-0 tracking-tighter">
                        {edu.period}
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xl font-bold tracking-tight group-hover:text-brand-violet transition-colors">{edu.school}</h4>
                        <p className="text-zinc-400 font-light text-sm">{edu.major}</p>
                        <div className="text-[10px] text-zinc-500 font-mono italic">Graduate GPA: 4.3/5.0 (Top 10%)</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 text-brand-violet font-bold tracking-tighter">
                    <span className="w-8 h-[2px] bg-brand-violet" />
                    <span>INTERNSHIPS</span>
                  </div>
                  <h2 className="text-xl font-bold tracking-tight opacity-50 uppercase tracking-widest text-zinc-400">实习经历</h2>
                </div>
                <div className="space-y-10">
                  {PROFILE.experience.slice(2).map((exp, i) => (
                    <motion.div 
                      key={exp.company}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                      className="flex flex-col gap-4 group"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-bold tracking-tight group-hover:text-brand-violet transition-colors">{exp.company}</h4>
                          <p className="text-brand-violet font-medium text-xs">{exp.role}</p>
                        </div>
                        <div className="text-[10px] font-mono text-zinc-500 tracking-tighter">
                          {exp.period}
                        </div>
                      </div>
                      <ul className="space-y-1.5">
                        {(exp as any).details?.map((detail: string, idx: number) => (
                          <li key={idx} className="text-zinc-400 text-[11px] font-light leading-relaxed flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-zinc-600 mt-1.5 shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Capabilities */}
        <section className="py-20 bg-zinc-100/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-6">
              {CAPABILITIES.map((cap, i) => (
                <motion.div 
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative p-10 bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative z-10 space-y-6">
                    <div className="p-3 w-fit bg-zinc-50 rounded-2xl group-hover:bg-brand-violet group-hover:text-white transition-colors duration-300">
                      {i === 0 && <TrendingUp size={24} />}
                      {i === 1 && <TvMinimalPlay size={24} />}
                      {i === 2 && <Layout size={24} />}
                      {i === 3 && <Cpu size={24} />}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold tracking-tighter mb-1">{cap.title}</h3>
                      <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">{cap.subtitle}</p>
                    </div>
                    <p className="text-sm text-zinc-500 leading-relaxed font-light">
                      {cap.desc}
                    </p>
                  </div>
                  {/* Decorative background number */}
                  <div className="absolute -bottom-10 -right-10 text-[180px] font-black text-zinc-50 select-none -z-0 group-hover:text-brand-violet/5 transition-colors duration-500">
                    {i + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Portfolio Showcase (Moved Down) */}
        <section id="portfolio" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-brand-violet font-bold tracking-tighter">
                  <span className="w-8 h-[2px] bg-brand-violet" />
                  <span>CASE EXPLORATION</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">案例深潜</h2>
              </div>
              <p className="max-w-md text-zinc-500 font-light leading-relaxed">
                每一个项目都是从0到1的重塑，不仅是方案的交付，更是对行业认知的沉淀与SOP的不断进化。
              </p>
            </div>

            <div className="space-y-40">
              {PROJECTS.map((project, idx) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}
                >
                  {/* Visual Image / Gallery */}
                  {project.id === "02" ? (
                    /* Project 02 - Compact Grid */
                    <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 py-6">
                      {[
                        { src: "/images/regenerated_image_1777971707699.png", rotate: "-1deg" },
                        { src: "/images/regenerated_image_1777971710809.png", rotate: "1.5deg" },
                        { src: "/images/regenerated_image_1777971713441.png", rotate: "0.2deg" },
                        { src: "/images/regenerated_image_1777971717206.png", rotate: "-0.5deg" }
                      ].map((item, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, scale: 0.8, y: 20 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                          className="relative select-none"
                        >
                          <div 
                            className="relative shadow-xl hover:shadow-brand-violet/20 transition-all duration-700 bg-white p-1 rounded-sm border border-zinc-50 overflow-hidden"
                            style={{ rotate: item.rotate }}
                          >
                            <img 
                              src={item.src} 
                              className="w-full aspect-video object-cover" 
                              alt={`Key Visual ${i + 1}`}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="w-full md:w-1/2 aspect-video md:aspect-square lg:aspect-4/3 rounded-[40px] relative overflow-hidden group shadow-2xl">
                      {project.cover ? (
                        <img 
                          src={project.cover} 
                          alt={project.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 text-zinc-300 font-serif text-6xl uppercase italic tracking-widest select-none">
                          Project {project.id}
                        </div>
                      )}
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-brand-violet/0 group-hover:bg-brand-violet/10 transition-colors duration-500" />
                      
                      {/* Decorative Label */}
                      <div className="absolute bottom-10 left-10 text-[10px] font-mono text-white/50 tracking-[0.4em] uppercase -rotate-90 origin-left opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        Visual Exploration
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="w-full md:w-1/2 space-y-8">
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-zinc-100 text-[10px] font-bold tracking-widest text-zinc-500 rounded-full">{project.id}</span>
                      <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase">{project.category}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold leading-tight">{project.title}</h3>
                    
                    <div className="space-y-6">
                      {project.challenge && (
                        <div className="space-y-2">
                          <p className="text-[10px] font-black uppercase text-brand-violet tracking-widest">The Challenge</p>
                          <p className="text-sm text-zinc-600 leading-relaxed">{project.challenge}</p>
                        </div>
                      )}
                      {project.solution && (
                        <div className="space-y-2">
                          <p className="text-[10px] font-black uppercase text-brand-violet tracking-widest">My Solution</p>
                          <p className="text-sm text-zinc-600 leading-relaxed">{project.solution}</p>
                        </div>
                      )}
                      {project.desc && (
                        <p className="text-sm text-zinc-600 leading-relaxed">{project.desc}</p>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold text-zinc-400">#{tag}</span>
                      ))}
                    </div>

                    <motion.button 
                      whileHover={{ x: 5 }}
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-4 group text-sm font-bold tracking-widest uppercase py-4 border-b border-zinc-200 hover:border-brand-violet transition-colors"
                    >
                      查看完整案例 <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Contact / Footer */}
        <section id="contact" className="relative py-40 bg-zinc-50 border-t border-zinc-200 overflow-hidden">
          {/* Subtle logo background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-black text-zinc-100 select-none -z-0 uppercase italic tracking-tighter opacity-30">
            ANQI
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-16">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="space-y-6"
            >
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase italic font-serif">
                期待交流
              </h2>
              <p className="text-zinc-500 text-lg font-light tracking-wide italic">
                Let's rewrite the algorithm of content together.
              </p>
            </motion.div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <a 
                href={`mailto:${PROFILE.contact.email}`}
                className="flex flex-col items-center gap-4 group"
              >
                <div className="p-6 bg-white rounded-full shadow-lg group-hover:bg-brand-violet group-hover:text-white transition-all duration-300">
                  <Mail size={32} />
                </div>
                <div className="text-center">
                  <p className="text-[10px] font-black tracking-widest text-zinc-400 uppercase mb-1">Email</p>
                  <p className="font-bold tracking-tight">{PROFILE.contact.email}</p>
                </div>
              </a>

              <div className="w-[1px] h-20 bg-zinc-200 hidden md:block" />

              <a 
                href={`tel:${PROFILE.contact.tel}`}
                className="flex flex-col items-center gap-4 group"
              >
                <div className="p-6 bg-white rounded-full shadow-lg group-hover:bg-brand-violet group-hover:text-white transition-all duration-300">
                  <Phone size={32} />
                </div>
                <div className="text-center">
                  <p className="text-[10px] font-black tracking-widest text-zinc-400 uppercase mb-1">Phone / WeChat</p>
                  <p className="font-bold tracking-tight">{PROFILE.contact.tel}</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-zinc-100 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs text-zinc-400 font-medium tracking-widest uppercase">
            © 2026 {PROFILE.enName}. Built for the future of communication.
          </p>
          <div className="flex space-x-6">
            <span className="text-[8px] font-black tracking-tighter uppercase text-zinc-300">Strategy</span>
            <span className="text-[8px] font-black tracking-tighter uppercase text-zinc-300">Creative</span>
            <span className="text-[8px] font-black tracking-tighter uppercase text-zinc-300">Technology</span>
            <span className="text-[8px] font-black tracking-tighter uppercase text-zinc-300">Vision</span>
          </div>
        </div>
      </footer>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-zinc-900/80 backdrop-blur-xl"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl max-h-full bg-white rounded-[40px] shadow-2xl overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 p-3 bg-zinc-100 rounded-full hover:bg-brand-violet hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="p-8 md:p-16 space-y-16">
                {/* Header */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-zinc-100 text-[10px] font-bold tracking-widest text-zinc-500 rounded-full">{selectedProject.id}</span>
                    <span className="text-xs font-bold tracking-widest text-brand-violet uppercase">{selectedProject.category}</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tight">{selectedProject.title}</h2>
                </div>



                <div className="grid md:grid-cols-12 gap-16">
                  <div className="md:col-span-12 space-y-12">
                    {/* Deep Dive */}
                    <div className="space-y-8">
                      <div className="flex items-center gap-3 text-brand-violet">
                        <Target size={20} />
                        <h4 className="text-sm font-black uppercase tracking-widest">Deep Dive & Methodology</h4>
                      </div>
                      <div className="grid md:grid-cols-3 gap-8">
                        {selectedProject.fullCase?.deepDive.map((item: string, i: number) => (
                          <div key={i} className="space-y-4">
                            <span className="text-xs font-mono text-zinc-300">Step 0{i + 1}</span>
                            <p className="text-sm text-zinc-600 leading-relaxed font-light">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Sub Projects / Cases */}
                    {selectedProject.fullCase?.subCases && (
                      <div className="space-y-32">
                        {selectedProject.fullCase.subCases.map((sub: any, subIdx: number) => (
                          <div key={subIdx} className="group/sub space-y-12">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-100">
                              <div className="space-y-4 max-w-2xl">
                                <span className="text-[10px] font-black tracking-[0.4em] text-brand-violet uppercase">Case Phase 0{subIdx + 1}</span>
                                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">{sub.title}</h3>
                                <p className="text-sm text-zinc-500 leading-relaxed font-light">{sub.desc}</p>
                                {sub.qrCode && (
                                  <div className="flex items-start gap-4 mt-6">
                                    <div className="p-2 bg-white rounded-xl shadow-sm border border-zinc-100 group-hover:border-brand-violet/30 transition-colors">
                                      <img 
                                        src={sub.qrCode} 
                                        alt="QR Code" 
                                        className="w-24 h-24 object-contain"
                                        loading="lazy"
                                      />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                      <div className="flex items-center gap-1.5 text-brand-violet text-[10px] font-black uppercase tracking-widest mb-1">
                                        <QrCode size={10} />
                                        <span>Scan to Watch</span>
                                      </div>
                                      <p className="text-xs text-zinc-400 font-light max-w-[120px]">扫码即可预览<br/>完整作品视频</p>
                                    </div>
                                  </div>
                                )}
                                {sub.videoUrl && (
                                  <a 
                                    href={sub.videoUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-brand-violet/5 text-brand-violet text-xs font-bold rounded-lg hover:bg-brand-violet hover:text-white transition-all group"
                                  >
                                    <TvMinimalPlay size={14} className="group-hover:scale-110 transition-transform" />
                                    <span>点击观看作品 (Watch Video)</span>
                                    <ExternalLink size={12} className="opacity-50" />
                                  </a>
                                )}
                              </div>
                            </div>
                            
                            {/* Conditional Rendering: Poster Gallery OR Image Grid OR Full-Width Slides */}
                            {sub.posters ? (
                              <div className="space-y-24">
                                {sub.posters.map((poster: any, pIdx: number) => (
                                  <motion.div 
                                    key={pIdx}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.2, delay: pIdx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    viewport={{ once: true }}
                                    className="relative group/poster"
                                  >
                                    <div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-900 shadow-2xl group-hover/poster:shadow-brand-violet/20 transition-all duration-1000 border border-zinc-100">
                                      <img 
                                        src={poster.image} 
                                        alt={poster.title || "Poster"} 
                                        className="w-full h-auto object-contain transition-transform duration-1000" 
                                      />
                                      {/* Gradient Overlay for subtle depth */}
                                      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-zinc-900/10 opacity-0 group-hover/poster:opacity-100 transition-opacity duration-700" />
                                    </div>
                                    {poster.title && (
                                      <div className="mt-8 flex items-center justify-between px-4">
                                        <div className="space-y-1">
                                          <span className="text-[10px] font-black tracking-widest text-brand-violet uppercase">Key Visual 0{pIdx + 1}</span>
                                          <h4 className="text-2xl font-bold text-zinc-900">{poster.title}</h4>
                                        </div>
                                        <div className="h-px w-24 bg-zinc-100" />
                                      </div>
                                    )}
                                  </motion.div>
                                ))}
                              </div>
                            ) : sub.isFullWidth ? (
                              <div className="space-y-20">
                                {sub.images?.map((img: string, i: number) => (
                                  <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="group flex flex-col gap-6"
                                  >
                                    <div className="relative overflow-hidden rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-zinc-100 bg-white">
                                      <img 
                                        src={img} 
                                        alt={sub.imageLabels?.[i] || `Project Slide ${i+1}`} 
                                        className="w-full h-auto object-contain select-none transition-transform duration-700 group-hover:scale-[1.01]" 
                                      />
                                    </div>
                                    <div className="flex items-center gap-6 px-10">
                                      <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-black text-brand-violet px-2 py-0.5 bg-brand-violet/5 rounded">SLIDE 0{i + 1}</span>
                                      </div>
                                      <div className="h-px grow bg-zinc-100" />
                                      <span className="text-xs font-bold text-zinc-400 tracking-tight">{sub.imageLabels?.[i]}</span>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            ) : (
                              <div className={`grid gap-6 ${sub.imageCount === 4 ? 'grid-cols-2 lg:grid-cols-4' : 'grid-cols-2 md:grid-cols-3'}`}>
                                {Array.from({ length: sub.imageCount || 0 }).map((_, i) => (
                                  <div key={i} className={`relative overflow-hidden rounded-3xl bg-zinc-50 border border-zinc-100 shadow-sm ${['02', '03'].includes(selectedProject?.id || '') ? 'aspect-video' : 'aspect-square'}`}>
                                    {sub.images?.[i] ? (
                                      <img 
                                        src={sub.images[i]} 
                                        alt={sub.imageLabels?.[i] || `现场照片 ${i + 1}`} 
                                        className="w-full h-full object-cover select-none" 
                                      />
                                    ) : (
                                      <div className="w-full h-full border border-dashed border-zinc-200 flex items-center justify-center bg-zinc-50/50">
                                        <div className="text-center space-y-2">
                                          <span className="text-[10px] font-bold tracking-widest text-zinc-300 uppercase block">
                                            {sub.imageLabels?.[i] || "现场图片位"}
                                          </span>
                                          <span className="text-[8px] font-mono text-zinc-300 block">IMAGE_0{i + 1}</span>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Action */}
                <div className="pt-8 flex justify-center">
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="px-10 py-5 bg-zinc-100 text-zinc-900 rounded-full font-bold text-sm tracking-widest hover:bg-brand-violet hover:text-white transition-all"
                  >
                    关闭案例详情
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

