export default function ErrorPage(props: { error?: { message?: string } }) {
    return (
        <section>
            <h1 class="section-title">Something went wrong</h1>
            <p class="section-lede">
                {props.error?.message ?? 'An unexpected error occurred.'}
            </p>
        </section>
    );
}
