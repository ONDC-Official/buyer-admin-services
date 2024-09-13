"use client";
import authenticatedRoute from '../components/auth/AuthenticatedRoute.js';
import Settlements from '../components/settlements/index.js';

const SettlementsPage = () => {
    return (
       <Settlements />
    )
}

export default authenticatedRoute(SettlementsPage, { pathAfterFailure: '/login' })
