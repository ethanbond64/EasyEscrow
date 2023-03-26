import logo from './logo.svg';
import './App.css';
import PDFUploader from './PDFUploader';
import React, { useState } from 'react';

function App() {

  const [data, setData] = useState(null);

  return (
    <div className="relative m-auto flex h-screen">
      {
        data == null ? <PDFUploader setData={setData} /> : <div>{JSON.stringify(data)}</div>
      }

    </div>
  );
}

export default App;
