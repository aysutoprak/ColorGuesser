import { createContext } from "react"

interface ColorsContextInterface {
  currentColor: string,
  showColor: boolean,
  color: string,
  setColor: any,
  setShowColor: any,
  setCurrentColor: any,
}

export const ColorsContext = createContext<ColorsContextInterface | null>(null)