import React, { useContext } from 'react';
import { PDFContext } from '../context/PDFContext';
import { AuthContext } from '../context/AuthContext';

function Resources() {
  const { pdfs, setPdfs } = useContext(PDFContext);
  const { user } = useContext(AuthContext);
  const isAdmin = user?.isAdmin;

  const handleDelete = (indexToDelete) => {
    const updated = pdfs.filter((_, index) => index !== indexToDelete);
    setPdfs(updated);
    localStorage.setItem('pdfs', JSON.stringify(updated));
  };

  const staticPDFs = [
    { title: "Java Basics Notes", url: "https://drive.google.com/drive/folders/1XvHUQ8NZvZGaUEZyeUb3zi10WnUEkMmR?usp=drive_link" },
    { title: "HTML Guide", url: "https://drive.google.com/drive/folders/1PmcAPvTZMopb3CwPfVVktiKtwtKFDIJp?usp=drive_link" },
    { title: "CSS Notes", url: "https://drive.google.com/drive/folders/1aUkX1itCHXsYgoRdC-RIJgloZmz2eC-F?usp=drive_link" } ,
    { title: "Python Notes", url: "https://drive.google.com/drive/folders/19vQDjVwEKZc8jptRoNIXI6RNhBrWtzN1?usp=drive_link" } ,
  ];

  const allPDFs = [
    ...staticPDFs.map((pdf) => ({ ...pdf, source: "static" })),
    ...pdfs.map((pdf) => ({ ...pdf, source: "uploaded" }))
  ];

  return (
    <>
    <div className="container-fluid bg-primary mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "400px" }}>
          <h3 className="display-3 font-weight-bold text-white">Resources</h3>
          <div className="d-inline-flex text-white">
            <p className="m-0"><a className="text-white" href="/">Home</a></p>
            <p className="m-0 px-2">/</p>
            <p className="m-0">Resources</p>
          </div>
        </div>
  </div>
      <div className="row justify-content-center pt-5 mb-5">
        {allPDFs.length === 0 ? (
          <p className="text-center text-muted">No PDFs available.</p>
        ) : (
          allPDFs.map((pdf, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card bg-light text-dark shadow border-0 h-100">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title">
                      <i className="fas fa-file-pdf me-2 text-danger"></i>
                      {pdf.title}
                    </h5>
                    <p className="card-text small text-black">
                      Click below to download this learning material.
                    </p>
                  </div>
                  <a
                    href={pdf.fileUrl || pdf.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark mt-2"
                  >
                    Download PDF
                  </a>
                  <a
                    href={pdf.fileUrl || pdf.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark mt-2"
                  >
                    View PDF
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Resources;
