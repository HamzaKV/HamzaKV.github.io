import { Show } from 'solid-js';
import type { Project } from '../data/projects';

export default function ProjectCard(props: { project: Project }) {
    return (
        <article class="project-card">
            <Show when={props.project.image}>
                <img src={props.project.image} alt="" />
            </Show>
            <h3 class="project-card-name">{props.project.name}</h3>
            <p class="project-card-desc">{props.project.description}</p>
            <div class="tag-row">
                {props.project.skills.map((skill) => (
                    <span class="tag">{skill}</span>
                ))}
            </div>
            <Show when={props.project.link}>
                <a
                    class="project-card-link"
                    href={props.project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {props.project.linkLabel ?? props.project.link} &rarr;
                </a>
            </Show>
        </article>
    );
}
