import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const education = [
  {
    title: 'B.Tech Computer Science Engineering',
    subtitle: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU)',
    year: '2024 – Present',
  },
  {
    title: 'Class 12th',
    subtitle: '',
    year: '2023',
  },
  {
    title: 'Class 10th',
    subtitle: '',
    year: '2021',
  },
]

export default function EducationSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-black py-20 md:py-32 px-6 overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl text-white tracking-tight font-display mb-12"
        >
          Education
        </motion.h2>

        {/* Education Cards */}
        <div className="flex flex-col gap-4 md:gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 * i }}
              className="liquid-glass rounded-2xl p-5 md:p-8 flex flex-col md:flex-row md:justify-between md:items-center"
            >
              <div>
                <h3 className="text-white text-lg md:text-xl font-display">{edu.title}</h3>
                {edu.subtitle && (
                  <p className="text-white/50 text-sm font-body mt-1">{edu.subtitle}</p>
                )}
              </div>
              <p className="text-white/40 text-sm font-body mt-2 md:mt-0 shrink-0">{edu.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
