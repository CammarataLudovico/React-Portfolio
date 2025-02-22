"use client"

import { useEffect } from "react";
import Hero from "./components/Hero"
import About from "./components/About"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Services from "./components/Services"
import Contact from "./components/Contact"
import FloatingNav from "./components/floating-nav"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export default function Home() {

  useEffect(() => {
    const link: HTMLLinkElement = document.createElement('link');
    link.rel = 'icon';
    link.href = '/favicon.ico';  // Favicon
    document.head.appendChild(link);

    // Cleanup (opzionale)
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <FloatingNav />
      <Hero />
      <About />
      <Education />
      {/* <Experience />*/}
       <Skills />
      {/* <Services /> */}
      <Contact />
      <SpeedInsights />
      <Analytics />
    </main>
  );
}