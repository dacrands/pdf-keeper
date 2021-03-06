import React from 'react';
import { FunctionComponent } from 'react';

interface SetPageBtnsProps {
    setPageNumber: ((pageNumber: number) => void);
    pageNumber: number
}

const SetPageBtns: FunctionComponent<SetPageBtnsProps> = props => {
    return <div className="flex mb-3">
        {props.pageNumber > 1 &&
            <button className="flex-1 bg-green-200 hover:bg-green-400 mx-1 p-1 rounded" onClick={() => props.setPageNumber(props.pageNumber - 1)}>
            Previous page
            </button>
        }    
        <button 
            className="flex-1 bg-green-200 hover:bg-green-400 mx-1 p-1 rounded"          
            onClick={() => props.setPageNumber(props.pageNumber + 1)}
        >
        Next page
        </button>
    </div>
}

export default SetPageBtns;