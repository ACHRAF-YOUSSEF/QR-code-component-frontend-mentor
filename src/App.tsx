import './App.css';

import Footer from './components/Footer';
import QRCode from './components/QRCode';

function App() {
  return (
    <>
      <div 
        className="
          flex
          flex-col
          bg-Light-gray
          w-full
          h-screen
          justify-center
          text-center
          items-center
          py-5
        ">
        <QRCode />
        <Footer />
      </div>
    </>
  );
}

export default App;