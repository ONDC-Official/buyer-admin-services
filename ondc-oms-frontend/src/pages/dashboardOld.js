import authenticatedRoute from '../components/auth/AuthenticatedRoute.js';
import Dashboard from '../components/dashboard/orders/index.js';

const DashboardPage = () => {
    return (
       <Dashboard />
    )
}

export default authenticatedRoute(DashboardPage, { pathAfterFailure: '/login' })
