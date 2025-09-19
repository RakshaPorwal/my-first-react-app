// import React, { useContext, useState } from 'react';
// import { PDFContext } from '../context/PDFContext';

// function PdfUploads() {
//   const { addPdf } = useContext(PDFContext);

//   const [formData, setFormData] = useState({
//     title: '',
//     file: null
//   });

//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: name === 'file' ? files[0] : value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.title || !formData.file) {
//       setMessage('Please fill in all fields.');
//       return;
//     }

//     const fileUrl = URL.createObjectURL(formData.file);
//     const newPdf = {
//       title: formData.title,
//       fileUrl
//     };

//     addPdf(newPdf); // ✅ Using context safely

//     setMessage('PDF uploaded successfully!');
//     setFormData({ title: '', file: null });

//     // Clear file input manually
//     document.getElementById('fileInput').value = '';
//   };

//   return (
//     <div className="container py-5">
//       <h2 className="mb-4">Upload Educational PDF</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label className="form-label">PDF Title</label>
//           <input
//             type="text"
//             className="form-control"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Choose PDF</label>
//           <input
//             type="file"
//             className="form-control"
//             accept="application/pdf"
//             onChange={(e) => setFile(e.target.files[0])}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-success">Upload</button>
//         {message && <p className="mt-3 text-info">{message}</p>}
//       </form>
//     </div>
//   );
// }

// export default PdfUploads;
import React, { useState, useContext } from 'react';
import { PDFContext } from '../context/PDFContext';

function PdfUploads() {
  const { addPdf } = useContext(PDFContext);

  const [formData, setFormData] = useState({
    title: '',
    file: null
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'file' ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.file) {
      setMessage('Please fill in all fields.');
      return;
    }

    const fileUrl = URL.createObjectURL(formData.file);
    const newPdf = {
      title: formData.title,
      fileUrl
    };

    addPdf(newPdf); // ✅ Using context safely

    setMessage('PDF uploaded successfully!');
    setFormData({ title: '', file: null });

    // Clear file input manually
    document.getElementById('fileInput').value = '';
  };

  return (
    <div className="container py-5 mt-4 text-white">
      <h2 className="text-center mb-4"> Upload New PDF</h2>
      <form
        onSubmit={handleSubmit}
        className="mx-auto bg-light p-4 rounded shadow"
        style={{ maxWidth: '500px' }}
      >
        <div className="form-group mb-3">
          <label htmlFor="title">PDF Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter title"
            required
          />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="fileInput">Select PDF File</label>
          <input
            type="file"
            className="form-control"
            id="fileInput"
            name="file"
            accept="application/pdf"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn bg-dark btn-success w-100">
          Upload PDF
        </button>
      </form>

      {message && (
        <div className="alert alert-info mt-3 text-center" role="alert">
          {message}
        </div>
      )}
    </div>
  );
}

export default PdfUploads;
