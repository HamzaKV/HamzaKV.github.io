import { options as defineOptions } from 'solidstep/utils/options';
import SocialIcon from '../../lib/components/SocialIcon';
import { socialLinks } from '../../lib/data/social-links';

export const options = defineOptions({ render: 'static' });

export const generateMeta = () => ({
    title: {
        type: 'title',
        attributes: {},
        content: 'Contact · Hamza Varvani',
    },
});

export default function Contact() {
    return (
        <section>
            <h1 class="section-title">Contact</h1>
            <p class="section-lede">Reach out on LinkedIn, GitHub, or by email.</p>
            <div class="social-row" style={{ 'justify-content': 'flex-start' }}>
                {socialLinks
                    .filter((link) => link.label !== 'Instagram' && link.label !== 'Facebook' && link.label !== 'Twitter')
                    .map((link) => (
                        <SocialIcon {...link} />
                    ))}
            </div>
        </section>
    );
}
