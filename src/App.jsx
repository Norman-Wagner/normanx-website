import { useState } from 'react'
import './App.css'
import norman01 from './assets/norman_01.png'
import norman02 from './assets/norman_02.png'
import norman03 from './assets/norman_03.png'

function App() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [norman01, norman02, norman03]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              NORMAN X
            </h1>
            <h2 className="text-3xl font-semibold text-gray-300">
              Digital Alpha
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Tech • Fitness • Mindset
            </p>
            <p className="text-lg text-gray-500">
              Die Reise vom Jetzt zur Vision. Authentisch. Real. Ungeschönt.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex gap-4 pt-6">
              <a 
                href="https://instagram.com/normanx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:scale-105 transition-transform"
              >
                Follow auf Instagram
              </a>
              <a 
                href="https://fanvue.com/normanx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/20 transition-colors"
              >
                Exklusiver Content
              </a>
            </div>
          </div>

          {/* Right: Image Gallery */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/50">
              <img 
                src={images[currentImage]} 
                alt="Norman X" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Image Navigation */}
            <div className="flex justify-center gap-3 mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentImage === index 
                      ? 'bg-purple-500 w-8' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h3 className="text-4xl font-bold">Die Reise</h3>
          <p className="text-xl text-gray-400 leading-relaxed">
            Willkommen bei Norman X. Hier teile ich meine Transformation – von der Realität zur Vision. 
            Kein Filter. Keine Lügen. Nur der Weg eines Mannes, der beschlossen hat, seine beste Version zu werden.
          </p>
          <div className="grid md:grid-cols-3 gap-8 pt-12">
            <div className="space-y-3">
              <div className="text-5xl">💪</div>
              <h4 className="text-xl font-semibold">Fitness</h4>
              <p className="text-gray-500">Dein Körper ist dein einziges echtes Asset</p>
            </div>
            <div className="space-y-3">
              <div className="text-5xl">⚡</div>
              <h4 className="text-xl font-semibold">Tech</h4>
              <p className="text-gray-500">Die Zukunft gehört denen, die sie programmieren</p>
            </div>
            <div className="space-y-3">
              <div className="text-5xl">🧠</div>
              <h4 className="text-xl font-semibold">Mindset</h4>
              <p className="text-gray-500">Disziplin schlägt Motivation. Jeden Tag.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h3 className="text-4xl font-bold">Join the Evolution</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="https://instagram.com/normanx" target="_blank" rel="noopener noreferrer" 
               className="p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl hover:scale-105 transition-transform">
              <div className="text-3xl mb-2">📸</div>
              <div className="font-semibold">Instagram</div>
            </a>
            <a href="https://twitter.com/normanx_alpha" target="_blank" rel="noopener noreferrer"
               className="p-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl hover:scale-105 transition-transform">
              <div className="text-3xl mb-2">🐦</div>
              <div className="font-semibold">Twitter</div>
            </a>
            <a href="https://fanvue.com/normanx" target="_blank" rel="noopener noreferrer"
               className="p-6 bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-xl hover:scale-105 transition-transform">
              <div className="text-3xl mb-2">💎</div>
              <div className="font-semibold">Fanvue</div>
            </a>
            <a href="https://tiktok.com/@normanx" target="_blank" rel="noopener noreferrer"
               className="p-6 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl hover:scale-105 transition-transform">
              <div className="text-3xl mb-2">🎵</div>
              <div className="font-semibold">TikTok</div>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center text-gray-500 border-t border-gray-800">
        <p>© 2025 Norman X. All rights reserved.</p>
        <p className="mt-2 text-sm">Digital Alpha • Tech • Fitness • Mindset</p>
      </footer>
    </div>
  )
}

export default App

