import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export default function FeaturedVideoSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-black pt-6 md:pt-10 pb-20 md:pb-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="rounded-3xl overflow-hidden aspect-video relative"
        >
          {/* Video */}
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
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4"
              type="video/mp4"
            />
          </video>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Bottom Overlay Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              {/* Left Card */}
              <div className="liquid-glass rounded-2xl p-5 md:p-8 max-w-md">
                <p className="text-white/50 text-xs tracking-[0.2em] uppercase font-body mb-3">
                  Featured Project
                </p>
                <p className="text-white text-sm md:text-base leading-relaxed font-body">
                  AURORA — An AI-powered mental health chatbot designed to help users reflect on
                  their emotional well-being through conversational interfaces.
                </p>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {['HTML', 'CSS', 'JavaScript', 'AI API'].map((tech) => (
                    <span
                      key={tech}
                      className="liquid-glass rounded-full px-3 py-1 text-white/60 text-xs font-body"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Button */}
              <motion.a
                href="https://github.com/aditya5338/AURORA"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass rounded-full px-6 md:px-8 py-3 text-white text-sm font-medium font-body inline-flex items-center gap-2 hover:bg-white/5 transition-colors self-start md:self-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Project <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
