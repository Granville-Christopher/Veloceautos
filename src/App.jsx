import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CarModal from './components/CarModal';
import FloatingButtons from './components/FloatingButtons';
import BackgroundGrid from './components/BackgroundGrid';
import HomePage from './pages/HomePage';
import InventoryPage from './pages/InventoryPage';

export default function App() {
  const [modalCarId, setModalCarId] = useState(null);

  const openModal = (carId) => setModalCarId(carId);
  const closeModal = () => setModalCarId(null);

  return (
    <BrowserRouter>
      <div className="bg-showroom-950 text-chrome-bright font-sans overflow-x-hidden min-h-screen">
        <BackgroundGrid />
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage onOpenModal={openModal} />} />
          <Route path="/inventory" element={<InventoryPage onOpenModal={openModal} />} />
        </Routes>

        <Footer />
        <CarModal carId={modalCarId} onClose={closeModal} />
        <FloatingButtons />
      </div>
    </BrowserRouter>
  );
}
