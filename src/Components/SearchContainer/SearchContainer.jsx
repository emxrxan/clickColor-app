import React from 'react'
import './SearchContainer.css'
import { forwardRef } from 'react'

export default forwardRef(function SearchContainer(props, ref) {
  return (
    <div className='searchContainer'>
        <label>Search: </label>
        <input ref={ref} type="text" name='search' placeholder='#.......'/>
        <button onClick={props.onClick}>Click</button>
    </div>
  )
})
