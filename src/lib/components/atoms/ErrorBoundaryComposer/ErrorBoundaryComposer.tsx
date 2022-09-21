/* eslint-disable react/display-name */
import { ErrorBoundary } from 'src/lib/components/nuclei/ErrorBoundary';
import type { ErrorBoundaryProps } from 'src/lib/components/nuclei/ErrorBoundary';

export interface IProps {
    logError: ErrorBoundaryProps['logError'];
}

const ErrorBoundaryComposer =
    (OriginalComp: any, ErrorComponent: any) =>
        ({ logError, ...props }: any) => {
            return (
                <ErrorBoundary 
                    logError={logError} 
                    ErrorComponent={ErrorComponent}
                >
                    <OriginalComp {...props} />
                </ErrorBoundary>
            );
        };

export default ErrorBoundaryComposer;
