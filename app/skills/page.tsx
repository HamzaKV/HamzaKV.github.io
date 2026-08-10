import { options as defineOptions } from 'solidstep/utils/options';
import { skillsUnion } from '../../lib/data/projects';

export const options = defineOptions({ render: 'static' });

export const generateMeta = () => ({
    title: {
        type: 'title',
        attributes: {},
        content: 'Skills · Hamza Varvani',
    },
});

export default function Skills() {
    return (
        <section>
            <h1 class="section-title">Skills</h1>
            <p class="section-lede">
                Derived from the projects on this site — see{' '}
                <a href="/projects">Projects</a> for the work behind each one.
            </p>
            <div class="skills-grid">
                {skillsUnion.map((skill) => (
                    <span class="skill-chip">{skill}</span>
                ))}
            </div>
        </section>
    );
}
