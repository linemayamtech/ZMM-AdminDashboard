
import { Outlet } from 'react-router-dom';
// import './App.css';
import '../../src/App.css'
import Header from './Header';
import SideNavbar from './SideNavbar';
import Footer from './Footer';

// import AdminLogin from './components/AdminLogin';

const AdminDashboard = () => {
  return (
    <>
    <Header/>
    <div className='flex w-full h-[100%] '>
      <div className='w-1/6'>
          <SideNavbar/>
      </div>
      <div className='w-5/6'>  
        <Outlet/>
        <Footer/>
      </div>
    </div>
      
    </>
  )
}

export default AdminDashboard 