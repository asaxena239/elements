import { useState, ChangeEvent } from "react"
import { Slider } from "../src"

export default {
  title: "Packages/Controls/Slider",
}
export function ControlledSlider() {
  const [slideValue, setValue] = useState(0)
  return (
    <Slider
      min="0"
      max="100"
      value={slideValue}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setValue(parseInt(e.target.value))
      }}
    />
  )
}
