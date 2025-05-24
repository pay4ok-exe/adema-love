"use client"
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'

// Dynamic imports for better performance
const LoadingScreen = dynamic(() => import('@/components/LoadingScreen'))
const WelcomeSection = dynamic(() => import('@/components/sections/WelcomeSection'))
const ConfessionSection = dynamic(() => import('@/components/sections/ConfessionSection'))
const TimelineSection = dynamic(() => import('@/components/sections/TimelineSection'))
const MemoriesSection = dynamic(() => import('@/components/sections/MemoriesSection'))
const PhotoGallerySection = dynamic(() => import('@/components/sections/PhotoGallerySection'))
const VoiceMessagesSection = dynamic(() => import('@/components/sections/VoiceMessagesSection'))
const ProposalSection = dynamic(() => import('@/components/sections/ProposalSection'))
const MobileNav = dynamic(() => import('@/components/MobileNav'))
const MusicControl = dynamic(() => import('@/components/MusicControl'))
const FloatingMessage = dynamic(() => import('@/components/FloatingMessage'))

import { loveData } from '@/data/content'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [currentSection, setCurrentSection] = useState(0)
  const [showProposal, setShowProposal] = useState(false)

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 3000)
    
    // Check if it's time for proposal
    const checkTime = setInterval(() => {
      const now = new Date()
      const proposalTime = new Date(loveData.specialDates.midnight)
      if (now >= proposalTime) {
        setShowProposal(true)
      }
    }, 1000)

    return () => clearInterval(checkTime)
  }, [])

  const sections = [
    <WelcomeSection key="welcome" onNext={() => setCurrentSection(1)} />,
    <ConfessionSection key="confession" onNext={() => setCurrentSection(2)} />,
    <TimelineSection key="timeline" onNext={() => setCurrentSection(3)} />,
    <MemoriesSection key="memories" onNext={() => setCurrentSection(4)} />,
    <PhotoGallerySection key="gallery" onNext={() => setCurrentSection(5)} />,
    <VoiceMessagesSection key="voices" onNext={() => setCurrentSection(6)} />,
    <ProposalSection key="proposal" />
  ]

  if (loading) return <LoadingScreen />

  return (
    <main className="min-h-screen overflow-x-hidden">
      <AnimatePresence mode="wait">
        {sections[currentSection]}
      </AnimatePresence>
      
      <MobileNav 
        currentSection={currentSection} 
        setSection={setCurrentSection}
        totalSections={sections.length}
      />
      
      <MusicControl src={loveData.musicTracks.main} />
      <FloatingMessage messages={loveData.floatingMessages} />
    </main>
  )
}