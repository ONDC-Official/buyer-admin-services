import authenticatedRoute from '../components/auth/AuthenticatedRoute.js';

const SettingsPage = () => {
    return (
        <h1>This is settings page</h1>
    )
}

export default authenticatedRoute(SettingsPage, { pathAfterFailure: '/login' })
