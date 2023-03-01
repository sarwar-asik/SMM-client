import { Inter } from 'next/font/google'
import Header from './routes/Header'
import Skills from './routes/Skills'
import Experience from './routes/Experience'
import Blogs from './routes/Blogs'
import Contacts from './routes/Contacts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
     <Header/>
     <Skills/>
     <Blogs/>
     <Experience/>
     <Contacts/>
    </main>
  )
}
