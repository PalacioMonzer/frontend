import './Styles.css';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

import HomeScreen from './Components/Navbar';

import Navbar from './Screens/HomeScreen';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
