"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoIntroProps {
  onStart: () => void;
  onComplete: () => void;
}

const VideoIntro = ({ onStart, onComplete }: VideoIntroProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    onStart();

    setTimeout(() => {
      setShowContent(true);
      setTimeout(() => {
        onComplete();
      }, 800);
    }, 1500);
  };

  return (
    <>
      {/* Envelope - show until showContent becomes true */}
      {!showContent && (
        <motion.div
          key="envelope"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden"
        >
          {/* Luxury background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #b45309 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          {/* Full screen envelope */}
          <div className="relative w-full h-full flex items-center justify-center p-0">
            {/* Main envelope */}
            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              animate={{ scale: 1 }}
              initial={{ scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              {/* Base shadow */}
              <motion.div
                animate={{
                  scale: isOpen ? 1.5 : 1,
                  opacity: isOpen ? 0 : 0.3,
                  y: isOpen ? 100 : 0,
                }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute bottom-[2%] left-1/2 -translate-x-1/2 w-[95%] h-32 bg-amber-900/30 blur-3xl rounded-full"
              />

              {/* Envelope body */}
              <div className="relative w-full h-full">
                {/* Background with texture */}
                <div className="absolute inset-0 bg-amber-800 overflow-hidden">
                  <motion.div
                    animate={{ opacity: [0.05, 0.1, 0.05] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-tr from-amber-200/5 via-transparent to-amber-200/5"
                  />
                </div>

                {/* Top flap */}
                <motion.div
                  initial={false}
                  animate={{
                    rotateX: isOpen ? 180 : 0,
                    y: isOpen ? -100 : 0,
                  }}
                  transition={{
                    duration: 3,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="absolute top-0 left-0 right-0 h-[70%] z-30"
                  style={{
                    transformOrigin: "top",
                    backfaceVisibility: "hidden",
                    perspective: 2000,
                  }}
                >
                  <div
                    className="w-full h-full bg-gradient-to-b from-amber-600 to-amber-800"
                    style={{
                      clipPath: "polygon(0% 0%, 50% 100%, 100% 0%)",
                    }}
                  >
                    <motion.div
                      animate={{ opacity: isOpen ? 0 : [0.2, 0.4, 0.2] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-20 md:h-32 bg-gradient-to-t from-amber-300/30 to-transparent blur-xl"
                    />
                  </div>
                </motion.div>

                {/* Bottom part */}
                <motion.div
                  animate={{
                    scaleY: isOpen ? 1.02 : 1,
                    y: isOpen ? 20 : 0,
                  }}
                  transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
                  className="absolute bottom-0 left-0 right-0 h-[75%] bg-amber-800"
                >
                  <motion.div
                    animate={{ opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-t from-amber-950/30 via-transparent to-transparent"
                  />
                </motion.div>

                {/* Seal Button */}
                {!isOpen && (
                  <motion.div
                    className="absolute inset-0 z-40 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.3 }}
                  >
                    {/* Multiple glow rings */}
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          scale: isHovered
                            ? [1, 1.3 + i * 0.1, 1]
                            : [1, 1.1 + i * 0.05, 1],
                          opacity: isHovered
                            ? [0.2, 0.5, 0.2]
                            : [0.1, 0.2, 0.1],
                        }}
                        transition={{
                          duration: 3 + i * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute rounded-full bg-amber-400/20 blur-3xl"
                        style={{
                          width: `${200 + i * 60}px`,
                          height: `${200 + i * 60}px`,
                        }}
                      />
                    ))}

                    {/* Main button */}
                    <motion.button
                      onClick={handleOpen}
                      onHoverStart={() => setIsHovered(true)}
                      onHoverEnd={() => setIsHovered(false)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative group cursor-pointer"
                    >
                      <motion.div
                        animate={{ rotate: isHovered ? 360 : 0 }}
                        transition={{
                          duration: 12,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-[-12px] rounded-full border-2 border-amber-400/40 border-dashed"
                      />

                      <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 shadow-2xl flex items-center justify-center overflow-hidden">
                        <div
                          className="absolute inset-0 opacity-20"
                          style={{
                            backgroundImage: `radial-gradient(circle at 30% 30%, #fbbf24 2px, transparent 2px)`,
                            backgroundSize: "30px 30px",
                          }}
                        />

                        <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 flex items-center justify-center shadow-inner border-4 border-amber-200/60">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 15,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-200/30 to-transparent rounded-full"
                          />

                          <span className="relative z-10 text-white font-bold text-3xl md:text-4xl tracking-[0.3em] drop-shadow-xl">
                            AP&E
                          </span>

                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute -top-2 -right-2 w-4 h-4 bg-amber-200/60 rounded-full"
                          />
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: 0.5,
                            }}
                            className="absolute -bottom-2 -left-2 w-3 h-3 bg-amber-200/40 rounded-full"
                          />
                        </div>
                      </div>
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Instruction text */}
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center z-50"
            >
              <p className="text-white text-sm tracking-[0.3em] uppercase mb-3 font-medium">
                Click to open
              </p>
              <div className="flex gap-3 justify-center">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    className="w-1.5 h-1.5 bg-white/40 rounded-full"
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Paper texture overlay */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />

          <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent to-amber-950/20" />
        </motion.div>
      )}

      {/* Content */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[90] bg-gradient-to-br from-amber-50 to-orange-100"
          >
            {/* Your main website content will appear here */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoIntro;
