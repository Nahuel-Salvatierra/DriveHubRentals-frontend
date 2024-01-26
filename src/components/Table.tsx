import { DataType } from "../hooks/useFetchOnChange";
import TBody from "./TBody";

interface TableProps{
  children: React.ReactNode
  data: DataType
}
export default function Table({children , data}: TableProps) {
  
  return (
    <div className="px-20  overflow-x-auto relative pt-10 sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-900 uppercase bg-gray-50">
        {children}
      </thead>

      {data && <TBody fetchedData={data}/>}
    </table>
  </div>
  )
}