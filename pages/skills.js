import Skills from '../components/Home/Skills'
import { _skills } from '../resources/skills'

const skills = () => {
    return (
        <section>
            <Skills skills={_skills} />
        </section>
    )
}

export default skills