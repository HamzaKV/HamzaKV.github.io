import { options as defineOptions } from 'solidstep/utils/options';
import TypingHeadline from '../lib/components/TypingHeadline';
import SocialIcon from '../lib/components/SocialIcon';
import { socialLinks } from '../lib/data/social-links';
import { skillsUnion } from '../lib/data/projects';

export const options = defineOptions({ render: 'static' });

export const generateMeta = () => ({
    title: {
        type: 'title',
        attributes: {},
        content: 'Hamza Varvani',
    },
});

export default function Home() {
    return (
        <>
            <section class="hero">
                <img class="headshot" src="/images/headshot.png" alt="Hamza Varvani" />
                <div class="hero-copy">
                    <p class="name">Hamza Varvani</p>
                    <TypingHeadline
                        class="tagline"
                        strings={[
                            'Adaptable',
                            'Flexible',
                            'Creative',
                            'Innovative',
                            'Imaginative',
                        ]}
                    />
                    <p class="role">Full Stack Software Engineer</p>
                    <div class="social-row">
                        {socialLinks.map((link) => (
                            <SocialIcon {...link} />
                        ))}
                    </div>
                </div>
            </section>

            <section id="about">
                <h2 class="section-title">About</h2>
                <div class="about-body">
                    <p>
                        I'm Hamza Varvani, a full-stack software engineer with 10 years
                        of professional experience. I'm currently CTO at Zown, in
                        Toronto — I joined in January 2026 as Head of Engineering and
                        was promoted to CTO within months.
                    </p>
                    <p>
                        At Zown I've recreated and consolidated the company's tech
                        stack into a single mobile app covering a user's end-to-end
                        home-ownership journey, lead a team of 7 engineers plus a
                        product team, and built AI-assisted tooling that lets the
                        marketing team ship their own edits safely, with guardrails
                        for security and bugs.
                    </p>
                    <p>
                        I'm also the creator of{' '}
                        <a
                            href="https://github.com/HamzaKV/solidstep"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            solidstep
                        </a>
                        , a SolidJS meta-framework I built and maintain — this site
                        runs on it — along with a handful of other open-source tools
                        (see{' '}
                        <a href="/projects">Projects</a>).
                    </p>
                    <p>
                        I hold a Bachelor of Engineering in Computer Engineering from
                        Ryerson University (2015–2020).
                    </p>
                </div>
            </section>

            <section id="skills">
                <h2 class="section-title">Skills</h2>
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

            <section id="contact">
                <h2 class="section-title">Contact</h2>
                <p class="section-lede">Reach out on LinkedIn, GitHub, or by email.</p>
                <div class="social-row" style={{ 'justify-content': 'flex-start' }}>
                    {socialLinks
                        .filter((link) => link.label !== 'Instagram' && link.label !== 'Facebook' && link.label !== 'Twitter')
                        .map((link) => (
                            <SocialIcon {...link} />
                        ))}
                </div>
            </section>
        </>
    );
}
