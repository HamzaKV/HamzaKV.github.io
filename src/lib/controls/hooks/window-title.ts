import { useEffect } from 'react';
import pkg from 'src/../package.json';

/**
 * It sets the window title to the provided title, or the package name if no title is provided
 * @param {string | undefined | null} title - The title to set the window to.
 * @param {any[]} dependencies - The dependencies of the hook.
 * @returns setTitle - A function that sets the window title.
 */
const useWindowTitle = (
    title: string | undefined | null,
    dependencies: any[]
): (title: string) => void => {
    const setTitle = (title: string) => {
        document.title = title;
    };

    useEffect(() => {
        setTitle(title || pkg.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);

    return setTitle;
};

export default useWindowTitle;
