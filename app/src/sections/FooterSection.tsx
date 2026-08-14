import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, Linkedin,   } from 'lucide-react'

export default function FooterSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="connect"
      className="relative bg-black py-20 md:py-32 px-6 overflow-hidden"
      ref={ref}
    >
      {/* Subtle radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255,255,255,0.02) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight font-display"
        >
          Let's <span className="font-display italic">Build</span> Something
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/50 text-base md:text-lg font-body mt-6 max-w-lg"
        >
          Open to collaborations, community roles, and creative projects.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          <a
            href="mailto:adityakumar5338@gmail.com"
            className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium font-body hover:bg-white/5 transition-colors"
          >
            Get In Touch
          </a>
          <a
            href="https://github.com/aditya5338"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium font-body hover:bg-white/5 transition-colors"
          >
            View GitHub
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex justify-center gap-6 mt-16"
        >
          <a
            href="https://github.com/aditya5338"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/40 hover:text-white text-sm font-body transition-colors"
          >
            <Github className="w-4 h-4" /> github.com/aditya5338
          </a>
          <a
            href="https://x.com/adibuilds5"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/40 hover:text-white text-sm font-body transition-colors"
          >
            <Twitter className="w-4 h-4" /> x.com/adibuilds5
          </a>
          <a
            href="https://www.linkedin.com/in/adityakumar533"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/40 hover:text-white text-sm font-body transition-colors"
          >
            <Linkedin className="w-4 h-4" /> linkedin.com/in/adityakumar533
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-white/30 text-xs font-body mt-20"
        >
          &copy; {new Date().getFullYear()} Aditya Kumar. All rights reserved.
        </motion.p>
      </div>
    </section>
  )
}

