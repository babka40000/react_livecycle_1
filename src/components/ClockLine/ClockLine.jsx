import React, { useState }  from 'react';
import './css/ClockLine.css';
import Clock from '../Clock/Clock';

const ClockLine = () => {

  const [clocks, clocksSet] = useState([]);

  const SubmitHandler = (event) => {
    event.preventDefault();
    clocksSet([...clocks, <Clock key={clocks.length} name={event.target.name.value} offset={event.target.GMT.value} />]);
  }

  return (
    <div>
      <form className='clock-line-util' onSubmit={SubmitHandler}>
        <label htmlFor="name" name="name">Имя часов</label>
        <input id='name'></input>
        <label htmlFor="GMT" name="GMT">GMT</label>
        <input id='GMT'></input>
        <button type="submit">Добавить</button>
      </form>
      <div className='clock-line-clocks'>
        {clocks}
      </div>
    </div>
  )
}

export default ClockLine