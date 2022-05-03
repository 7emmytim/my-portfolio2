import Experience from '../components/Experience'
import Banner from '../components/Home/Banner'
import Skills from '../components/Home/Skills'
import Projects from '../components/Projects'
import { _skills } from '../resources/skills'

export default function Home() {
  return (
    <section>
      <Banner />
      <Skills skills={_skills.slice(0, 10)} showMore />
      <Projects />
      <Experience />
    </section>
  )
}
