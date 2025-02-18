"use client"

import { GraduationCap, Calendar, FileCode2, Award, Star } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"
import { motion } from "framer-motion"

export default function Education() {
  const education = [
    {
      degree: "Tecnico Superiore Front End Developer",
      institution: "ITS ACADEMY ALTO ADRIATICO - Pordenone (PN)", 
      period: "2024 – 2026",
      skills: [
        "Studio e progettazione grafica con Figma",
        "Prsicologia che sta dietro ad i Design",
        "User experience e User Interface Design",
        "Sviluppo Web", 
      ],
      recognitions: [
        "Borsa di studio per merito",
      ],
    },
    {
      degree: "Diploma perito informatico",
      institution: "ITTS Vito Volterra - San Donà di Piave (VE)",
      period: "Settembre 2018 - Giugno 2023",
      achievements: [
        "Progetti pratici su sviluppo web e software",
        "360 gradi sul mondo della programmazione",
        "Esperienze progettuali significative",
        "Stage Informatico",
      ],
    },
  ]

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-purple-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Formazione" />
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-purple-200 dark:bg-purple-700 rounded-br-full z-0 opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2" />
                  {edu.degree}
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">{edu.institution}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {edu.period}
                </p>

                {edu.skills && (
                  <>
                    <h4 className="text-lg font-medium mb-2 dark:text-gray-200 flex items-center">
                      <FileCode2 className="w-5 h-5 mr-2" />
                      Competenze Acquisite:
                    </h4>
                    <ul className="list-disc list-inside space-y-2">
                      {edu.skills.map((skill, idx) => (
                        <li key={idx} className="text-gray-700 dark:text-gray-300">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {edu.achievements && (
                  <>
                    <h4 className="text-lg font-medium mb-2 mt-4 dark:text-gray-200 flex items-center">
                      <Star className="w-5 h-5 mr-2" />
                      Risultati:
                    </h4>
                    <ul className="list-disc list-inside space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-700 dark:text-gray-300">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {edu.recognitions && (
                  <>
                    <h4 className="text-lg font-medium mb-2 mt-4 dark:text-gray-200 flex items-center">
                      <Award className="w-5 h-5 mr-2" />
                      Riconoscimenti:
                    </h4>
                    <ul className="list-disc list-inside space-y-2">
                      {edu.recognitions.map((rec, idx) => (
                        <li key={idx} className="text-gray-700 dark:text-gray-300">
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

