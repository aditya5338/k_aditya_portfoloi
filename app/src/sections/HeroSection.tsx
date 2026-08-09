import { useRef, useEffect, useCallback } from 'react'
import { Globe, Github, Twitter, Linkedin, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleCanPlay = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    video.play()
    fadeOpacity(video, 0, 1, 500)
  }, [])

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    const remaining = video.duration - video.currentTime
    if (remaining <= 0.55 && video.style.opacity !== '0') {
      fadeOpacity(video, parseFloat(video.style.opacity) || 1, 0, 500)
    }
  }, [])

  const handleEnded = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    video.style.opacity = '0'
    setTimeout(() => {
      video.currentTime = 0
      video.play()
      fadeOpacity(video, 0, 1, 500)
    }, 100)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('ended', handleEnded)

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('ended', handleEnded)
    }
  }, [handleCanPlay, handleTimeUpdate, handleEnded])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex flex-col bg-black overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-bottom"
        style={{ opacity: 0 }}
        muted
        autoPlay
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
          type="video/mp4"
        />
      </video>

      {/* Video Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      {/* Navbar */}
      <nav className="relative z-20 px-4 md:px-6 py-4 md:py-6">
        <div className="liquid-glass rounded-full max-w-5xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 md:w-6 md:h-6 text-white/80" />
            <span className="text-white font-semibold text-base md:text-lg font-body">Aditya Kumar</span>
            <div className="hidden md:flex items-center gap-6 ml-8">
              <button onClick={() => scrollToSection('about')} className="text-white/60 hover:text-white text-sm font-medium font-body transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-white/60 hover:text-white text-sm font-medium font-body transition-colors">Projects</button>
              <button onClick={() => scrollToSection('experience')} className="text-white/60 hover:text-white text-sm font-medium font-body transition-colors">Experience</button>
              <button onClick={() => scrollToSection('connect')} className="text-white/60 hover:text-white text-sm font-medium font-body transition-colors">Connect</button>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <a
              href="https://drive.google.com/file/d/1resume/view"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block text-white/80 hover:text-white text-sm font-medium font-body transition-colors"
            >
              Resume
            </a>
            <button
              onClick={() => scrollToSection('connect')}
              className="liquid-glass rounded-full px-4 md:px-6 py-2 text-white text-xs md:text-sm font-medium font-body hover:bg-white/5 transition-colors"
            >
              Let's Talk
            </button>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-30 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8">
            <button onClick={() => setMobileMenuOpen(false)} className="absolute top-6 right-6 text-white/80 hover:text-white">
              <X className="w-6 h-6" />
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white text-2xl font-display">About</button>
            <button onClick={() => scrollToSection('projects')} className="text-white text-2xl font-display">Projects</button>
            <button onClick={() => scrollToSection('experience')} className="text-white text-2xl font-display">Experience</button>
            <button onClick={() => scrollToSection('connect')} className="text-white text-2xl font-display">Connect</button>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center" style={{ transform: 'translateY(-8%)' }}>
        {/* Heading */}
        <h1 className="max-w-4xl text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] text-white tracking-normal font-display">
          <span className="block">Code with</span>
          <span className="block italic text-white/65">purpose</span>
        </h1>

        {/* CTA Row */}
        <div className="flex items-center gap-4 mt-10">
          <button
            onClick={() => scrollToSection('projects')}
            className="liquid-glass rounded-full px-6 md:px-8 py-3 text-white text-sm font-medium font-body hover:bg-white/5 transition-colors"
          >
            View Projects
          </button>
        </div>
      </div>

      {/* Social Icons Footer */}
      <div className="relative z-10 flex justify-center gap-4 pb-8 md:pb-12">
        <a
          href="https://github.com/aditya5338"
          target="_blank"
          rel="noopener noreferrer"
          className="liquid-glass rounded-full p-3 md:p-4 text-white/60 hover:text-white hover:bg-white/5 transition-all"
          aria-label="GitHub"
        >
          <Github className="w-4 h-4 md:w-5 md:h-5" />
        </a>
        <a
          href="https://x.com/adityakumar5338"
          target="_blank"
          rel="noopener noreferrer"
          className="liquid-glass rounded-full p-3 md:p-4 text-white/60 hover:text-white hover:bg-white/5 transition-all"
          aria-label="X/Twitter"
        >
          <Twitter className="w-4 h-4 md:w-5 md:h-5" />
        </a>
        <a
          href="https://linkedin.com/in/adityakumar"
          target="_blank"
          rel="noopener noreferrer"
          className="liquid-glass rounded-full p-3 md:p-4 text-white/60 hover:text-white hover:bg-white/5 transition-all"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
        </a>
      </div>
    </section>
  )
}

// Helper function for opacity animation
function fadeOpacity(el: HTMLElement, from: number, to: number, duration: number) {
  const start = performance.now()
  function tick(now: number) {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    el.style.opacity = String(from + (to - from) * progress)
    if (progress < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}
