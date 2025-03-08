import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header';
import HeaderSmall from '@/components/HeaderSmall';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Insprano X udaan',
  description: 'TechFest and Cultural Fest are dynamic annual events celebrating innovation, creativity, and talent. TechFest focuses on technology, featuring hackathons, robotics, coding challenges, and workshops, fostering innovation and collaboration. Meanwhile, Cultural Fest showcases artistic expression through music, dance, theater, and competitions, promoting cultural diversity and creativity. Together, these fests create an engaging platform for students and enthusiasts to learn, compete, and celebrate talent in both technical and artistic domains.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="hide-on-mobile">
          <Header />
        </div>
        <HeaderSmall/>
        {children}
      </body>
    </html>
  )
}
