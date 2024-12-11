import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SideNavbar from './components/SideNavbar';
import Footer from './components/Footer';
import Buyer from './pages/Buyer/Buyer';
// import AdminLogin from './components/AdminLogin';

function App() {
  return (
  <>
  {/* <Buyer/> */}
      
      <Outlet/>
   
    
  </>
  
  );
}

export default App;
