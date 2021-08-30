import React, { useEffect } from 'react';
import './Search.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl } from 'react-bootstrap'
import JSONDATA from '../TransportCompanies.json'
import { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import  TextField  from '@material-ui/core/TextField';

function Search() {
  
    return (
        <div className="search-body">
        
            <Autocomplete className="auto"
                id="combo-box-demo"
                options={JSONDATA.response.companies}
                getOptionLabel={(option) => option.name}
                style={{ width: 300 }}
                renderInput={(params) =>(
                     <TextField {...params} label="company's name"  variant="filled" />
                     )}
                getOptionLabel={((option)=>`${option.name}`)}

            />
            </div>
    )


}

  



export default Search


// <div>
// <label>
//     <InputGroup className="mb-3">
//         <InputGroup.Text >Search</InputGroup.Text>
//         <FormControl aria-label="Company name" />


//     </InputGroup>
// </label>
// </div>

/////////////////////
  // <div className="search-body">
        //     <input className="search-box"  type="text" placeholder="Company's name" 
        //     onChange={(event) => { setSearchTerm(event.target.value) }} />

        //     {JSONDATA.response.companies.filter((val) => {
        //         if (searchTerm == "") {

        //         } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase()))
        //          {

        //                 return val
        //         }
        //     }).map((val, key) => {
        //         return <div className="user" key={key}>
        //             <p >{val.name}</p>
        //         </div>
        //     })}

        // </div>
        
        /////////////////\\
        // const [searchTerm, setSearchTerm] = useState("");
       