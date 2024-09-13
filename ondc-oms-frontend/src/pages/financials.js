"use client";
import authenticatedRoute from '../components/auth/AuthenticatedRoute.js';
import Financials from '../components/financials/index.js';
import Orders from '../components/orders/index.js';

const FinancialsPage = () => {
    return (
       <Financials />
    )
}

export default authenticatedRoute(FinancialsPage, { pathAfterFailure: '/login' })
