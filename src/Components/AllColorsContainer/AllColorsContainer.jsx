import React, { useEffect, useState } from 'react'
import './AllColorsContainer.css'

export default function AllColorsContainer(props) {

    const [showAlert, setShowAlert] = useState(null);
    const copiedAlert = () => {
        setShowAlert(null);
    }

    useEffect(() => {
        setTimeout(() => {
            copiedAlert();
        }, 4000);

    // eslint-disable-next-line
    },[showAlert])

  return (<div className='AllColorsContainer'>
            {props.list.map((element) => {
                return <div className="color" style={{backgroundColor:`#${element.hex}`}} key={`color:#${element.hex} weight:${element.weight}%`} 
                            onClick={()=>{navigator.clipboard.writeText(`#${element.hex}`); setShowAlert(true);}}
                        >
                            <p>{`${element.weight}%`}</p>
                            <p>{`#${element.hex}`}</p>
                        </div>
            })}
            {showAlert && <div className='copiedAlert' style={{fontSize: '2rem'}}>Copied</div>}
        </div>
  )
}
