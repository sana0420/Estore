import React from 'react'
import "./Sale.css";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import Salecard from './components/Sale-card';
function Sale(props) {
    return (
       <div className='mt-4'>
         <Salecard data={props.data} single={props.single}/>
       </div>
    )
}

export default Sale