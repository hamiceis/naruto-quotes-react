import React, { useState } from 'react';
import { Quotes } from '../../components/Quotes'
import  narutoImg from '../../images/naruto.png'



function App() {

  const [quoteState, setQuoteState] = useState({
    quote:'Aperte um botão para mostrar uma frase',
    speaker: ''
  })
 

  return (
    <div className="h-screen px-10 flex justify-around items-center">

     <Quotes {...quoteState} setQuoteState={setQuoteState} />
  
      <img className="max-w-[50vw] flex-1 self-end"
        src={narutoImg}
        alt="naruto modo-senin"
       />
    
      </div>
  )
}

export default App
