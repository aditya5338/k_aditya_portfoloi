import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillCategories = [
  {
    label: 'Languages',
    items: ['C', 'C++', 'JavaScript'],
  },
  {
    label: 'Web',
    items: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    label: 'AI Tools',
    items: ['Claude', 'ChatGPT', 'Gemini', 'Cursor'],
  },
  {
    label: 'Design & Community',
    items: ['Figma', 'Canva', 'Video Editing', 'Social Media Strategy'],
  },
]

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-black py-28 md:py-40 px-6 overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl text-white tracking-tight font-display mb-16"
        >
          My Toolkit
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * i }}
              className="liquid-glass rounded-2xl p-5 md:p-6"
            >
              <p className="text-white/40 text-xs tracking-[0.2em] uppercase font-body mb-4">
                {category.label}
              </p>
              <div className="flex flex-col gap-2">
                {category.items.map((item) => (
                  <span key={item} className="text-white text-base md:text-lg font-body">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
