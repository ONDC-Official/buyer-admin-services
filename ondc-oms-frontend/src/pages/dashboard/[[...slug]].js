import { Tabs } from 'antd';
import authenticatedRoute from '../../components/auth/AuthenticatedRoute.js';
import Dashboard from '../../components/dashboard/orders/index.js';
import Issues from '../../components/dashboard/issues/index.js';
import Financials from '../../components/dashboard/financials/index.js';

import { useRouter } from 'next/router'

const DashboardPage = () => {

    const router = useRouter()
    const { TabPane } = Tabs;
    const tabList = ["orders", "issues", "financials"];
    const activeTab = router.query.slug?router.query.slug[0]:undefined;

    const onTabChange = (key) => {
        console.log(key);
        const url = `/dashboard/${key}`;
        router.push(url);
    };

    const renderTabContent = (tabName) => {
        switch (tabName) {
            case "orders":
                return <Dashboard />;
            case "issues":
                return <Issues />;
            case "financials":
                return <Financials />;
            default:
                return <Dashboard />;
        }
    };

    const capitalize = (s) => {
        return s.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
    };

    return (
        <Tabs
            centered
            defaultActiveKey="1"
            activeKey={activeTab}
            onChange={onTabChange}
            tabBarStyle={{color: 'red !important'}}
        >
            {
                tabList.map((tab) => {
                    return (
                        <TabPane style={{color: 'red !important'}} tab={capitalize(tab)} key={tab}>
                            {renderTabContent(tab)}
                        </TabPane>        
                    )
                })
            }
        </Tabs>
    )
    // return (
    //    <Dashboard />
    // )
}

export default authenticatedRoute(DashboardPage, { pathAfterFailure: '/login' })
