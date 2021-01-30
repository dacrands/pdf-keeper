import React, { useState } from 'react';
import algos from '../docs/algos.pdf'
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Pdf() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageZoom, setPageZoom] = useState(1.0);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div style={{outline: '1px solid red'}}>
      <p className="text-center my-3">Page {pageNumber} of {numPages}</p>
      <div className="flex mb-3">
        {pageNumber > 1 &&
            <button className="flex-auto bg-green-200 hover:bg-green-400 mx-1 p-1 rounded" onClick={() => setPageNumber(pageNumber - 1)}>
              Previous page
            </button>
        }    
        <button 
          className="flex-auto bg-green-200 hover:bg-green-400 mx-1 p-1 rounded"          
          onClick={() => setPageNumber(pageNumber + 1)}
          >
          Next page
        </button>
      </div>
      <Document    
        file={algos}
        onLoadSuccess={onDocumentLoadSuccess}
        >       
            <Page scale={pageZoom} pageNumber={pageNumber} />       
      </Document>
    </div>
  );
}