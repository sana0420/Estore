import React from 'react'
import Cards from './components/Cards';
import Salecards from './components/Sale-card'
function Shirts(props) {
  return (
    <div className='mt-4'>
        <Cards data={props.data1}/>
        <Salecards data={props.data2}/>
    </div>
  )
}

export default Shirts