"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"

export default function Component() {
  const router = useRouter()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleEnter = async () => {
    setIsLoading(true)
    // Simulate loading time
    await new Promise((resolve) => setTimeout(resolve, 1500))
    router.push("/portfolio") // Replace with your desired route
  }

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-purple-950 via-slate-900 to-teal-950">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute left-[20%] top-[20%] w-1 h-1 bg-orange-400"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute right-[30%] top-[15%] w-40 h-[1px] bg-gradient-to-r from-transparent via-orange-300/20 to-transparent"
          animate={{
            scaleX: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
        <div className="absolute left-[15%] top-[15%] w-0 h-0 border-l-[8px] border-l-transparent border-b-[12px] border-b-orange-400/80 border-r-[8px] border-r-transparent transform rotate-180" />
        <div className="absolute right-[20%] top-[85%] flex gap-1">
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full bg-pink-500/50"
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            />
          ))}
        </div>
        <motion.div
          className="absolute right-[15%] bottom-[20%] w-60 h-[1px]"
          style={{
            background: "linear-gradient(to right, transparent, rgba(75, 75, 75, 0.2) 50%, transparent)",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-8xl font-bold text-transparent bg-clip-text"
          style={{
            backgroundImage: `linear-gradient(
              225deg,
              #ffffff 0%,
              #a8a8a8 25%,
              #69c5dd 50%,
              #a8a8a8 75%,
              #ffffff 100%
            )`,
          }}
        >
          <span className="text-teal-400 font-thin">&lt; </span>KEVISDEV <span className="text-teal-400 font-thin">/&gt;</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 text-gray-400 text-sm md:text-lg "
        >
          Constantly Learning, Perpetually Innovating, Always Delivering Excellence
        </motion.div>

        {/* Enter button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          onClick={handleEnter}
          disabled={isLoading}
          className="mt-12 relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          <div className="relative px-7 py-4 bg-black/60 rounded-lg leading-none flex items-center">
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center space-x-2"
                >
                  <motion.div
                    className="w-2 h-2 bg-teal-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-purple-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.2,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-orange-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.4,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              ) : (
                <motion.span
                  key="enter"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-gray-100 group-hover:text-white transition duration-200 text-lg"
                >
                  Enter
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.button>
      </div>

      {/* Interactive gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, rgba(0,0,0,0.5) 100%)`,
        }}
      />
    </div>
  )
}