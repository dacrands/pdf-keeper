import React from 'react';
import { FunctionComponent } from 'react';

interface ZoomBtnsProps {
    setPageZoom: ((pageZoom: number) => void);
    pageZoom: number;
}

const ZoomBtns: FunctionComponent<ZoomBtnsProps> = props => {
    return <div className="flex justify-center mb-3">
        <button
            className="flex-1 max-w-xs bg-gray-200 hover:bg-gray-400 mx-1 p-1 rounded"
            onClick={() => props.setPageZoom(props.pageZoom - .25)}>
            -
        </button>
        <button
            className="flex-1 max-w-xs bg-gray-200 hover:bg-gray-400 mx-1 p-1 rounded"
            onClick={() => props.setPageZoom(props.pageZoom + .25)}
        >
            +
        </button>
    </div>
}

export default ZoomBtns;