interface ThProps{
  text: string
}

export default function Th({text}: ThProps){

  return (
    <th scope="col" className="px-2 py-4">{text}</th>
  )
}