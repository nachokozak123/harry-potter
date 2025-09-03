import { useState } from 'react'
import './Main.css'
import { db } from '../../static/Arrays'

function Main() {
  return (
    <>
      <div className="contenedorGeneral">
        {db}
      </div>
    </>
  )
}

export default Main