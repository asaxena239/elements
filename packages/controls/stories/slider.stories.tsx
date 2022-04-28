import { useState, ChangeEvent } from "react"
import { Box } from "@doors/core"
import { Slider } from "../src"

export default {
  title: "Packages/Controls/Slider",
}
export function ControlledSlider() {
  const [slideValue, setValue] = useState(20)
  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Box
          as="label"
          htmlFor="down-payment-percent"
          sx={{ display: "inline", fontWeight: "black" }}
        >
          Down payment
        </Box>
        <Box as="span">: {slideValue}%</Box>
      </Box>
      <Slider
        id="down-payment-percent"
        min="0"
        max="100"
        step="any"
        value={slideValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setValue(parseInt(e.target.value))
        }}
      />
    </Box>
  )
}
