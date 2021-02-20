import React, { useState } from 'react';
import Select from 'react-select'
import algos from '../docs/algos.pdf'
import { Document, Page, pdfjs } from "react-pdf";
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
      <div style={{maxWidth:'150px'}}>
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
      <div className="flex justify-center mb-3">
        <button 
          className="flex-1 max-w-xs bg-gray-200 hover:bg-gray-400 mx-1 p-1 rounded" 
          onClick={() => setPageZoom(pageZoom - .25)}>
          -
        </button>        
        <button 
          className="flex-1 max-w-xs bg-gray-200 hover:bg-gray-400 mx-1 p-1 rounded"          
          onClick={() => setPageZoom(pageZoom + .25)}
          >
          +
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