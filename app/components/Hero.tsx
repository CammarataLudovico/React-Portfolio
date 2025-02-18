"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { GithubIcon as GitHub, Linkedin, Mail, ArrowDown, MoveLeft, MoveRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const CodePattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
    <pattern
      id="pattern-circles"
      x="0"
      y="0"
      width="50"
      height="50"
      patternUnits="userSpaceOnUse"
      patternContentUnits="userSpaceOnUse"
    >
      <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#000"></circle>
    </pattern>
    <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
  </svg>
)

const images = [
  "/Gatti/Gatto1.jpg",
  "/Gatti/Gatto2.avif",
  "/Gatti/Gatto3.jpg",
  "/Gatti/Gatto4.jpg",
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 2750)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900"
    >
      <div className="absolute inset-0 z-0">
        <CodePattern />
      </div>

      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 animate-gradient-x"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Sezione Immagine - Prima su mobile */}
          <motion.div
            className="lg:w-1/2 order-1 lg:order-2" //cambiare questi valori di order se si vuole resettare prima testo e poi foto
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-72 h-96 md:w-96 md:h-[500px] mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-300 to-purple-300 dark:from-blue-700 dark:to-purple-700 rounded-3xl"
                style={{ rotate: 10, scale: 1.05 }}
                animate={{ rotate: [10, -10, 10], scale: [1.1, 1.2, 1.1] }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #3b82f6)",
                  filter: "blur(10px)",
                }}
                animate={{ rotate: [30, -30], scale: [1.05, 1.1, 1.05] }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0"
                >
                  <motion.div
                    className="w-full h-full rounded-2xl overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={images[currentImage] || "/placeholder.svg"}
                      alt={`Ludovico Cammarata photo ${currentImage + 1}`}
                      fill
                      className="object-cover rounded-2xl shadow-2xl"
                      priority
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
              <button
                onClick={() => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/50 dark:bg-gray-800/50 p-2 rounded-full z-20"
                aria-label="Previous image"
              >
                <MoveLeft className="w-6 h-6 text-gray-800 dark:text-gray-200" />
              </button>
              <button
                onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/50 dark:bg-gray-800/50 p-2 rounded-full z-20"
                aria-label="Next image"
              >
                <MoveRight className="w-6 h-6 text-gray-800 dark:text-gray-200" />
              </button>
            </div>
          </motion.div>

          {/* Sezione Testo - Dopo su mobile */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1" //cambiare questi valori di order se si vuole resettare prima testo e poi foto
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className=" lg:block text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Ludovico Cammarata
            </h1>
            <h2 className=" lg:block text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
              Web Developer & UX/UI Designer
            </h2>
            <p className=" lg:block text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              Sono un ragazzo di 20 anni, solare e intraprendente, con una grande passione per il mondo del web e del
              design.
              <br /> Amo trasformare idee in realtà, creando esperienze digitali che siano intuitive, emozionanti e coinvolgenti.
              <br /> Nel tempo libero mi dedico alla palestra, con la stessa passione e determinazione che applico nel mio lavoro. 🚀
              <br /> Offro servizi di progettazione e sviluppo di siti web interattivi e responsive, per aziende e professionisti.
            </p>

            {/* Icone Social - Sempre visibili */}
            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              <a
                href="https://github.com/CammarataLudovico"
                target="_blank"
                className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="GitHub Profile"
              >
                <GitHub className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="mailto:cammarataludvico9@gmail.com"
                className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="Email Contact"
              >
                <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
            </div>

            {/* Pulsante Scopri di più - Sempre visibile */}
            <motion.button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Scopri di più!
              <ArrowDown className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center" // Nei dispositivi mobili come telefoni e tablet la linea gradiente non sarà visibile, per non rovinare l'esperienza utente
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >

        <div className="w-3 h-36 bg-gradient-to-b from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full animate-pulse"></div>
      </motion.div>
    </section>
  )
}