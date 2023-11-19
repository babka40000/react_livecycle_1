import React, { useState, useEffect } from 'react';
import './css/Clock.css'

const Clock = props => {
  function getCurrentDateTime(rawDate) {
    const zeroPad = (num, places) => String(num).padStart(places, '0')

    return `${zeroPad(Math.floor((rawDate % (3600 * 24)) / 3600), 2)}:${zeroPad(Math.floor((rawDate % 3600) / 60),2)}:${zeroPad(rawDate % 60, 2)}`;
  }
  
  const [deltaSec, setDeltaSec] = useState(1);
  const [showComponent, setShowComponent] = useState(true);
    
  useEffect(() => {
    let currentdate = new Date();

    currentdate = Math.floor(currentdate.getTime() / 1000);

    currentdate = currentdate + props.offset * 3600;

    setDeltaSec(currentdate);

    const timerID = setInterval(() => {
      setDeltaSec(deltaSec => deltaSec + 1);
    }, 1000);
    
    return () => {
      clearInterval(timerID);
    }
  }, []);

  const ClickHandler = () => {
    setShowComponent(false);
  }

  return (
    <div>
      {showComponent && <div className='clock-main'>
        <div className='clock-row'>
          <div>{props.name}</div>
          <button onClick={ClickHandler}>x</button>
        </div>
        <div>{getCurrentDateTime(deltaSec)}</div>
      </div>}
    </div>
  )
}

export default Clock