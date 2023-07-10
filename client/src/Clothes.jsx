import React from 'react'
import Cards from './components/Cards';
import Salecards from './components/Sale-card'
function Clothes(props) {
  return (
    <div className='mt-4'>
    <Cards data={props.data2}/>
    <Salecards data={props.data1}/>
  </div>
  )
}

export default Clothes