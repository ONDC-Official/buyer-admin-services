import Items from '../../components/catalogs/items/index.js';
import authenticatedRoute from '../../components/auth/AuthenticatedRoute.js';

const ItemsPage = () => {
    return (
        <Items />
    )
}

export default authenticatedRoute(ItemsPage, { pathAfterFailure: '/login' })