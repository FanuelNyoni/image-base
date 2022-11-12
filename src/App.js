import { useState } from 'react';
import Grid from './components/Grid';
import Header from './components/Header'
import Modal from './components/Modal';
import UploadImage from './components/UploadImage';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Header />
      <UploadImage />
      <Grid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
