import authenticatedRoute from '../components/auth/AuthenticatedRoute.js';
import Issues from '../components/issues/index.js';

const IssuesPage = () => {
    return (
        <Issues />
    )
}

export default authenticatedRoute(IssuesPage, { pathAfterFailure: '/login' })
