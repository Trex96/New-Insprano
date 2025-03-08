'use client'
import { useState } from 'react'

export default function TimelinePage(){

  const timeline ={
    "Day 1 (10/03/25)": [
      {"time": "8:00 AM", "category": "UDAAN", "event": "Rangoli", "venue": "College Entrance"},
      {"time": "9:00 AM", "category": "UDAAN", "event": "Gully Cricket", "venue": "Open Hall Theatre"},
      {"time": "10:00 AM", "category": "General", "event": "Inauguration", "venue": "-"},
      {"time": "10:00 AM", "category": "UDAAN", "event": "Face Painting", "venue": "Room 221"},
      {"time": "11:00 AM", "category": "Robo-Sprano", "event": "Line-Follower", "venue": "Academic Building Backgate"},
      {"time": "11:00 AM", "category": "Mechanical Branch Event", "event": "Doctor Syringe", "venue": "-"},
      {"time": "11:00 AM", "category": "Electrical Branch Event", "event": "Circuit-o-mania", "venue": "-"},
      {"time": "11:00 AM", "category": "CSE Branch Event", "event": "Code Chef", "venue": "-"},
      {"time": "11:00 AM", "category": "Civil Branch Event", "event": "Bridge It", "venue": "-"},
      {"time": "11:00 AM", "category": "UDAAN", "event": "Mock Parliament", "venue": "Language Lab"},
      {"time": "11:00 AM", "category": "In-Sprano College Event", "event": "BGMI", "venue": "-"},
      {"time": "11:00 AM", "category": "In-Sprano College Event", "event": "Free Fire", "venue": "-"},
      {"time": "12:00 PM", "category": "UDAAN", "event": "Illustrative Drawing", "venue": "Room 222"},
      {"time": "3:00 PM", "category": "UDAAN", "event": "Student Of the Year", "venue": "Seminar Hall (210)"},
      {"time": "3:00 PM", "category": "Robo-Sprano", "event": "Death Race", "venue": "Volley Court"},
      {"time": "3:00 PM", "category": "Robo-Sprano", "event": "Ideation", "venue": "Language Lab"},
      {"time": "3:00 PM", "category": "Mechanical Branch Event", "event": "Mech-a-paper", "venue": "-"},
      {"time": "3:00 PM", "category": "Electrical Branch Event", "event": "Electro Quiz", "venue": "-"},
      {"time": "3:00 PM", "category": "CSE Branch Event", "event": "Bug Hunt", "venue": "-"},
      {"time": "3:00 PM", "category": "Civil Branch Event", "event": "Master Builder", "venue": "-"}
    ],
    "Day 2 (11/03/25)": [
      {"time": "9:00 AM", "category": "UDAAN", "event": "Gully Cricket", "venue": "Open Hall Theatre"},
      {"time": "9:00 AM", "category": "In-Sprano College Event", "event": "Treasure Hunt", "venue": "Language Lab"},
      {"time": "9:00 AM - 12 PM", "category": "Robo-Sprano", "event": "Science Exhibition", "venue": "Room 310"},
      {"time": "9:30 AM", "category": "UDAAN", "event": "Food Without Fire", "venue": "Room 224"},
      {"time": "10:00 AM", "category": "Robo-Sprano", "event": "Robo-Soccer", "venue": "Academic Building Backgate"},
      {"time": "11:00 AM", "category": "UDAAN", "event": "Glass Painting, Pot Design, Cardboard Design", "venue": "Room 223"},
      {"time": "11:00 AM", "category": "Mechanical Branch Event", "event": "Screw Hunter", "venue": "-"},
      {"time": "11:00 AM", "category": "Electrical Branch Event", "event": "Circuit Design", "venue": "-"},
      {"time": "11:00 AM", "category": "CSE Branch Event", "event": "Tech Talk", "venue": "-"},
      {"time": "11:00 AM", "category": "Civil Branch Event", "event": "Congogen", "venue": "-"},
      {"time": "12:00 PM", "category": "UDAAN", "event": "Logo Design", "venue": "Room 222"},
      {"time": "12:00 PM", "category": "UDAAN", "event": "Student of the Year", "venue": "Seminar Hall (210)"},
      {"time": "2:00 PM", "category": "UDAAN", "event": "MUN", "venue": "Language Lab"},
      {"time": "2:30 PM", "category": "UDAAN", "event": "Branch Dance", "venue": "Seminar Hall (210)"},
      {"time": "3:00 PM", "category": "Mechanical Branch Event", "event": "Mech-a-quiz", "venue": "-"},
      {"time": "3:00 PM", "category": "Electrical Branch Event", "event": "Hunt the Fault", "venue": "-"},
      {"time": "3:00 PM", "category": "CSE Branch Event", "event": "9Lock", "venue": "-"},
      {"time": "3:00 PM", "category": "Civil Branch Event", "event": "Civil Crossword", "venue": "-"},
      {"time": "4:00 PM", "category": "Robo-Sprano", "event": "Robo-Sumo", "venue": "Volley Court"},
      {"time": "4:00 PM", "category": "In-Sprano College Event", "event": "Pithoo", "venue": "Open Hall Theatre"},
      {"time": "4:30 PM", "category": "UDAAN", "event": "Mono Act", "venue": "Seminar Hall (210)"}
    ],
    "Day 3 (12/03/25)": [
      {"time": "9:00 AM", "category": "UDAAN", "event": "Gully Cricket", "venue": "Open Hall Theatre"},
      {"time": "10:00 AM", "category": "UDAAN", "event": "Memes", "venue": "Language Lab"},
      {"time": "10:30 AM", "category": "UDAAN", "event": "Pixel (Photography)", "venue": "Language Lab"},
      {"time": "11:00 AM", "category": "UDAAN", "event": "Short Film", "venue": "Language Lab"},
      {"time": "12:00 PM", "category": "UDAAN", "event": "Student of the Year", "venue": "Seminar Hall (210)"},
      {"time": "2:00 PM", "category": "UDAAN", "event": "Dance", "venue": "Seminar Hall (210)"},
      {"time": "2:00 PM", "category": "UDAAN", "event": "Singing", "venue": "Seminar Hall (210)"},
      {"time": "3:00 PM", "category": "In-Sprano", "event": "Robotics Prize Distribution", "venue": "Seminar Hall (210)"},
      {"time": "3:00 PM onwards", "category": "UDAAN", "event": "Antakshari for Teachers", "venue": "Seminar Hall (210)"}
    ]
  }

  const [selectedDay, setSelectedDay] = useState(Object.keys(timeline)[0])

  return (
    <main className="min-h-screen bg-gray-900 py-48 px-4">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-8 text-white bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        Event Schedule
      </h1>

      {/* Day selector tabs */}
      <div className="flex flex-wrap gap-3 justify-center mb-8 max-w-xl mx-auto">
        {Object.keys(timeline).map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-6 py-2.5 rounded-lg transition-all font-medium ${
              selectedDay === day
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Events grid */}
      <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {timeline[selectedDay].map((event, idx) => (
          <div 
            key={idx} 
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-700"
          >
            <div className="flex justify-start items-start mb-4">
              <span className="text-blue-400 px-5 py-1 font-semibold">{event.time}</span>
              <span className="bg-blue-900/50 text-blue-300 text-sm px-3 py-1 rounded-full border border-blue-700/50">
                {event.category}
              </span>
            </div>
            <h3 className="font-bold mb-3 text-white text-lg">{event.event}</h3>
            <p className="text-gray-400">
              <span className="font-medium">Venue: </span>
              {event.venue === '-' ? 'To be announced' : event.venue}
            </p>
          </div>
        ))}
      </div>
    </main>
  )
}
