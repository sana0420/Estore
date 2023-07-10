import React from 'react'
import Cards from './components/Cards';
function Relax(props) {
      return (
       <div className='mt-4'>
         <Cards data={props.data}/>
       </div>
    )
}

export default Relax