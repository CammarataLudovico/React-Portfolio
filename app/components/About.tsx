"use client"

import { motion } from "framer-motion"
import { Palette, Code, Fullscreen, CircleHelp, ScanFace } from "lucide-react"
import Image from "next/image"
 
export default function About() {
  const skills = [
    { icon: <Palette className="w-8 h-8 text-blue-500" />, title: "Progettazione e Design", description: "Creazione di interfacce grafiche moderne e accattivanti per esperienze digitali coinvolgenti." },
    { icon: <Code className="w-8 h-8 text-green-500" />, title: "Sviluppo di siti web", description: "Realizzazione di siti web interattivi e responsive per aziende e professionisti." },
    { icon: <Fullscreen className="w-8 h-8 text-purple-500" />, title: "Prototipazione e UX/UI", description: "Disegno e prototipazione di esperienze utente intuitive prima dello sviluppo." },
    { icon: <CircleHelp className="w-8 h-8 text-yellow-500" />, title: "Assistenza e supporto", description: "Aiuto continuo per aggiornamenti, ottimizzazione e risoluzione di problemi." },
  ]
 
  return (
  <section
    id="about"
    className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
  >
    <div className="container mx-auto px-6 relative z-10">
      <motion.h2
        className="text-4xl font-bold mb-8 text-center dark:text-white flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <ScanFace className="w-12 h-12 text-red-500 mr-2" />
        <span>Biografia</span>
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 mr-6">
            Sono uno sviluppatore web di 20 anni con una passione travolgente per il design e le esperienze digitali. 
            <br/> Amo trasformare idee in realtà, creando siti web e applicazioni che non solo funzionano alla perfezione, ma che <span className="font-bold"> emozionano e coinvolgono chi le usa. </span> 
          </p>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mr-6">
            Per me, ogni progetto è un'opportunità per dare vita a qualcosa di unico, curando ogni dettaglio con attenzione e creatività. 
            <br/> Voglio che ogni interazione sia intuitiva, fluida e memorabile, perché il digitale non è solo tecnologia: è un modo per <span className="font-bold"> raccontare storie, connettere persone e lasciare il segno.</span>
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {skills.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              {skill.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">
                {skill.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
            </div>
          ))}
        </motion.div>

        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

