import { createSignal, onCleanup, onMount } from 'solid-js';

// Ported from the original React TypingText: cycles through `strings`,
// typing and deleting one character at a time.
export default function TypingHeadline(props: {
    strings: string[];
    speed?: number;
    class?: string;
}) {
    const speed = () => props.speed ?? 200;
    const [index, setIndex] = createSignal(0);
    const [subIndex, setSubIndex] = createSignal(0);
    const [isDeleting, setIsDeleting] = createSignal(false);

    const tick = () => {
        const current = props.strings[index()];
        if (isDeleting()) {
            setSubIndex((prev) => prev - 1);
            if (subIndex() === 0) {
                setIsDeleting(false);
                setIndex((prev) =>
                    props.strings.length === 1
                        ? prev
                        : prev === props.strings.length - 1
                          ? 0
                          : prev + 1,
                );
            }
        } else {
            setSubIndex((prev) => prev + 1);
            if (subIndex() === current.length) {
                setIsDeleting(true);
            }
        }
        timeout = setTimeout(tick, speed());
    };

    // onMount never runs during SSR, so this timer only ever starts on the
    // client — starting it unguarded in the component body would also run it
    // during the server render (and, on a prerender build that renders many
    // routes in one long-lived process, the stray timer can fire between
    // routes and corrupt hydration-key bookkeeping for later pages).
    let timeout: ReturnType<typeof setTimeout>;
    onMount(() => {
        timeout = setTimeout(tick, speed());
    });
    onCleanup(() => clearTimeout(timeout));

    return (
        <h1 class={props.class}>
            {props.strings[index()].substring(0, subIndex())}
            <span class={`tagline-cursor${isDeleting() ? ' is-deleting' : ''}`}>
                |
            </span>
        </h1>
    );
}
