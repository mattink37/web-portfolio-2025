import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Base from '@/pages/Base';
import Contact from '@/pages/Contact/Contact';
import MyWork from '@/pages/MyWork/MyWork';
import { Navigate } from 'react-router-dom';

const Routing = () => {
  return (
    <Routes>
      <Route path="*" element={<Base PageContent={<Home />} />} />
      <Route path="/services" element={<Base PageContent={<MyWork />} />} />
      <Route path="/my-work" element={<Navigate to="/services" replace />} />
      <Route path="/contact" element={<Base PageContent={<Contact />} />} />
    </Routes>
  );
};

export default Routing;