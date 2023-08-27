import React from 'react'
import './ColorContainer.css'
import colorList from '../../ColorList'

export default function ColorContainer(props) {
  return (
    <div className='searchContainer'>
        {colorList.map((color) => <button style={{backgroundColor: color, width: '30px', height: '30px'}} value={color} onClick={props.onClick} key={color}></button>)}
    </div>
  )
}
