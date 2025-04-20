"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
// import { ChevronLeft, ChevronRight } from "lucide-react"
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft} from "react-icons/md";;
import { useMediaQuery } from "../hooks/useMediaQuery.jsx"
import PropTypes from "prop-types"

const MobileVisionaryCarousel = ({ visionaries }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === visionaries.length - 1 ? 0 : prevIndex + 1
    )
  }, [visionaries.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? visionaries.length - 1 : prevIndex - 1
    )
  }, [visionaries.length])

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 3000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, currentIndex, nextSlide])

  // Pause auto-play on user interaction
  const handleNavigation = (direction) => {
    setIsAutoPlaying(false)
    if (direction === "next") {
      nextSlide()
    } else {
      prevSlide()
    }

    // Resume auto-play after 5 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true)
    }, 5000)
  }

  // Don't render on non-mobile devices
  if (!isMobile) return null

  const isFirstSlide = currentIndex === 0
  const isLastSlide = currentIndex === visionaries.length - 1
  const isMiddleSlide = !isFirstSlide && !isLastSlide

  return (
    <div className="relative w-full overflow-hidden px-4 py-8">
      <div className="relative h-[450px] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div
              className="w-full h-[392px] rounded-xl relative mx-auto"
              style={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 56.25%, rgba(0, 0, 0, 0.40) 79.69%), url(${visionaries[currentIndex].image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Text Container */}
              <div className="absolute bottom-0 left-5 w-full text-white text-left py-4">
                <h3 className="text-lg font-semibold">{visionaries[currentIndex].name}</h3>
                <p className="text-sm font-light leading-relaxed">{visionaries[currentIndex].designation}</p>
              </div>

              {/* Navigation Buttons */}
              <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-4">
                {/* Left Arrow - Only show on middle and last slides */}
                {!isFirstSlide && (
                  <motion.button
                    onClick={() => handleNavigation("prev")}
                    className="w-12 h-12 rounded-full bg-[#0B714C] flex items-center justify-center text-white"
                    initial={{ opacity: 1 }}
                    animate={{
                      x: isLastSlide ? 0 : isMiddleSlide ? -10 : 0,
                      opacity: 1,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <MdOutlineKeyboardArrowLeft size={24} />
                  </motion.button>
                )}

                {/* Right Arrow - Only show on first and middle slides */}
                {!isLastSlide && (
                  <motion.button
                    onClick={() => handleNavigation("next")}
                    className="w-12 h-12 rounded-full bg-[#0B714C] flex items-center justify-center text-white"
                    initial={{ opacity: 1 }}
                    animate={{
                      x: isFirstSlide ? 0 : isMiddleSlide ? 10 : 0,
                      opacity: 1,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <MdOutlineKeyboardArrowRight size={24} />
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Indicator */}
      {/* <div className="flex justify-center mt-8 gap-2">
        {visionaries.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-8 bg-[#0B714C]" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div> */}
    </div>
  )
}

MobileVisionaryCarousel.propTypes = {
  visionaries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      designation: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default MobileVisionaryCarousel;


