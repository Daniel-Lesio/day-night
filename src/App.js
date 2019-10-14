import React from 'react';
import Navbar from './components/Navbar';
import AdminContextProvider from './contexts/AdminContext';
import ModeButton from './components/ModeButton';
import Mybody from './components/Mybody';
import './index.scss';
function App() {
  return (
    <div className="App">
       <AdminContextProvider>
          <Navbar></Navbar>
          <ModeButton></ModeButton>
          <Mybody></Mybody>
       </AdminContextProvider>
    </div>
  );
}

export default App;
