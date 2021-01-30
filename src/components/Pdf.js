import React, { useState } from 'react';
import algos from '../docs/algos.pdf'
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Pdf() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file={algos}
        onLoadSuccess={onDocumentLoadSuccess}
      >       
            <Page pageNumber={pageNumber} />       
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
      {pageNumber > 1 &&
          <button onClick={() => setPageNumber(pageNumber - 1)}>
            Previous page
          </button>
      }    
      <button onClick={() => setPageNumber(pageNumber + 1)}>
        Next page
      </button>
    </div>
  );
}