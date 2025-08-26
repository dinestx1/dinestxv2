// ScrollTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const container = document.getElementById('scrollable-container');
    if (container) {
      container.scrollTo({
        top: 0, // make sure this is set
        behavior: 'smooth',
      });
    }
  }, [pathname]);

  return null;
}
