import React, { useState } from 'react';
import algos from '../docs/algos.pdf'
import compilers from '../docs/Compilers.pdf'
import { Document, Page, pdfjs } from "react-pdf";
import ZoomBtns from "./ZoomBtns"
import SetPageBtns from "./SetPageBtns"
import SelectPage from "./SelectPage"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function Pdf() {
  const [numPages, setNumPages] = useState(13);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageNumberArr, setpageNumberArr] = useState([{ value: 1, label: 1 }]);
  const [pageZoom, setPageZoom] = useState(1.0);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    for (let i = 2; i <= numPages; i++) {
      let numObj = { value: i, label: i };
      setpageNumberArr(state => [...state, numObj]);
    }
  }

  return (
    <div style={{ outline: '1px solid red', overflowY: 'hidden' }}>
      <SelectPage pageNumber={pageNumber} pageNumberArr={pageNumberArr} setPageNumber={setPageNumber} />
      <p className="text-center my-3">
        Page {pageNumber} of {numPages}
      </p>
      <SetPageBtns pageNumber={pageNumber} setPageNumber={setPageNumber} />
      <ZoomBtns pageZoom={pageZoom} setPageZoom={setPageZoom} />
      <Document
        file={compilers}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page scale={pageZoom} pageNumber={pageNumber} />
      </Document>
    </div>
  );
}