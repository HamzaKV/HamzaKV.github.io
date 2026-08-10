import { options as defineOptions } from 'solidstep/utils/options';
import ProjectCard from '../../lib/components/ProjectCard';
import GithubFeed from '../../lib/components/GithubFeed';
import {
    flagshipProjects,
    openSourceProjects,
    supportingProjects,
} from '../../lib/data/projects';

export const options = defineOptions({ render: 'static' });

export const generateMeta = () => ({
    title: {
        type: 'title',
        attributes: {},
        content: 'Projects · Hamza Varvani',
    },
});

export default function Projects() {
    return (
        <section>
            <h1 class="section-title">Projects</h1>
            <p class="section-lede">
                A mix of the framework and products I build and maintain, open
                source tooling, and supporting work from earlier in my career.
            </p>

            <div class="project-group">
                <h2 class="project-group-title">Flagship</h2>
                <div class="project-grid">
                    {flagshipProjects.map((project) => (
                        <ProjectCard project={project} />
                    ))}
                </div>
            </div>

            <div class="project-group">
                <h2 class="project-group-title">Open source</h2>
                <div class="project-grid">
                    {openSourceProjects.map((project) => (
                        <ProjectCard project={project} />
                    ))}
                </div>
            </div>

            <div class="project-group">
                <h2 class="project-group-title">Supporting work</h2>
                <div class="project-grid">
                    {supportingProjects.map((project) => (
                        <ProjectCard project={project} />
                    ))}
                </div>
            </div>

            <div class="project-group">
                <h2 class="project-group-title">More on GitHub</h2>
                <p class="project-group-note">Live from api.github.com/users/HamzaKV/repos</p>
                <GithubFeed />
            </div>
        </section>
    );
}
