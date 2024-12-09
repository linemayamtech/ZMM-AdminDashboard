import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SideNavbar from './components/SideNavbar';
import Footer from './components/Footer';
// import AdminLogin from './components/AdminLogin';

function App() {
  return (
  <>
  
      
      <Outlet/>
   
    
  </>
  
  );
}

export default App;
