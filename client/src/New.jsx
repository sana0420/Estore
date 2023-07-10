import React from 'react'
import "./New.css";
import Cards from './components/Cards';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
function New(props) {
    return (
       <div className='mt-4'>
         <Cards data={props.data}/>
       </div>
    )
}

export default New