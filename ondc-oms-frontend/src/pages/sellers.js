"use client";
import authenticatedRoute from '../components/auth/AuthenticatedRoute.js';
import Sellers from '../components/sellers/index.js';

const SellersPage = () => {
    return (
       <Sellers />
    )
}

export default authenticatedRoute(SellersPage, { pathAfterFailure: '/login' })
