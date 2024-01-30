import { useContext } from "react";
import { BackOfficeContext } from "../contexts/BackOfficeProvider";

export default function useBackOffice(){
  const context= useContext(BackOfficeContext)
  if(!context) throw new Error("useBackOffice must be used within a BackOfficeProvider")
  return context
}