'use client'

import { Suspense, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Main Competitions data
const mainCompetitions = [
  {
    id: 1,
    title: "Line Follower",
    description: "Build an autonomous robot that can follow a complex path while handling various challenges and obstacles",
    prize: "₹20,000",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJvYm90aWNzfGVufDB8fDB8fHww"
  },
  {
    id: 2,
    title: "Death Race",
    description: "Navigate your robot through an obstacle course filled with challenges and compete for the fastest time",
    prize: "₹20,000",
    date: "March 16, 2024",
    image: "https://images.unsplash.com/photo-1558137623-ce933996c730?q=80&w=2906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    title: "Robo Sumo",
    description: "Design a robot to push opponents out of the arena in intense robot-vs-robot battles",
    prize: "₹20,000",
    date: "March 16, 2024",
    image: "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJvYm90aWNzfGVufDB8fDB8fHww"
  },
  {
    id: 4,
    title: "Robo Surfer",
    description: "Create a robot that can navigate through water-based challenges with precision",
    prize: "₹20,000",
    date: "March 17, 2024",
    image: "https://images.unsplash.com/photo-1558137623-ce933996c730?q=80&w=2906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    title: "Hackathon",
    description: "24-hour coding challenge to build innovative solutions for real-world problems",
    prize: "₹20,000",
    date: "March 17, 2024",
    image: "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJvYm90aWNzfGVufDB8fDB8fHww"
  }
]

// Branch-wise Competitions
const branchCompetitions = {
  CSE: [
    { id: 1, title: "Coding Contest", prize: "₹5,000" },
    { id: 2, title: "Web Development", prize: "₹3,000" },
    { id: 3, title: "UI/UX Design", prize: "₹3,000" },
    { id: 4, title: "CTF Challenge", prize: "₹4,000" }
  ],
  ECE: [
    { id: 1, title: "Circuit Design", prize: "₹5,000" },
    { id: 2, title: "PCB Making", prize: "₹3,000" },
    { id: 3, title: "IoT Challenge", prize: "₹3,000" },
    { id: 4, title: "Signal Processing", prize: "₹4,000" }
  ],
  MECH: [
    { id: 1, title: "CAD Design", prize: "₹5,000" },
    { id: 2, title: "3D Printing", prize: "₹3,000" },
    { id: 3, title: "Bridge Building", prize: "₹3,000" },
    { id: 4, title: "Machine Assembly", prize: "₹4,000" }
  ],
  CIVIL: [
    { id: 1, title: "Structure Design", prize: "₹5,000" },
    { id: 2, title: "Survey Challenge", prize: "₹3,000" },
    { id: 3, title: "Green Building", prize: "₹3,000" },
    { id: 4, title: "Town Planning", prize: "₹4,000" }
  ]
}

const schoolEvents = {
  workshops: [
    {
      id: 1,
      title: "Robotics Workshop",
      description: "Hands-on experience with basic robotics and programming for school students",
      time: "10:00 AM - 1:00 PM",
      date: "March 15, 2024",
      ageGroup: "12-16 years",
      image: "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJvYm90aWNzfGVufDB8fDB8fHww"
    }
  ],
  exhibition: [
    {
      id: 1,
      title: "Science Exhibition by INSPRANO",
      description: "An engaging science exhibition showcasing fascinating experiments and demonstrations for school students. Learn through interactive displays and hands-on activities.",
      date: "March 15-17, 2024",
      eligibility: "Open to all school students",
      timing: "9:00 AM - 5:00 PM",
      venue: "College Exhibition Hall",
      image: "https://images.unsplash.com/photo-1558137623-ce933996c730?q=80&w=2906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]
}


const CompetitionCard = ({ title, description, prize, date, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-black/30 backdrop-blur-sm rounded-xl p-4 md:p-8 hover:bg-black/40 transition-all"
  >
    <div className="aspect-video rounded-lg overflow-hidden mb-4 md:mb-6">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{title}</h3>
    <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6">{description}</p>
    <div className="flex justify-between items-center mb-4 md:mb-6">
      <span className="text-emerald-400 font-semibold text-sm md:text-base">Prize: {prize}</span>
      <span className="text-gray-400 text-sm md:text-base">{date}</span>
    </div>
    <div className="flex gap-2 md:gap-4">
      <button className="flex-1 px-3 md:px-4 py-2 md:py-2.5 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition-all border border-blue-500/30 text-sm md:text-base">
        Rulebook
      </button>
      <button className="flex-1 px-3 md:px-4 py-2 md:py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all text-sm md:text-base">
        Register
      </button>
    </div>
  </motion.div>
)

const BranchCompetitionCard = ({ title, prize }) => (
  <div className="bg-black/20 backdrop-blur-sm rounded-lg p-3 md:p-4 hover:bg-black/30 transition-all">
    <h4 className="text-base md:text-lg font-semibold text-white mb-1">{title}</h4>
    <span className="text-sm md:text-base text-emerald-400">{prize}</span>
  </div>
)

const SchoolEventCard = ({ title, description, date, time, ageGroup, eligibility, prizes, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-black/30 backdrop-blur-sm rounded-xl p-4 md:p-6 hover:bg-black/40 transition-all"
  >
    <div className="aspect-video rounded-lg overflow-hidden mb-3 md:mb-4">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-lg md:text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">{description}</p>
    <div className="flex flex-col gap-1.5 md:gap-2 text-xs md:text-sm">
      <span className="text-gray-400">Date: {date}</span>
      {time && <span className="text-gray-400">Time: {time}</span>}
      {ageGroup && <span className="text-gray-400">Age Group: {ageGroup}</span>}
      {eligibility && <span className="text-gray-400">Eligibility: {eligibility}</span>}
      {prizes && <span className="text-emerald-400 font-semibold">{prizes}</span>}
    </div>
  </motion.div>
)

export default function CompetitionsPage() {
  const [selectedBranch, setSelectedBranch] = useState('CSE')

  return (
    <div className="min-h-screen w-full bg-[#151515]">
      {/* <main className="relative"> */}
        <section>
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center pt-36 md:pt-48 pb-8 md:pb-16 px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
              Technical Competitions
            </h1>
            <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Compete in our flagship competitions with prize pool of ₹1,00,000
            </p>
          </motion.div>

          {/* Main Competitions */}
          <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center md:text-left">
              Flagship Competitions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {mainCompetitions.map((competition) => (
                <CompetitionCard key={competition.id} {...competition} />
              ))}
            </div>
          </div>

          {/* Branch-wise Competitions */}
          <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">Branch Competitions</h2>
            
            {/* Branch Selector */}
            <div className="flex flex-wrap gap-2 md:gap-4 mb-6 md:mb-8 pb-2">
              {Object.keys(branchCompetitions).map((branch) => (
                <button
                  key={branch}
                  onClick={() => setSelectedBranch(branch)}
                  className={`px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base rounded-full ${
                    selectedBranch === branch 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-800 text-gray-300'
                  }`}
                >
                  {branch}
                </button>
              ))}
            </div>

            {/* Branch Competitions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {branchCompetitions[selectedBranch].map((comp) => (
                <BranchCompetitionCard key={comp.id} {...comp} />
              ))}
            </div>
          </div>

          {/* School Events Section */}
          <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">School Events</h2>
            
            {/* Workshops */}
            <div className="mb-8 md:mb-12">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4 md:mb-6">Workshops</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {schoolEvents.workshops.map((workshop) => (
                  <SchoolEventCard key={workshop.id} {...workshop} />
                ))}
              </div>
            </div>

            {/* Science Exhibition */}
            <div className="mb-8 md:mb-12">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4 md:mb-6">Science Exhibition</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {schoolEvents.exhibition.map((exhibit) => (
                  <SchoolEventCard key={exhibit.id} {...exhibit} />
                ))}
              </div>
            </div>
          </div>

          {/* Registration Call to Action */}
          <div className="text-center py-8 md:py-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold text-base md:text-lg"
            >
              Register Now
            </motion.button>
          </div>
        </section>
      {/* </main> */}
    </div>
  )
}