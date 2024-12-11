import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import App from '../App';
// import SideNavbar from '../components/SideNavbar';
// import Home from '../components/Home';
import Dashboard from '../pages/Dashboard';
import WebsiteSettings from '../pages/websiteSetting/WebsiteSettings';
import Buyer from '../pages/Buyer';
import ProductSellers from '../pages/ProductSellers';
import Osp from '../pages/Osp';
import Products from '../pages/Products';
import Services from '../pages/Services';
import ProductRFQ from '../pages/ProductRFQ';
import ServiceRFQ from '../pages/ServiceRFQ';
import Settings from '../pages/Settings';
import Tickets from '../pages/Tickets';
import Order from '../pages/Order';
import ProfileDetails from '../components/ProfileDetails';
import ExploreProducts from '../pages/websiteSetting/ExploreProducts';
import TrendingProducts from '../pages/websiteSetting/TrendingProducts';
import SuccessStories from '../pages/websiteSetting/SuccessStories';
import Banners from '../pages/websiteSetting/ListingServicePages/Banners';
// import ListingServiceTrendingProducts from '../pages/websiteSetting/ListingServicePages/ListingServiceTrendingProducts';
import ListingServiceExploreProducts from '../pages/websiteSetting/ListingServicePages/ListingServiceExploreProducts';
import AdminLogin from '../components/AdminLogin';
import AdminDashboard from '../components/AdminDashboard';
import ListingServiceTrendingProducts from '../pages/websiteSetting/ListingServicePages/ListingServiceTrendingProducts';

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'',
                element:<AdminLogin/>
            },
            {
                path:'admindashboard',
                element:<AdminDashboard/>,
                children:[
                    {
                        path:'dashboard',
                        element:<Dashboard/>
                    },
                    {
                        path:'websitesettings',
                        element:<WebsiteSettings/>
                    },
                    {
                        path:'buyer',
                        element:<Buyer/>
                    },
                    {
                        path:'productsellers',
                        element:<ProductSellers/>
                    },
                    {
                        path:'osp',
                        element:<Osp/>
                    },
                    {
                        path:'products',
                        element:<Products/>
                    },
                    {
                        path:'services',
                        element:<Services/>
                    },
                    {
                        path:'productrfq',
                        element:<ProductRFQ/>
                    },
                    {
                        path:'servicerfq',
                        element:<ServiceRFQ/>
                    },
                    {
                        path:'order',
                        element:<Order/>
                    },
                    {
                        path:'tickets',
                        element:<Tickets/>
                    },
                    {
                        path:'settings',
                        element:<Settings/>
                    },
                    {
                        path:'profiledetails',
                        element:<ProfileDetails/>
                    },
                    {
                        path:'exploreproducts',
                        element:<ExploreProducts/>
                    },
                    {
                        path:'trendingproducts',
                        element:<TrendingProducts/>
                    },
                    {
                        path:'successstories',
                        element:<SuccessStories/>
                    },
                    {
                        path:'banner',
                        element:<Banners/>
                    },
                    {
                        path:'lisitngproducts',
                        element:<ListingServiceTrendingProducts/>
                    },
                    {
                        path:'listingexplore',
                        element:<ListingServiceExploreProducts/>
                    },
                ]

            },
           
        ]
    }

]);
export default router;