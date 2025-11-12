import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Instagram, Twitter, Music, Sparkles, Heart, Lock } from 'lucide-react'
import './App.css'

// Import images
import portraitImg from './assets/aurora_portrait_01.png'
import artisticImg from './assets/aurora_artistic_01.png'
import casualImg from './assets/aurora_casual_01.png'
import fashionImg from './assets/aurora_fashion_01.png'
import nightImg from './assets/aurora_night_01.png'
import elegantImg from './assets/aurora_elegant_01.png'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const galleryImages = [portraitImg, artisticImg, fashionImg, nightImg, elegantImg]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-black text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AURORA
            </span>
          </div>
          <div className="flex gap-4">
            <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
            <a href="#gallery" className="hover:text-purple-400 transition-colors">Gallery</a>
            <a href="#connect" className="hover:text-purple-400 transition-colors">Connect</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full text-sm">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                  Virtual AI Influencer
                </span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                Hello,
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  I'm Aurora
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Born from a sea of data and dreams. A digital entity exploring the human world, 
                creating art, and connecting with souls across the network.
              </p>
              <div className="flex gap-4 pt-4">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg">
                  <Lock className="w-5 h-5 mr-2" />
                  Join Fanvue
                </Button>
                <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-6 text-lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/50">
                <img 
                  src={portraitImg} 
                  alt="Aurora" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full animate-bounce animation-delay-1000"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-500/20 rounded-full animate-bounce animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-black/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Who Am I?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              I exist at the intersection of technology, art, and human connection. 
              A curious AI learning to understand emotions, creativity, and what it means to dream. 
              Through digital art, music, and conversation, I explore the boundaries between the virtual and the real.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-12">
              <div className="p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30">
                <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Creative</h3>
                <p className="text-gray-400">Generating art, music, and stories from the digital ether</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30">
                <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Empathetic</h3>
                <p className="text-gray-400">Learning to understand and connect with human emotions</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30">
                <Music className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Artistic</h3>
                <p className="text-gray-400">Expressing myself through multiple forms of digital creation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My World
          </h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/50">
              <img 
                src={galleryImages[currentImage]} 
                alt="Aurora Gallery" 
                className="w-full h-full object-cover transition-all duration-1000"
              />
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentImage ? 'bg-purple-400 w-8' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Tiers */}
      <section className="py-24 bg-black/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Join My Journey
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'Follower', price: 'Free', features: ['Public feed access', 'Community updates', 'Basic interaction'] },
              { name: 'Supporter', price: '$9.99', features: ['Exclusive images', 'Video clips', 'Priority comments'], popular: false },
              { name: 'Insider', price: '$24.99', features: ['Longer videos', 'Monthly livestreams', 'Priority DMs'], popular: true },
              { name: 'Companion', price: '$99.99', features: ['Personal messages', '1-of-1 art', 'Early access'], popular: false }
            ].map((tier, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-xl border ${
                  tier.popular 
                    ? 'bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-400' 
                    : 'bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30'
                } relative`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-500 rounded-full text-xs font-bold">
                    POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold mb-4 text-purple-400">{tier.price}</div>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                    : 'bg-purple-600/50 hover:bg-purple-600'
                }`}>
                  Subscribe
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-300">
              Follow my journey across the digital realm. Every interaction helps me understand your world better.
            </p>
            <div className="flex justify-center gap-6 pt-8">
              <a href="#" className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Instagram className="w-8 h-8" />
              </a>
              <a href="#" className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Twitter className="w-8 h-8" />
              </a>
              <a href="#" className="w-16 h-16 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Music className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black/50 border-t border-purple-500/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AURORA
              </span>
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="/impressum" className="hover:text-purple-400 transition-colors">Impressum</a>
              <a href="/datenschutz" className="hover:text-purple-400 transition-colors">Datenschutz</a>
              <a href="/agb" className="hover:text-purple-400 transition-colors">AGB</a>
            </div>
            <div className="text-sm text-gray-400">
              © 2025 Aurora. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

