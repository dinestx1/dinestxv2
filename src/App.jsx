import { useState, useEffect } from 'react';
import { useLocation, Outlet} from 'react-router-dom';
import { Floating1, Footer, Header, Logo} from './components';
import ScrollTop from './components/ScrollTop';
import { useDispatch } from 'react-redux';
import { checkAuth } from './store/slices/authSlice';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch=useDispatch()

  const location = useLocation();

  useEffect(()=>{
    dispatch(checkAuth())
  },[dispatch])
  
  useEffect(() => {
    const loadTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(loadTimeout);
  }, []);


  return (
    <div>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center ">
          <img src={Logo} alt="Loading..." className="w-42 h-32 animate-pulse" />
        </div>
      ) : (
        <div id="scrollable-container" className="h-screen w-screen overflow-y-auto scrollbar-thin scroll-smooth">
          <ScrollTop />
          <Header />
          <main>
            <Outlet />
          </main>
          <Floating1 />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
