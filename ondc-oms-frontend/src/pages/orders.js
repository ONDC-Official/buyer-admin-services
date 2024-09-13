"use client";
import authenticatedRoute from '../components/auth/AuthenticatedRoute.js';
import Orders from '../components/orders/index.js';

const OrdersPage = () => {
    return (
       <Orders />
    )
}

export default authenticatedRoute(OrdersPage, { pathAfterFailure: '/login' })
