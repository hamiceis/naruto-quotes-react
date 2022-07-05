
interface buttonProps {
  children : string;
  event: () => {};
}

export function Button ({ children, event } : buttonProps)   {
  return <button className="p-2 m-1 text-zinc-50 border-solid border-2 border-black bg-orange-500 rounded shadow-black  hover:shadow-lg shadow  hover:bg-red-700" onClick={event}>
      {children}
  </button>
}