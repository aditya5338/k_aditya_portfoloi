import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function PhilosophySection() {
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
          className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-16 md:mb-24 font-display"
        >
          <span className="font-display italic text-white/40">Innovation</span> meets Vision
        </motion.h2>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left — Video */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl overflow-hidden aspect-[4/3]"
          >
            <video
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
            >
              <source
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
                type="video/mp4"
              />
            </video>
          </motion.div>

          {/* Right — Text Blocks */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            {/* Block 1 */}
            <div>
              <p className="text-white/40 text-xs tracking-[0.2em] uppercase font-body mb-4">
                My Approach
              </p>
              <p className="text-white/60 text-base md:text-lg leading-relaxed font-body">
                Every meaningful breakthrough begins at the intersection of disciplined strategy
                and remarkable creative vision. I operate at that crossroads, turning bold thinking
                into tangible outcomes through code that moves people and reshapes experiences.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/10 my-8" />

            {/* Block 2 */}
            <div>
              <p className="text-white/40 text-xs tracking-[0.2em] uppercase font-body mb-4">
                What Drives Me
              </p>
              <p className="text-white/60 text-base md:text-lg leading-relaxed font-body">
                I believe the best work emerges when curiosity meets conviction. My process is
                designed to uncover hidden opportunities and translate them into experiences that
                resonate long after the first impression. From AI integration to community building,
                I'm driven by impact.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
