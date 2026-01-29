'use client';

import { useEffect, useState } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  

  useEffect(() => {
    setIsVisible(true);
    console.error('Global Error:', error);

    // Create ripple effect periodically
    const interval = setInterval(() => {
      const newRipple = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100,
      };
      setRipples((prev) => [...prev.slice(-5), newRipple]);
    }, 2000);

    return () => clearInterval(interval);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
          {/* Animated Background Ripples */}
          <div className="absolute inset-0 overflow-hidden">
            {ripples.map((ripple) => (
              <div
                key={ripple.id}
                className="absolute rounded-full border-2 border-red-300/30"
                style={{
                  left: `${ripple.x}%`,
                  top: `${ripple.y}%`,
                  animation: 'ripple 3s ease-out forwards',
                }}
              />
            ))}
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-red-400/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float-particle ${Math.random() * 5 + 5}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
            {/* Error Icon with Animation */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
            >
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping"></div>
                <div className="relative bg-white rounded-full p-6 shadow-2xl">
                  <AlertTriangle className="w-16 h-16 md:w-20 md:h-20 text-red-500 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Error Title */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
              }`}
            >
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-800 mb-4">
                Oops!
              </h1>
              <h2 className="text-2xl md:text-3xl font-serif text-gray-700 mb-6">
                Something Went Wrong
              </h2>
            </div>

            {/* Animated Divider */}
            <div
              className={`flex items-center justify-center gap-4 mb-6 transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
            >
              <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-red-300"></div>
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-red-400"
                    style={{
                      animation: `bounce 1s ease-in-out infinite`,
                      animationDelay: `${i * 0.15}s`,
                    }}
                  />
                ))}
              </div>
              <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-red-300"></div>
            </div>

            {/* Error Message */}
            <div
              className={`transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-8 shadow-lg">
                <p className="text-gray-600 text-base md:text-lg mb-4 leading-relaxed">
                  We encountered an unexpected error. Don't worry, our team has been notified and we're working on fixing it.
                </p>
                {error.digest && (
                  <p className="text-sm text-gray-500 font-mono bg-gray-100 rounded px-3 py-2 inline-block">
                    Error ID: {error.digest}
                  </p>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <button
                onClick={reset}
                className="group flex items-center gap-2 px-8 py-3 bg-red-500 text-white rounded-lg shadow-md hover:shadow-xl hover:bg-red-600 transition-all duration-300 hover:-translate-y-1"
              >
                <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                <span>Try Again</span>
              </button>

              <a
                href="/"
                className="group flex items-center gap-2 px-8 py-3 bg-white text-gray-700 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200"
              >
                <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Go Home</span>
              </a>

              <a
                href="mailto:support@example.com"
                className="group flex items-center gap-2 px-8 py-3 bg-gray-100 text-gray-700 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Contact Support</span>
              </a>
            </div>

            {/* Additional Help Text */}
            <div
              className={`mt-8 transition-all duration-1000 delay-700 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <p className="text-sm text-gray-500">
                If the problem persists, please contact our support team with the error ID above.
              </p>
            </div>
          </div>

          {/* CSS Animations */}
          <style jsx>{`
            @keyframes ripple {
              0% {
                width: 0;
                height: 0;
                opacity: 1;
              }
              100% {
                width: 500px;
                height: 500px;
                opacity: 0;
                margin: -250px 0 0 -250px;
              }
            }

            @keyframes float-particle {
              0%, 100% {
                transform: translateY(0) translateX(0);
              }
              25% {
                transform: translateY(-30px) translateX(10px);
              }
              50% {
                transform: translateY(-50px) translateX(-10px);
              }
              75% {
                transform: translateY(-30px) translateX(5px);
              }
            }

            @keyframes bounce {
              0%, 100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-8px);
              }
            }
          `}</style>
        </div>
      </body>
    </html>
  );
}