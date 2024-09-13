import authenticatedRoute from '../components/auth/AuthenticatedRoute.js';
import Returns from '../components/returns/index.js';

const ReturnsPage = () => {
    return (
        <Returns />
    )
}

export default authenticatedRoute(ReturnsPage, { pathAfterFailure: '/login' })
