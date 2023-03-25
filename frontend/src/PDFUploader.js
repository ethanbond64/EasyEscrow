import React, { useState } from 'react';
import axios from 'axios';

function PDFUploader() {
  const [file, setFile] = useState(null);
  const [responseJson, setResponseJson] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('files', file);

    try {

      const response = await fetch('http://localhost:8000/', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*'
        },
      });

      // const response = await axios.post('http://localhost:8000/', formData, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // });

      if (response.status === 200) {
        console.log('File uploaded successfully');
        setResponseJson(response.data);
        setFile(null);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  if (responseJson) {
    return <div>{JSON.stringify(responseJson)}</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        accept="application/pdf"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PDFUploader;