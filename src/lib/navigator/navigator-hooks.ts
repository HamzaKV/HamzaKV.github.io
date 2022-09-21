import {
    useNavigate,
    useLocation as useRouterLocation,
    useParams as useRouterParams,
    useSearchParams as useRouterSearchParams,
} from 'react-router-dom';

export const useRouter = useNavigate;

export const useLocation = useRouterLocation;

export const useParams = useRouterParams;

export const useSearchParams = useRouterSearchParams;
