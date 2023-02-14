import { Header } from './components/Header'
import { Project } from './components/Project'
import { Goals } from './components/Goals'
import { Attendances } from './components/Attendances'
import { FormsAttendance } from './components/FormsAttendance'
import { Psychologists } from './components/Psychologists'
import { Footer } from './components/Footer'

export function App() {
  return (
    <>
      <Header />
      <Project />
      <Goals />
      <Attendances />
      <FormsAttendance />
      <Psychologists />
      <Footer />
    </>
  )
}