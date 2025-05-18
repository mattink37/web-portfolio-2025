import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Base from '@/pages/Base';
import Contact from '@/pages/Contact/Contact';
import MyWork from '@/pages/MyWork/MyWork';

const Routing = () => {
  return (
    <Routes>
      <Route path="*" element={<Base PageContent={<Home />} />} />
      <Route path="/my-work" element={<Base PageContent={<MyWork />} />} />
      <Route path="/contact" element={<Base PageContent={<Contact />} />} />
    </Routes>
  );
};

export default Routing;
