import React from 'react';
import Pdf from './Pdf'

export default function PdfView() {
    return <div className="pdf-grid">
      <nav className="my-2">
          <button className="ml-5 bg-gray-200 py-2 px-3 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Notes</button>
      </nav>   
      <Pdf />      
    </div>;
  }