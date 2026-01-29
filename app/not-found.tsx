'use client';

import { useEffect, useState } from 'react';
import { Home, ArrowLeft, Search } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#E8E4D9' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(139, 142, 122, 0.3) 0%, transparent 70%)`,
              animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        {/* 404 Number with Parallax */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        >
          <h1 className="text-[150px] md:text-[200px] font-serif font-bold leading-none mb-4" style={{ color: '#8B8E7A' }}>
            404
          </h1>
        </div>

        {/* Animated Divider */}
        <div
          className={`flex items-center justify-center gap-4 mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        >
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-gray-400"></div>
          <Search className="w-6 h-6 text-gray-500 animate-pulse" />
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-gray-400"></div>
        </div>

        {/* Text Content */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-gray-700 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
            Oops! The page you're looking for seems to have wandered off.
            <br className="hidden md:block" />
            Let's get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Link
            href="/"
            className="group flex items-center gap-2 px-8 py-3 bg-white text-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Go Home</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="group flex items-center gap-2 px-8 py-3 bg-gray-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-gray-400"
              style={{
                animation: `bounce 1.5s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.1);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}