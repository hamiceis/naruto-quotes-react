
import { Button } from "./Button";

interface quoteProps {
  quote: string;
  speaker: string;
  setQuoteState: any;
}

export const Quotes = ({ quote, speaker, setQuoteState }: quoteProps) => {


  const onUpdate = {
    quote: 'Desista de me fazer desistir...',
    speaker: 'Naruto'
  }
  

  return (
   <div className="flex-1 flex flex-col items-center">

  <p className="text-2xl flex-1 m-0">
    {quote}
  </p>
  <p className="text-2xl flex-1 mb-12 text-right ">
    - {speaker}
  </p>

  <Button event={() => setQuoteState(onUpdate)}>
      Quotes Jutsu
  </Button>

   </div>
  )
}
