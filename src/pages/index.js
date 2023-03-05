import { Inter } from 'next/font/google'
import Header from './routes/Header'
import Skills from './routes/Skills'

import Blogs from './routes/Blogs'
import Contacts from './routes/Contacts'
import TeamWork from './routes/TeamWork'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
     <Header/>
     <Skills/>
     <Blogs/>
     <TeamWork/>
     <Contacts/>
    </main>
  )
}
