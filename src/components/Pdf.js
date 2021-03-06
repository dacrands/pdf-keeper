import React, { useState } from 'react';
import Select from 'react-select'
import algos from '../docs/algos.pdf'
import compilers from '../docs/Compilers.pdf'
import { Document, Page, pdfjs } from "react-pdf";
import ZoomBtns from "./ZoomBtns"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function Pdf() {
  const [numPages, setNumPages] = useState(13);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageNumberArr, setpageNumberArr] = useState([{ value: 1, label: 1 }]);
  const [pageZoom, setPageZoom] = useState(1.0);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);    
    for (let i = 2; i <= numPages; i++) {      
      let numObj = {value: i, label: i};    
      setpageNumberArr(state => [...state, numObj]);
    }    
  }

  function onPageSelectChange(obj) {
    setPageNumber(obj.value);
  }

  return (
    <div style={{outline: '1px solid red', overflowY: 'hidden'}}>
      <div style={{maxWidth:'250px', margin: "0 auto", display:"grid", gridTemplateColumns: "100px 150px", alignItems: "center"}}>
      <span>Go to page: </span>
      <Select        
        options={pageNumberArr}
        defaultValue={{ value: pageNumber, label: pageNumber }}
        onChange={onPageSelectChange}
        />
      </div>
      <p className="text-center my-3">
        Page {pageNumber} of {numPages}
      </p>
      <div className="flex mb-3">
        {pageNumber > 1 &&
            <button className="flex-1 bg-green-200 hover:bg-green-400 mx-1 p-1 rounded" onClick={() => setPageNumber(pageNumber - 1)}>
              Previous page
            </button>
        }    
        <button 
          className="flex-1 bg-green-200 hover:bg-green-400 mx-1 p-1 rounded"          
          onClick={() => setPageNumber(pageNumber + 1)}
          >
          Next page
        </button>
      </div>
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