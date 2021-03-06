import React from 'react';
import { FunctionComponent } from 'react';
import Select from 'react-select'

interface SelectPageProps {
    setPageNumber: ((pageNumber: number) => void);
    pageNumberArr: any;
    pageNumber: number;    
}

const SelectPage: FunctionComponent<SelectPageProps> = props => {
    function onPageSelectChange(obj: any) {
        props.setPageNumber(obj.value);
    }
    return <div style={{maxWidth:'250px', margin: "0 auto", display:"grid", gridTemplateColumns: "100px 150px", alignItems: "center"}}>
        <span>Go to page: </span>
        <Select        
          options={props.pageNumberArr}
          defaultValue={{ value: props.pageNumber, label: props.pageNumber }}
          onChange={onPageSelectChange}
          />
      </div>
}

export default SelectPage;