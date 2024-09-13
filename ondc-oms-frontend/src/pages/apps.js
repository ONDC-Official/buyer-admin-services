import authenticatedRoute from '../components/auth/AuthenticatedRoute.js';

const AppsPage = () => {
    return (
        <h1>This is apps page</h1>
    )
}

export default authenticatedRoute(AppsPage, { pathAfterFailure: '/login' })
