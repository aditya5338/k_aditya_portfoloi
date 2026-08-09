import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'AURORA',
    tag: 'AI & Mental Health',
    description:
      'AI-powered mental health chatbot with conversational interface to help users reflect on emotional well-being.',
    link: 'github.com/aditya5338/AURORA',
    videoUrl:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4',
  },
  {
    title: 'HabitForge',
    tag: 'Productivity',
    description:
      'All-in-one productivity app with habit tracking, journaling, calendar, reminders, expense tracking, secure vault, and AI suggestions.',
    link: 'github.com/aditya5338/habitforge',
    videoUrl:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4',
  },
]

const experiences = [
  { role: 'Community Coordinator, Moderator & Social Media Manager', org: 'OSEN', period: 'Jan 2026 – Present' },
  { role: 'Evangelist & Technical Speaker', org: 'OSEN', period: 'Early 2026' },
  { role: 'Video Editor', org: 'OSEN', period: 'Jan 2026' },
  { role: 'Executive Team Member', org: 'Techfest IIT Bombay & IIT Delhi Zonals', period: '2025 – Present' },
  { role: 'Campus Ambassador', org: 'Techfest IIT Bombay', period: '2024 – 2025' },
  { role: 'Google Campus Ambassador', org: 'Google Developer Ecosystem', period: '2024 – Dec 2025' },
  { role: 'HCL GUVI Campus Ambassador', org: 'HCL & GUVI', period: '2024 – Present' },
]

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="bg-black py-28 md:py-40 px-6 overflow-hidden" ref={ref}>
      {/* Subtle radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.02) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex justify-between items-end mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl text-white tracking-tight font-display">
            What I've Built
          </h2>
          <span className="hidden md:block text-white/40 text-sm font-body">Projects & Roles</span>
        </motion.div>

        {/* Two-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 * i }}
              className="liquid-glass rounded-3xl overflow-hidden group"
            >
              {/* Video Area */}
              <div className="relative aspect-video overflow-hidden">
                <video
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                  aria-hidden="true"
                >
                  <source src={project.videoUrl} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-3">
                  <span className="uppercase tracking-[0.2em] text-white/40 text-xs font-body">
                    {project.tag}
                  </span>
                  <a
                    href={`https://${project.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="liquid-glass rounded-full p-2 text-white/60 hover:text-white transition-colors"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
                <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight font-display">
                  {project.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed font-body">
                  {project.description}
                </p>
                <a
                  href={`https://${project.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-white/60 text-xs font-body mt-4 inline-block transition-colors"
                >
                  {project.link}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Section */}
        <motion.div
          id="experience"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 md:mt-28"
        >
          <h3 className="text-2xl md:text-3xl text-white tracking-tight font-display mb-8">
            Experience & Leadership
          </h3>

          <div className="flex flex-col">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.role}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.05 }}
                className="flex flex-col md:flex-row md:justify-between md:items-center py-5 border-b border-white/10"
              >
                <div className="flex-1">
                  <p className="text-white text-base font-medium font-body">{exp.role}</p>
                  <p className="text-white/40 text-sm font-body mt-0.5">{exp.org}</p>
                </div>
                <p className="text-white/40 text-sm font-body mt-1 md:mt-0 md:ml-8 shrink-0">
                  {exp.period}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
