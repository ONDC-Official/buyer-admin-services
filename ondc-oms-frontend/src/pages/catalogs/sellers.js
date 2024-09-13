import Sellers from '../../components/catalogs/sellers/index.js';
import authenticatedRoute from '../../components/auth/AuthenticatedRoute.js';

const SellerAppsPage = () => {
    return (
        <Sellers />
    )
}

export default authenticatedRoute(SellerAppsPage, { pathAfterFailure: '/login' })



