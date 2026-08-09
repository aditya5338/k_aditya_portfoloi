import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { number: '3+', label: 'Years of Experience' },
    { number: '7+', label: 'Projects Built' },
    { number: '5+', label: 'Communities Led' },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-black pt-32 md:pt-44 pb-10 md:pb-14 px-6 overflow-hidden"
    >
      {/* Subtle radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(255,255,255,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-white/40 text-sm tracking-[0.2em] uppercase font-body mb-6"
        >
          About Me
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight font-display"
        >
          Pioneering ideas with
          <br className="hidden md:block" />
          <span className="font-display italic text-white/60"> code, creativity</span>
          <br />
          and a vision for the future.
        </motion.h2>

        {/* Body Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-white/50 text-base md:text-lg leading-relaxed font-body mt-12 max-w-2xl"
        >
          I'm Aditya Kumar, a Computer Science Engineering student at Dr. A.P.J. Abdul Kalam
          Technical University. My journey revolves around crafting web experiences and integrating
          AI to solve real-world problems. From building mental health chatbots to productivity
          apps, I believe technology should empower people.
        </motion.p>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-8 md:gap-16 mt-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-white text-3xl md:text-4xl font-display">{stat.number}</span>
              <span className="text-white/40 text-sm font-body mt-1">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
