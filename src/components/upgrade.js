import React from 'react'

const Upgrade = ( {myUpgrades,setcounter,counter,pay} ) => {
  return (
    <div>
        <h1>{myUpgrades.quote}</h1>
        <button className='buyButton' onClick={
            (event)=>{setcounter(pay(counter,myUpgrades.cost))}
        }>BUY!</button>
    </div>
  )
}

export default Upgrade